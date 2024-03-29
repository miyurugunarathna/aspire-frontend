import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id: number;
  sid: string;
  fname: string;
  lname: string;
  dob: Date;
  gender: string;
  email: string;
  phone: string;
  password: string;
  approved: string;
  active: string;

  student: Student;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStudent();    
  }

  updateStudent() {
    this.studentService.update(this.id, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.router.navigate(['/admin/registrations'])
  }

  discard() {
    this.router.navigate(['/admin/registrations'])
  }

}
