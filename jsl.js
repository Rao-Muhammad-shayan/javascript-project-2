// Chapter4
// Answer 1
// var a="shayan",b="Rao",c="Muhammad",d="Rao Muhammad shayan";

// Answer 2
// Legeal variables names

// var a = "shayan";
// var $b = "Rao";
// var c = "Muhammad";
// var canTalk123="shayar";
// var Dollar_rate=2233;
// var _lion="sher";
// var animalName="fog";

// illegeal variables names
 
// var 1234dog="root";
// var &hjjk="boot";
// var Rao Sahab="korea";
// var my-variable! = "value"; 
// var alert="display";
//  var var="ninja"

// Answer 3


 // 3a document.write("<h1>"+"Rules for naming JS variables"+"</h1>")

//3b  var $name="$rao";

// var name="s245hay_an";
// document.write("Variable name contain number,Alphabet"+"$ And _"+"for Example"+$name+ name+",")

// 3c
// document.write("variables  name must begin with letter,$ and_ for example sonu_neha &  name")
//  3d
// document.write("Variable names are case sensitive")

// 3e
// document.write("Variable names should not be JS keyword and fuction")

// Chapter5
// Answere 1

// var num1=13;
// var num2=5;
// var numresult=num1 +num2;
// document.write("Sum of 13 and 8 is"+" "+numresult);

// // Answere 2



// var num1=13;
// var num2=5;
// var numresult=num1 -num2;

// document.write( " <br/>"+"Difference of 13 and 8 is"+" "+numresult);


// var num1=13;
// var num2=5;
// var numresult=num1*num2;
//  document.write(" <br/>"+"Product of 13 and 8 is" +" "+numresult)

 
// var num1=15;
// var num2=5;
// var numresult=num1/num2;
//  document.write(" <br/>"+"ratio of 15 and 5 is" +" "+numresult)

// Answere 3
// var a="varnuebilities"
// document.write("value after variable declaration is"+" " +a)


// let shayan=5;
// document.write(shayan)


// let n=5;
// n=n+1;

// document.write(+ n)
// let c=8;

// document.write( "<br/>"+ n+c)
// let d=n+c;
// d--;
// document.write( "<br/>"+d)
// d=15;
// document.write( "<br/>"+d%5)


// var cost = "600  PKR"; // cost is a string
// document.write(" Price of one ticket " + cost); // Display the price of one ticket

// // Extract the numeric part from the string
// var numericCost = parseFloat(cost); // This will convert "600  PKR" to 600
// var totalCost = numericCost * 6; // Calculate the total cost for 6 tickets

// document.write(" Total cost of 6 tickets is " + totalCost + " PKR"); // Display the total cost

// // Create modern table

// Answer 5

// let table=4;
// if(table==4){

// for( let n=1 ;n<=11;n++){
   
//   if(n==11){

//     break
//   }
//   else{
//     document.write(table +"*"+n +"="+table*n +"<br/>");
//   }

// }

  
// }
// var a="hello";
// document.write( a)


// Answer 6



// var celsius = 25;
// var Fahrenheit_converter = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + Fahrenheit_converter + "°F<br/>"); // Output the result

// var fahrenheit = 70; // Example Fahrenheit temperature
// var celsius_converter = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + celsius_converter + "°C"); // Output the result

// Answer 7
// var a = "price of item 1 is 650";
// document.write(a + "<br/>");
// var b = " Quantity of item 1 is 3";
// document.write(b + "<br/>");
// var c = "price of item 2 is 100";
// document.write(c + "<br/>");
// var d = " Quantity of item 2 is 7";
// document.write(d + "<br/>");
// var s = "shipping charges of items is 100";
// document.write(s + "<br/>");

// Calculate total
// var priceItem1 = 650;
// var quantityItem1 = 3;
// var priceItem2 = 100;
// var quantityItem2 = 7;
// var shippingCharges = 100;

// var totalItem1 = priceItem1 * quantityItem1;
// var totalItem2 = priceItem2 * quantityItem2;

// // Calculate grand total
// var grandTotal = totalItem1 + totalItem2 + shippingCharges;

// // Output the total
// document.write("Total price of item 1: " + totalItem1 + "<br/>");
// document.write("Total price of item 2: " + totalItem2 + "<br/>");
// document.write("Grand total including shipping: " + grandTotal);

// Answer 8
// var totalMarks=980;
// document.write("total marks is"+ totalMarks);
// var marksObtained=804;
// document.write( "marks obtained by student"+" "+marksObtained);
// var percentage=(marksObtained/totalMarks)*100
// document.write("percentage of student is"+" "+percentage);
// Answer 9
// const totalInPKR = (10 * 104.80) + (25 * 28);
// document.write(totalInPKR);
// Answer 10

// let initialNumber = 7; // You can initialize this with any number
// let result = ((initialNumber + 5) * 10) / 2;
// console.log(result);

// const currentYear = 2023; // You can also use new Date().getFullYear() for the current year dynamically

// // Step b: Store their birth year in a variable
// const birthYear = 1990; // Replace this with the actual birth year

// // Step c: Calculate their two possible ages
// const age1 = currentYear - birthYear; // Age if they have already had their birthday this year
// const age2 = age1 - 1; // Age if they have not had their birthday yet this year

// console.log(`Possible ages: ${age1} or ${age2}`);

// Answer 11
// var r=5;
// document.write("Radius of circle is"+" "+r +"<br>")
// var circumference=2*(3.142)*r;
// document.write( "circumference of circle is"+" "+circumference+"<br>");

// var circleArea=(3,142)*r*2;
// document.write("area of circle is"+" "+circleArea);



// var favSnacks="fast mail", currentAge=19,maxAge=63,estimatedAmount=3;
// document.write("Favourite snacks of user is"+" "+favSnacks+"<br>")
// document.write("Current age of user is"+" "+currentAge+"<br>")
// document.write("Estimated age of user is"+" "+maxAge+"<br>")
// document.write("Estimated amount of snacks per day"+" "+estimatedAmount+" <br>")
// var totalSnackEaten=(maxAge-currentAge)*3
// document.write("Total snack need to eat untill rip"+" "+totalSnackEaten)