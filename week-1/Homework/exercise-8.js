/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

[3]


/***************************************************************************************************************** 
*=========================================================================================================******** */
let barcelonaWorkers2 = mentors.filter(non => non.job.city == "Barcelona");

barcelonaWorkers2.map(ul =>console.log("ok here you got it", ul.firstName) );


let prim = mentors.forEach( (dude) => dude.job.city == "Barcelona" && dude.skills.includes("React")) 

mentors.filter(mas => mas.job.city == "Barcelona" && mas.skills.includes("React") ).forEach(mint => console.log(`hello this is the ${mint.firstName}`) );



mentors.forEach(mentor => {
  if (mentor.job.city === "Barcelona" && mentor.skills.includes("React")){
    console.log(`1) Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`);
  }
});





mentors.forEach((item) => {
  /*
  item.addStudentLikes = methodAddStudentLikes;
  item.addSkill = methodAddSkill;
  item.removeSkill = methodRemoveSkill;
  */
  if (item.job.city === 'Barcelona' && item.skills.find((s) => { return s === 'React'; })) {
    console.log(`"Hi, my name is ${item.firstName} ${item.lastName}. I work in Barcelona and i know React."`);
  }
  /*
  if (item.job.city === 'Barcelona') {
    item.addSkill('SQL');
    item.class = 'Jun1';
  }
  */
});

mentors.filter( ita => ita.job.city == "Barcelona" && ita.skills.find( (R) => {return R == "React"} )).forEach(por => console.log(`ok so, we got the ${por.firstName}`));

console.log(mentors.map((x)=>{return x.skills[1]  }));


for(a of mentors){
  if(a.job.city==="Barcelona" && a.skills.find( (J) => { return J == "React"; } )){
console.log("Hi, my name is "+ a.firstName + a.lastName+"." +"I work in Barcelona and i know Reacting.")
  }
};


/* trying the if ------------------------------------------------------------------*/

for (lol of mentors){
  if(lol.job.city==="Barcelona" && lol.skills.find( (J) => { return J == "React"; } )) {
    lol.class="Jun1"
    lol.skills.push("SQL")
    console.log("ok so the dude " + lol.firstName + " knows " + lol.skills)
  }
};


//mentors.filter( (uli) => uli.job.city =="Barcelona").forEach








//mentors.filter(min =>  min.job.city == "Barcelona").forEach(hector => )



mentors.forEach(mentori =>{
  if(mentori.job.city === "Barcelona" && mentori.skills.includes("React")  ) {
    mentori.class = "Jun1";
    mentori.skills.push("SQL");
    console.log('2)', mentori);
  }
});

/******************************************************************************************************************
/*3. Create an object method with the name .addSkill() to be able to add skills from it**/
/*****************************************************************************************************************************========================================================================================================= */


mentors.forEach( (man) => man.addSkill = function(mas){
  this.skills.push(mas);
})

mentors[0].addSkill("football")

console.log("starting here")
console.log(mentors[0])



mentors.forEach(min => min.addSkill = function(newSkill){
  this.skills.push(newSkill)
});

mentors.forEach(skill => skill.addSkill("AngularJS"));

mentors[0].addSkill('Pmagic eye');

console.log('3)', mentors);

// /*4. Create a function to add a skill to all members in a list of mentors*/


function addSkill(mentors,newSkill){
  return mentors.forEach(skill => skill.skills.push(newSkill));
  //your code here
}

addSkill(mentors, 'Angularing');
console.log('4)', mentors);

/*5. Create a function to remove a skill to all members in a list of mentors
/***************************************************************************************************************************************=========================================================================================================********** */

console.log("STATING THE REVISION")

function removeSkill(mentors,newSkill){
  return mentors.forEach(skill => skill.skills.splice(skill.skills.indexOf(newSkill),1));
  //your code here
}
removeSkill(mentors, 'Angular');
console.log('5', mentors);

//ok so, about the Object.assign we get the target (an empty array) and , sources
//anyway it works
mentors.forEach(function (obj) {
  Object.assign(obj, {
    removeSkill: function (skillToRemove) {
      let indexOfElement = this.skills.indexOf(skillToRemove);
      this.skills.splice(indexOfElement, 1);
    },
  });
});

removeSkill(mentors, "AngularJS")
console.log(mentors[0])

function removeSkillToMentors(mentorsArr, skillToRemove) {
  mentorsArr.forEach((obj) => {
    obj.removeSkill(skillToRemove);
  });
}

console.log("starting the second")
removeSkillToMentors(mentors, "JS");
console.log(mentors)

/*6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills*/
/***************************************************************************************************************************=========================================================================================================********* */

function mentorWithMoreSkills(mentors){
  let maxSkills = Math.max.apply(null,mentors.map(skill => skill.skills.length));
  return mentors.filter(skill => skill.skills.length === maxSkills).map(min => min.firstName);
}

console.log(`6) The mentor with more nunmber of skills is ${ mentorWithMoreSkills(mentors) }`);

let mentorWithMoreSkillin = (mentorsArr) => {
  let allNumberOfSkills = mentorsArr
    .map((obj) => {
      return obj.skills.length;
    })
    .sort();
  let maxNumberOfSkills = allNumberOfSkills.pop();
  let nameOfMentors = mentorsArr
    .filter((obj) => {
      return obj.skills.length == maxNumberOfSkills;
    })
    .forEach((obj) => {
      console.log(
        `The max number of skills are ${maxNumberOfSkills}; and ${obj.firstName} match this criteria.`
      );
    });
};

mentorWithMoreSkillin(mentors);

/* ------ */

/********************************************************************************************* */
/*7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes*/
/*************************************************************************************************************
 * ===================================================================================================*** */

mentors.forEach(skill => skill.addStudentLik = function(num)
  {
    this.studentLikes = this.studentLikes + num
  }
);
mentors.forEach(nin => nin.addStudentLik(3));

console.log('7 maybe', mentors);

mentors.forEach(function (obj) {
  Object.assign(obj, {
    addStudentLikes: function (newLikes) {
      this.studentLikes += newLikes;
    },
  });
});

console.log(mentors)
/*********************************************************************************************** */
/*8. Create a function that adds a student like to all mentors in the array
********************************************************************************************==============================↑↑↑↑↑↑↑=================SAME AS EXERCISE 7 ****↑↑↑↑↑↑↑↑********************** */
/***************************************************************************************************/

let addStudentLikes = (mentorsArr, newLikes) => {
  mentorsArr.forEach((obj) => {
    obj.addStudentLikes(newLikes);
  });
};

console.log( addStudentLikes(mentors, 1) );