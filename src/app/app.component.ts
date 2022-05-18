import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  // new property that will hold form in the end. a form in angular is a group of controls.
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      // creating the form controls.
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender' : new FormControl('male'),
    });
  }
}
