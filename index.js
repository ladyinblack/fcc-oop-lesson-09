// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Understand Own Properties</h1>`;

/** TODO:
 * Add the own properties of canary to the array ownProps.
 * 
 
 function Bird(name) {
   this.name = name;
   this.numLegs = 2;
 }
 
 let canary = new Bird("Tweety");
 let ownProps = [];
 // Only change code below this line 
 */

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];
// Only change code below this line
for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}
console.log(ownProps);
