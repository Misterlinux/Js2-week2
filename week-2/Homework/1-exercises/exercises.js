/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 * 
 * let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);
 * 
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  //let bdy=document.querySelector("body")
  arrayOfPeople.map((item)=>{
  let title1=document.createElement("h1")
   title1.innerText=item.name

   let title2=document.createElement("h2")
   title2.innerText=item.job
   
   content.appendChild(title1)
   content.appendChild(title2)}
   )

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 * let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);
 *
 */
function exerciseTwo(shopping) {
  let unlist=document.createElement("ul")
  let tag=document.querySelector("#content")
  shopping.forEach((item)=>{
  
    let list=document.createElement("li")
    list.innerText=item
    unlist.appendChild(list);

});

tag.appendChild(unlist);
  //Write your code in here
};

/**
    I'd like to display my three favorite books inside a nice webpage!
    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];
    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).
    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imgsource:"./images/firstbook.jpeg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imgsource:"./images/secondbook.jpeg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imgsource:"./images/thirdbook.jpeg"
  }
];

exerciseThree(books);


**/

function exerciseThree(books){
  let cont = document.querySelector("body")
  let uling = document.createElement("ul")
  /*
  let tig = document.querySelector("#content")
  tig.className = "largin";
  largin.style.backgroundColor = "red"
  */
  books.forEach( (ele) => {

    let lilin = document.createElement("li")

    let para = document.createElement("p")

    para.innerText = ele.title + " " + ele.author

    let imagin = document.createElement("img")

    imagin.src = ele.imgsource

    lilin.style.backgroundColor = ele.alreadyRead ? "red" : "green"

    lilin.appendChild(para)
    lilin.appendChild(imagin)
    uling.appendChild(lilin)

  })

  cont.appendChild(uling)

}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imgsource:"https://thumbs.dreamstime.com/b/pending-stamp-square-grunge-sign-label-182126839.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imgsource:"./images/secondbook.jpeg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imgsource:"./images/thirdbook.jpeg"
  }
];

exerciseThree(books);