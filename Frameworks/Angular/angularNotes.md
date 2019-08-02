## Install Angular

To install Angular from CLI
- npm install -g angular-cli
  * For the latest version
    - npm install -g @angular/cli@latest

To create a new project 
- ng new <project-name>

To start server
- ng serve

___________

## Component Creation

To create a component: 
- ng generate component <component-name> --inline-template --inline-style
   * Can also be written as n g c <component-name> -it -is

To add content to a component:
  - First Way
    * In the generated file with ending component.ts, inside the "template" key, write backticks. Inside the backticks add your html content.
    * To add functionality to your content, below in the export Class function, write your functions before the constructor!
  - Second Way
    * In the generated file with ending component.ts, create a key called "templateUrl", and set it to a value of single quotes.
    * Inside the single quotes, write component-name.component.html
    * In your component folder, create a file component-name.component.html. Here you can add the html content that you want.
    * To add functionality to your content, write your functions in the corresponding component-name.component.ts file before the constructor!
    

Components can be displayed in App in two ways:
- First Way (Angular 2)
    - Go to app.component.ts
    - Under component, write key labeled template, that's set
        to empty backticks
    - Within backticks, write a div. Within the div insert component of choice like <component-name> </component-name>
- Second Way (Angular 6+)
   - Go to app.components.html
   - Anywhere on the page, insert the name of the component you want to display like <component-name> </component-name>

___________

## Forms & Events - Part I
- To reference a form input, use #<input-name> inside input tag.

    Ex. <input #toyName type="text">

- When adding a event to button, inside the first button tag, put the name of the event type in parenthesis, then set it to the function that you are calling in quotes.

Ex. <button (click)="onClick()">

- Below in the export Class function, write your event function before the constructor!

- To pass the value of a input field on a button click, get the value like toyName.value. You don't need the #.

- To get the entire event, use $event

___________

## Passing Data

- In order to get data into to component, you have to import the data, then inside of the class statement create a variable set to the value of the imported data. Ex:
    `
    import { products } from '../products'
     export class ProductListComponent {
     products = products;
    }
    `
- To see each element and pass it to a div:
    * In the current component, use *ngFor to iterate over the items. For Example:

    `<div *ngFor="let item of products">
      {{ item.name }}
    </div>
    `

- There doesn't have to be a separate component to render data elements. However you can create components that handle logic for an individual element. 
    * For child components that need to render object specific information, import { Input } from '@angular/core'
    * In the class function, before the constructor, write @Input() and the singular name of the object that is being iterated over
    * Last in the component tags where the sub-component is written, bind the property name, and set it equal to the property name in strings.

    Ex. `<app-product-alerts
          [item]="item">
        </app-product-alerts>`

- If an event occurs in a child element, and you want to trigger it, you'll have to:
  * Import { Output, EventEmitter } from '@angular/core'

  * In the class function, write @Output() then create a variable that's set to be a new instance of the Event Emitter.

  Ex. `@Output() notify = new EventEmitter();`

  * In the parent element's class function, write the function that will be triggered during the click event.

  * In first component tag, where the component will be rendered, inside of parenthesis write the name of the variable that's set to be the new instance of the Event Emitter.

    * Ex ` <app-product-alerts
            [item]="item" (notify)="onNotify()">
           </app-product-alerts>`

  * Inside of the child component's html file, attach the emit event to html element.
  
    * <p *ngIf="item.price > 700">
         <button (click)="notify.emit()">Notify Me</button>
      </p>

  




