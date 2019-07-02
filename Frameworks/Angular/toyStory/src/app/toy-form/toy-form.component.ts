import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toy-form',
  template: `
    <div>
      <input #toyName type="text" />
      <button (click)="onClick(toyName.value)">Add Toy</button>
    </div>
  `,
  styles: []
})

export class ToyFormComponent implements OnInit {

  onClick = (value) => {
    console.log("Clicked: ", value)
  }

  constructor() { }

  ngOnInit() {
  }

}
