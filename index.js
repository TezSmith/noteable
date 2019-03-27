// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function(){
//     console.log('draw')
//   }
// }

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
 }
}
const circle = createCircle(1)

//Constuctor Function
function Circle(radius) {
  this.radius = radius
  this.draw = function() {
    console.log('draw')
  }
}

const another = new Circle(1)

//ES6 Classes
class Circle {
  constructor(radius){
    this.radius = radius
  }

  draw() {
    console.log('Tez')
  }
}

const tez = new Circle(1)
tez.draw()

/* ES6 Classes don't allow you to define variables within the class. 
Also, to use getter and setter methods, you'll have to use keywords get & set beside 
the respective functions.*/

