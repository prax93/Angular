import { CommonModule } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, UserComponent],
})
export class AppComponent {

  @ViewChild(UserComponent, { static: true })
  usercomponent!: UserComponent;
    
  username =  ''
  useremail =  ''

  formGroup = new FormGroup({
    name: new FormControl(this.usercomponent?.user), // Default value to ensure not null
    email: new FormControl(''), // Default value to ensure not null
  });
  user: any;


  handleSubmit() {
    this.username = this.formGroup.value.name as string;
    this.useremail = this.formGroup.value.email as string;
    console.log(this.useremail);
    console.log(this.username)
  }

}
