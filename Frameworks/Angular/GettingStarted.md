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

##Component Creation

To create a component 
- ng generate component <component-name> --inline-template --inline-style
   * Can also be written as n g c <component-name> -it -is

Components can be displayed in App in two ways
- First Way (Angular 2)
    - Go to app.component.ts
    - Under component, write key labeled template, that's set
        to empty backticks
    - Within backticks, write a div. Within the div insert component of choice like <component-name> </component-name>
- Second Way (Angular 6+)
   - Go to app.components.html
   - Anywhere on the page, insert the name of the component you want to display like <component-name> </component-name>

___________

##Forms & Events
- To reference a form input, use #<input-name> inside input tag

    Ex. <input #toyName type="text">

- When adding a event to button, inside the first button tag, put the name of the event type in parenthesis, then set it to the function that you are calling in quotes.

Ex. <button (click)="onClick()">

- Below in the export Class function, write your event function before the constructor!

- To pass the value of a input field on a button click, get the value like toyName.value. You don't need the #.

- To get the entire event, use $event

