/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.

ok so, in short we create a function that adds element in the array
*/

let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    makeFriend: function(add){
      this.friends.push(add);
    }
};
  
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  person.makeFriend("Bob");
  person.makeFriend("dude")
  
  console.log(
    `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
  );