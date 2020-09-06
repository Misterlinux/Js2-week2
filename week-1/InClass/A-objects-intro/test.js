/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
  let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true,
    price: {
      base: 500.0,
      baseConIva: 605.0
    },
    color: "negro",
    peso: 5500
  };


  var phone = {
    precio: 200,
    existe: "false"
  }

if(phone.existe){
  console.log("existe por cierto");
}else{
  console.log("ok maybe not")
}

console.log(phone.existe)



console.log(laptop)
var priceWithTax = laptop.price.base +100
console.log("El precio es: " + priceWithTax + " euros")


let example = {
  primo:34,
  what_else: [1, "well", 20],
  almost:{
    first_time: "missing",
    secondo: 100
  },
  end: false,
  working: function(){
    return "ok this is working";
  },
}

example.working();

example.what_else[1] = "lol";
example.end = true;
example.almost.secondo = 10;

console.log(example);
console.log(example["primo"]);
console.log(example.almost.secondo);

let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  working: {
    sayHi: function () {
      return console.log("Hi everybody! " + (this.numero - 20)),
      this.name = this.names + " indeed"
    },
    options: function(yui){
      if (yui == "maybe"){
        return console.log("ok this can work");
      }
      else{
        return console.log("you know what, nevermind")
      }
    },
    numero: 200,
  },
  lost: true,
  varied: this.goldMedals - 13,
};

athlete.working.options("maybe");

naming = athlete.working.sayHi();

console.log(naming);
console.log(athlete);
console.log(athlete.name);

let firsto = {
  min: "valore",
  less: 31,
}

let segundo = {
  min: "valored",
  less: 34,
}

let tertero = {
  min: "valoring",
  less: 39,
  valoring: 50,
  joi: "week",
}

let stringato = [firsto, segundo, tertero]

function namendo(lol){
  return lol.less <= 34;
}

console.log(stringato.filter(namendo));

console.log(Object.keys(tertero), Object.values(tertero));

for (const key in tertero){
  console.log(`${key}: ${tertero[key]}`); 
}

let arrai = Object.keys(tertero); //this should be an array now

console.log(arrai);

arrai.forEach((key) => {
    console.log(`${key} and the values as "${tertero[key]}"  `)
  }
)


function capitalise(str) {

  return str.charAt(0).toUpperCase(0) + str.slice(2);

}

var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

// the idea is to get the key OF the object that returns the value (number)


objectone = {
  voto = 34,
  number : 20,
  lol: 70
}


objectnot= Object.keys(objectone)

objectnot.filter(
  objectnum => {
    const number = objectnot[objectnum]
    console.log(number)
  }
)