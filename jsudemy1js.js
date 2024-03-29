
/*
Variables and datatypes
*/

/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge)
var job;
console.log(job)
job = 'Teacher'
console.log(job)
 
// varable naming rules
var _3years = 3;
var johnMark = 'John and Mark'
*/





/*
 Variable mutation and type coercion
 */

//Type coercion
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is ' + age + ' years old ' +
 job + '. Is he married ?' + isMarried);
*/

//Variable mutation

/*
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is ' + age + ' years old ' +
            job + '. Is he married ?' + isMarried)
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/






//Basic operators
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Loical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then John');
var x;
console.log(typeof x);
*/






//Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; //8 * 4 -6 //32 - 6 //26
console.log(x, y);

//2 + 4 + 5 // 6 + 5 // 11



//More operators

x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

x = x + 1;
x += 1;
x++;
console.log(x);
*/





//CODING CHALLENGE 1
/*
var mMass = Number(prompt("What is Mark's mass in kilogramms?"));
var mHeight = Number(prompt("What is Mark's height in meters?"));

var jMass = Number(prompt("What is John's mass in kilogramms?"));
var jHeight = Number(prompt("What is John's height in meters?"));

var mBMI = mMass  / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

var res = mBMI > jBMI;
console.log("Is Mark\'s BMI higher than John\'s? " + res);
console.log(mBMI, jBMI);
*/


//If / else statements

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + " is married");
} else {
    console.log(firstName + ' will hopefuly marry soon');
}

var mMass = Number(prompt("What is Mark's mass in kilogramms?"));
var mHeight = Number(prompt("What is Mark's height in meters?"));

var jMass = Number(prompt("What is John's mass in kilogramms?"));
var jHeight = Number(prompt("What is John's height in meters?"));

var mBMI = mMass  / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

if (mBMI > jBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s'); 
}

*/

//Boolean logic
/*
var firstName = 'John';
var age = prompt("What is John\'s age?");

if (age < 13) {
    console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man ");
} else {
    console.log(firstName + " is a man");
}
*/






//The ternary operator and Switch statements

/*
//Ternary operator
var firstName = 'John';
var age = prompt("What is John's age?");
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.') ;

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juive';
}*/

//Switch statement

/*
var job = 'cop';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives in Uber.');
        /*
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 38:
        console.log("John is a young man ");
    default:
        console.log(firstName + " is a man");
        
}
*/






// Truthy and Falsy values and equality operators

//falsy values: undefined, null, 0, '', NaN

//truthy values: NOT falsy values

/*var height;

height = 23;
if (height || height === 0) {
    console.log("Variable is defined.")
} else {
    console.log("Variable has NOT been defined.");
}

//Equality operators

if (height == '23') {
    console.log("The == operator does the type coercion!");
}
*/



//Coding challenge 2

/*
var J_1, J_2, J_3, M_1, M_2, M_3, JS, MS;

J_1 = 89;
J_2 = 120;
J_3 = 103;
M_1 = 116;
M_2 = 94;
M_3 = 123;
JS = (J_1 + J_2 + J_3) / 3;
MS = (M_1 + M_2 + M_3) / 3;
if (JS > MS) {
    console.log("The winner is...");
    console.log("John's team with score " + JS);
} else if (JS == MS) {
    console.log("The winner is...");
    console.log("FREINDSHIP with score" + JS);
} else {
    console.log("The winner is...");
    console.log("Mark's team with score " + MS);
}
*/



//Functions
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}


var ageJohn = calculateAge(1990);
console.log(ageJohn);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + " years.");
}

yearsUntilRetirement(1990, 'John');

*/

//Function Statements and Expressions
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + " drives a cab in Lisbon"
        case 'designer':
            return firstName + ' designes beautiful websites';
        default:
            return firstName +  " does something else.";
    }
}



console.log(whatDoYouDo("teacher", 'John');

*/

/*

//Arrays

//Initializing
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

//Mutating Data
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';

console.log(names);



//different data types
var john = ['John', 'Smith', 1990, 'teacher', false];


john.push('blue');
john.unshift('Mr.')
console.log(john);


john.pop();
console.log(john);

console.log(john.indexOf(23));


var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/





//coding challenge 3


/*
var b_1, b_2, b_3;
b_1 = 124;
b_2 = 48;
b_3 = 268;

var tips = [];

function tip(bill) {
    switch(bill) {
        case bill < 50:
            tips.push(bill * 0.2);
        case bill < 200 & bill > 50:
            tips.push(bill * 0.15);
        case bill > 200:
            tips.push(bill * 0.1);
    }
}
tip(b_1);
tip(b_2);
tip(b_3);
console.log(tips);
console.log(tips[0] + b_1, tips[1] + b_2, tips[2] + b_3);

*/









//Objects and properties
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: 'false'
};

console.log(john.firstName);
john.job = 'designer':


var Jane = new Object();
jane.name = 'Jane';
*/



//CODING CHALLENGE 4

/*
var john = {
    firstName:'John',
    height: prompt("What's John's height?"),
    weight: prompt("What's John's weight?"),
    bmi: bmi_(john.weight, john.height)
};
var mark = {
    firstName:'John',
    height: prompt("What's Mark's height?"),
    weight: prompt("What's Mark's weight?"),
    bmi: bmi_(mark.weight, mark.height)
};

function bmi_(weight, height) {
    return weight / (height * height);
};

console.log("Mark's BMI is " + mark.bmi);
console.log("John's BMI is " + john.bmi);

if (john.bmi > mark.bmi) {
    console.log("John's BMI is higher then Mark's.")
} 
else if (mark.bmi > john.bmi) {
    console.log("Mark's BMI is higher then John's.")
}
else {
    console.log("Mark's and John'sBMI are equal.")
}
*/






//Loops and Iteration
//for

/*
for (var i = 0; i < 10; i ++) {
   console.log(i); 
}  


var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i ++) {
    console.log(john[i]);
};


//while
var i = 0
while (i < john.length) {
    console.log(john[i]);
    i++;
}
    
*/
//continue and break statements
/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i ++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
    
};


for (var i = 0; i < john.length; i ++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
    
};






//Looping backwords

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i])  ;
};


*/


//CODUNG CHALLENGE 5


/*
var bills, tips, res;


bills = [124, 48, 268, 180, 42];
tips = [0, 0, 0, 0, 0];
res = [0, 0, 0, 0, 0];


for (var i = 0; i <= 4; i ++) {
    if (bills[i] <= 50) {
        tips[i] = bills[i] / 0.2;
    }
    else if (50 < bills[i] < 200) {
        tips[i] = bills[i] / 0.15;
    }
    else if (200 < bills[i]) {
        tips[i] = bills[i] / 0.1; 
    }
};


for (var i = 0; i <= 4; i++) {
    res[i] = bills[i] + tips[i];
};
console.log(tips);

console.log(res);
*/
































































