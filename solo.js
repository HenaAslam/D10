/* EXERCISE A

Create a variable called test and assign a string value to it.

let test;
test="Hello World!";

*/

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
let sum;
sum=10+20;
*/

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
let random;
random=Math.floor(Math.random() *20);
console.log(`The random number is : ${random}`);
*/

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
let me={name: "Hena", surname:"Asslam", age:25};
*/

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.
delete me.age;

*/

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
me.skills=["HTML","CSS","JavaScript"];
*/

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
me.skills.pop();
*/

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.
function dice(n1,n2){
    return Math.floor(Math.random()*(n2 - n1+ 1) + n1);

}
random=dice(1,6);
console.log(`The randomnumber is ${random}`);

*/

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
function whoIsBigger(n1,n2){
    if(n1>=n2){
        return n1;
    }
    else{
        return n2;
    }

}
big=whoIsBigger(8,5);
console.log(`The bigger number is ${big}`);
*/

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
function splitMe(arr){
    return arr.split(" ");
}
console.log("The split array is", splitMe("hello world this is hena"));

*/

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
function deleteOne(str1,boo1){
    if(boo1===true){
        return str1.slice(1)
    }
    else{
        return str1.slice(0,-1)
    }
}
resultString=deleteOne("hello hena",false);
console.log(`The result string is ${resultString}`);
*/

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

function onlyLetters(str){
   return str.replace(/[0-9]/g, '')
}

let digitRemoved=onlyLetters(" i have 4 dogs and 23 cats");
console.log(`The string without digits is ${digitRemoved}`)

*/

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
 function isThisAnEmail(str)
 {
    let atSymbol = str.indexOf("@");
    let dot = str.indexOf(".");
    if(atSymbol < 1 || dot === str.length - 1){
     return false;
    }
    else{
        return true;
    }

 }

 let check=isThisAnEmail("helloo.hena@gmail.com");
 console.log(`Checking if the string is an email: ${check}`)
*/

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.
function whatDayIsIt(){

    let today = new Date('December 2, 2022 23:15:30');
    let day1 = today.getDay();
    return day1;
 }
 let weekDay=whatDayIsIt();
 if(weekDay===0)
 console.log("Sunday");
 if(weekDay===1)
 console.log("Monday");
 if(weekDay===2)
 console.log("Tuesday");
 if(weekDay===3)
 console.log("Wednesday");
 if(weekDay===4)
 console.log("Thursday");
 if(weekDay===5)
 console.log("Friday");
 if(weekDay===6)
 console.log("Saturday");
*/

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.
function deleteProp(obj,str){
    let wordToSearch=str;
    delete obj[wordToSearch];
    return obj;
 }


 let obj1={name:"hena", surname:"asslam", discord:"@hena"}
 console.log("After deleting given property:",deleteProp(obj1,"surname"))
 

*/

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

let randYear=9999
let movieName;
function oldestMovie(arr){
    for(i=0;i<arr.length;i++){
       let movie=arr[i];
       if(movie.Year<randYear){
        randYear=movie.Year;
        movieName=movie.Title;
        
       }

        }
        return movieName;
    }

console.log("The oldest movie in the list is:",oldestMovie(movies));
*/

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.
function countMovies(arr){
    return arr.length;
}
console.log("Number of movies in the list is:",countMovies(movies));
*/

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
newArray=[];
function onlyTheTitles(arr){
    for(i=0;i<arr.length;i++){
        let movie=arr[i];
        newArray.push(movie.Title);
    }
    return newArray

}
console.log(onlyTheTitles(movies))
*/

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
milArray=[];
function onlyInThisMillennium(arr){
    for(i=0;i<arr.length;i++){
        let movie=arr[i];
        if(movie.Year>=2001)
        {
            milArray.push(movie.Title);
        }

    }
    return milArray
}
console.log("The movies produced in this millenium:", onlyInThisMillennium(movies))
*/
/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
function getMovieById(arr,id){
    for(i=0;i<arr.length;i++){
        let movie=arr[i];
        if(movie.imdbID===id){
            return movie;
            
        
        }
    }
}

console.log("The movie with given id: ",getMovieById(movies,"tt4154796"))
*/

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

let yearSum=0;
function sumAllTheYears(arr){
    for(i=0;i<arr.length;i++){
        let movie=arr[i];
        yearSum=yearSum+parseInt(movie.Year);

            }
            return yearSum;
    }
console.log("Sum of all years",sumAllTheYears(movies));
*/

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
strArray=[]
function searchByTitle(arr,str){
    for(i=0;i<arr.length;i++){
        movie=arr[i];
        let word=movie.Title.split(" ");
        
        for(j=0;j<word.length;j++){
            if(word[j]===str){
                strArray.push(movie.Title);
            }
        }
    }
    return strArray
    
    
}

console.log(searchByTitle(movies,"Avengers:"))

*/

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

objDiv={match: [], unmatch:[]};
function searchAndDivide(arr,str){
        for(i=0;i<arr.length;i++){
            let movie=arr[i];
            let word=movie.Title.split(" ");
            for(j=0;j<word.length;j++){
                if(word[j]===str){
                    objDiv.match.push(movie.Title);
            
                }
             
            }
            
            
        }
        

        return objDiv;


}
console.log(searchAndDivide(movies,"Lord"))

*/

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
function removeIndex(arr,n){
    for(i=0;i<arr.length;i++){
        
        if(i===n){
            arr.splice(n,1);
        }

    }
    return arr;
}
console.log("Removing element of position given",removeIndex(movies,1))
*/

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. 

const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];
    */