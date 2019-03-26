// document.addEventListener('DOMContentLoaded', init)

// function init() {
//    console.log("Hello World!")
// }

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
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log('draw')
//     }
//  }
// }
// const circle = createCircle(1)
//
// //Constuctor Function
// function Circle(radius) {
//   this.radius = radius
//   this.draw = function() {
//     console.log('draw')
//   }
// }
//
// const another = new Circle(1)

// //ES6 Classes
// class Circle {
//   constructor(radius){
//     this.radius = radius
//   }
//
//   draw() {
//     console.log('Tez')
//   }
// }
//
// const tez = new Circle(1)
// tez.draw()


//@ 59 mins let's try to make a Object Oriented Stopwatch
class Stopwatch {
  duration = 0

  get duration(){
    return duration
  }

  increase = () => {
  }


  start() {
    console.log("Start")
  }

  stop(){
    console.log("Stop")
  }

}

let sw = new Stopwatch()
console.log("This the stopwatch", sw)





////
