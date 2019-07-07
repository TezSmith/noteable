import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  // template: `<p> In this jawn! </p>`,
  templateUrl: './signup-form.component.html',
  styles: []
})

export class SignupFormComponent implements OnInit {

  greeting = () => {
    
    console.log("What it do babyyy")
  }

  constructor() { }

  ngOnInit() {
  }

}
