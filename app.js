//CHP 21-25
//Q1

// var a= prompt("Enter First Name");
// var b = prompt("Enter Second Name");
// var Fullname= a+b;
// document.write("Full name :" + " " + Fullname);

//Q2
// var x= prompt("Enter your favourite Mobile phone  Name");
// document.write("My Favourite phone is:" + x + "<br>");
// var numchars= x.length;

//     document.write("Length of string is:" + " " + numchars);

//Q3
// var country= "pakistani";
// document.write("String:" + " " + country + "<br>");
// var In= country.indexOf("n");
// document.write("Index of n is:" + " " + In);

//Q4
// var message= "Hello world";
// document.write("String:"+ message + "<br>");
// var segIndex= message.lastIndexOf("l");
// document.write("last index of 'l':" + segIndex);

//Q5
// var letter= "Pakistani";
// document.write("String:" + letter + " <br>");
// var index= letter.charAt(3);

// document.write("Character at Index 3:" + "" + index);

//Q6
// var Firstname= prompt("Enter First name:");
// var Secondname= prompt("Enter Second name:");
// document.write(Firstname+ "  " + Secondname);

//Q7
// var cityname= "Hyderabad";
// document.write("City: " + cityname + "<br>");
// var replacename= cityname.replace(/Hydera/g, "Islama");
// document.write("After Replacment:" + replacename);

//Q8
// var m= "Ali and Shami are Best Friends. They play Cricket and Football Together.";
// var r= m.replace(/and/g,"&");
// document.write(r);

//Q9                                   
// var a= "472";
// document.write("Value:" + a + "<br>");
// document.write("Type:  string " + "<br>");
// var b= Number(a);
// document.write("Value:" + b + "<br>");
// document.write("Type: number" );

//Q10
// var x= "peanut";
// document.write("User input:" + x + "<br>");
// var x= x.toUpperCase();
// document.write("Upper Case:" + x);

//Q11
// var x= "javascript";
// document.write("User input:" + x + "<br>");
// var y= x.replace(/j/g, "J");
// document.write("Upper Case:" + y);

// //Q12                                       
// var num= 35.36;
// document.write("Number:" + num + "<br>");
// var y= num.toString().replace( "." , " ");
// document.write("Result:" + y);

// //Q13                                            
// var username= prompt("Enter a user name");
// for(var i=0; i<username.length; i++){
//     var n= username[i].charCodeAt(0);
//     if(n==33 || n==44 || n==46|| n==64){
//         alert("Please Enter a valid Username");
//     }
// }


//Q14
// var array=["cake", "apple pie" , "cookie" , "chips" , "patties"];
// var bakery= prompt("Enter your bakery items");
// bakery= bakery.toLowerCase();
// var bakeryItems= array.indexOf(bakery);
// if(array.indexOf(bakery)!= -1){
//     alert(bakery + " " + "is availabe at index" + bakeryItems + "in our Bakery");

// }else{
//     alert(bakery + " " + "is not available in our Bakery");
// }

//Q15                                                   (wrong)
// var pass= prompt("Enter password must contain numbers and letters");
// document.write("<br> Enter Password:" + pass);
// if(pass[0]==="0"|| pass[0]==="1" || pass[0]==="2" || pass[0]==="3" || pass[0]==="4" || pass[0]==="5" || pass[0]==="6" || pass[0]==="7" || pass[0]==="8" || pass[0]==="9" ){
//     document.write("<br> Password can not begin with a number");
//     document.write("<br> Enter a valid password");

// }
// else if (pass.length<6){
//     document.write("<br> Password must be at least 6 characters");
//     document.write("<br>Enter a Valid Password");
// }
// else{
   
// }

//Q16                                                   

// var university = "University of Karachi";
// var res = university.split('');
// for(var i = 0; i<res.length; i++){
// document.write(res[i], "<br>");}



//Q17
// var city= "Pakistan";
// document.write("User input:" + city + "<br>");
// var length= "8";
// var n= city.charAt(length-1);
// document.write("Last character of input:" + " " + n);

//Q18
// var input= "Text: The Quick Brown fox jumps over the lazy dog";
// var convert= input.toLowerCase();
// var count= convert.match(/the/g).length;
// document.write(input + "<br>");
// document.write("There are" + count + "occurence(s) of the word 'the'");


//CHP 26-30
//Q1
// var a= "3.45214";
// document.write("number:"+a +"<br>");
// var b= Math.round(a);
// document.write("Round value:" +  b + "<br>");
// var c= Math.floor(a);
// document.write("Floor value:" + c + "<br>");
// var d= Math.ceil(a);
// document.write("Ceil Value:"+   d);

//Q2
// var a= "-2.673";
// document.write("number:"+a +"<br>");
// var b= Math.round(a);
// document.write("Round value:" +  b + "<br>");
// var c= Math.floor(a);
// document.write("Floor value:" + c + "<br>");
// var d= Math.ceil(a);
// document.write("Ceil Value:"+   d);

//Q3
// var x= -7;
//  var y= Math.abs(x);
//  document.write("Absolute value of -7 is :" + y);

//Q4

// var random= Math.floor(Math.random()*6)+1;
// document.write("Random Dice Value:" + " " + random);

//Q5
// var random= Math.floor(Math.random()*2)+1;
// if(random===2){
//     document.write("2"+"<br>" + "Random coin value:" + " "+ "Heads" + "<br>")
// }
// else if(random===1){
//     document.write("1"+"<br>" + "Random coin value:" + " "+ "Tails")
// }



//Q6
// var random=Math.floor(Math.random()*100)+1;
// document.write("Random Number between 1 & 100 is:" + " " + random);


//Q7                                               
//7(a)
// var weighta= prompt("Enter your weight in ex: 50kg");
// var a= parseInt(weighta);
// document.write("<br> The weight of user is :" + a +"kg");
//7(b)
// var weightb= prompt("Enter your weight in ex: 50kgs");
// var b= parseInt(weightb);
// document.write("<br> The weight of user is :" + b +"kgs");
//7(c)
// var weightc= prompt("Enter your weight in ex: 50.2kgs");
// var c= parseFloat(weightc);
// c= c.toFixed(1);
// document.write("<br> The weight of user is :" + c +"kgs");
//7(d)
// var weightd= prompt("Enter your weight in ex: 50.2 kilograms");
// var d= parseFloat(weightd);
// d= d.toFixed(1);
// var stg= d.toString();
// if(stg.charAt(stg.length-1)>=5){
//     stg= stg.slice(0, stg.length-1)+ "6";
//     stg= Number(stg)

// document.write("<br> The weight of user is :" + stg +"kg");
// }
// document.write("<br> The weigth of user is :" + d+ kilograms);
 
//Q8
// var scretnum= Math.floor(Math.random()*10)+1;
// var a= prompt("Enter a number between 1 and 10");
// if(a===scretnum){
//     alert(" Congratulations");
// }
// else{
//     alert("Try Again!")
// }



//Chp 31-34

//Q1
// var rightNow = new Date();
// document.write(rightNow);

//Q2
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// alert(" Current Month:" + " " + n);

//Q3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  alert("Today is :" + " " + nameOfToday);

//Q4                                                        

// var a= new Date();
// var b= a.getDay();
// if(b==0 || b==6){
//     alert("It is a Fun Day");
// }
// else{
//     alert("It is working day")
// }
//Q5
// var a= new Date();
// var b= a.getDate();
// if(b<16){
//     document.write("First Fifteen days of month");
// }
// else{
//     document.write("Last Days of month");
// }

//Q6
// var minutes= new Date();
// var minMili= minutes.getTime();
// var minutesconvert= minMili/(1000*60*60)
// document.write("Current Date:" + minutes + "<br>");
// document.write("Elapsed milisecondsince january 1, 1970:" + minMili+ "<br>");
// document.write("Elasped minutes since january 1, 1970:" + minutesconvert + "<br>");

//Q7
// var a= new Date();
// var b = a.getHours();
// if(b<=12){
//     document.write("It's AM");
// }
// else {
//     document.write("It's PM ");
// }

//Q8
// var my_date=new Date("December,31 2020");
// var n=my_date.getDate();
// document.write("Later date:" + n);
//Q9
// var date1 = new Date("06/18/2015"); 
// var date2 = new Date("06/21/2020"); 
//   var Difference_In_Time = date2.getTime() - date1.getTime(); 
//   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
//   document.write(Difference_In_Days + " " + "Days have Passed since 1st Ramdan,2015");

//Q10
// var y12= new Date("dec 31 2014 00:00:00");
// var L45= new Date("Dec 5 2015");
// var io1= L45.getTime();
// var Pkj= y12.getTime();
// var we2= io1-Pkj;
// var d67= we2/(1000*60);
// var I9x= d67;
// alert("On Reference Date Sat Dec 05 2015 22:50:16 GMT +0500(PKT), " + " " + I9x + " " +"Seconds had Passed since beignning of 2015");


//Q11
// var CurrentDate= new Date();
// document.write("<br> Current Date:" + CurrentDate);
// var hour=CurrentDate.getHours();
// var minute= CurrentDate.getMinutes();
// var second= CurrentDate.getSeconds();
// var tshow= document.write("<br>" + hour+ ":" + minute+ ":" + second);
// var tAhead=document.write(" " + hour-1+ ":" + minute + ":" + second );
// var aheadDate= new Date();
// aheadDate.setHours(hour-1, minute, second);
// document.write("<br> One hour it was:" + aheadDate );

//Q12
// var c= new Date("dec 5, 2015 23:09:37");
// document.write("Current date:" + c+ "<br>");
// var year= c.getFullYear();
// var res= c.setFullYear(year-100);
// var y= new Date(c);
// document.write("100 hour back, it was: " + y);

   // Q13
// var age= prompt("Enter your age");
// var CurrentDate= new Date();
// var currentyear= CurrentDate.getFullYear();
// var birthyear= currentyear-age;
// document.write("Your age is " + age);
// document.write("<br> Your birth year is " + birthyear);

//Q14
// document.write("<h1> K-Electric Bill </h1>");
// var name= prompt("Enter User Name");
// document.write("<br> User Name " + name);
// var Month=prompt("Enter Month:");
// document.write("<br> Month: " + Month);
// var Numofunit= prompt("Enter Units");
// Numofunit= Math.round(Numofunit);
// Numofunit= Numofunit.toFixed(2);
// document.write("<br> Units are" + Numofunit);
// var characterperUnit= prompt("Enter Charges per units");
// document.write("<br>Charges of a bill" + characterperUnit);
// var mul= Numofunit*characterperUnit;
// mul= Math.round(mul);
// mul= mul.toFixed(2);
// document.write("<br> Net Amount payable Wihin Due date");
// var lastSurcharge= prompt("Enter late payment surcharge");
// lastSurcharge=Math.round(lastSurcharge);
// lastSurcharge= lastSurcharge.toFixed(2);
// document.write("<br> Month:" + lastSurcharge);
// var total= Numofunit*characterperUnit+lastSurcharge;
// total= Math.round(total);
// total= mul.toFixed(2);
// document.write("<br> Gross Amount Payable (After Due Date):" + total);

    

    //CHP 35-38                                                

//Q1
// var rightNow = new Date();
// document.write(rightNow);

//Q2                             
// var a= prompt("Enter 1st name");
// var b= prompt("Enter 2nd name");
// alert(a + " " + b);
// 
// 

//Q3
// var num1= +prompt("Enter First value:");
// var num2= +prompt("Enter second value:");
// document.write("Sum of two numbers is :" + add(num1,num2))
// function add(a,b){
//     return(a+b);
// }

//Q4
// var num1= +prompt("Enter First value:");
// var num2= +prompt("Enter second value:");
// var operator= +prompt("Enter operator:");
// document.write("<br> You Calcultion is: " +num1+" " + operator+ " " + num2);
// function cal(num1, operator, num2){
//     if(operator==="+"){
//         return(num1+num2);
//     }
//     if(operator==="-"){
//         return(num1-num2);
//     }
//     if(operator==="*"){
//         return(num1*num2);
//     }
//     if(operator==="/"){
//         return(num1/num2);
//     }
//     if(operator==="%"){
//         return(num1%num2);
//     }
// }

//Q5
// var inputnum=+prompt("Enter any number");
// document.write("<br>Square of Argument number " + inputnum);
// function square(sq){
//     var sum=" ";
//     sum= Math.pow(sq, 2)
//     return(sum);
// }

//Q6
// var num=+prompt("Enter number for factorial ");
// document.write("<br> Factorial of a number ");
// function fact(n){
//     var sum=1;
//     if(num ===0 ||  num===1)
//     return 1;
//     for (var i=n; i>0; i--){
//         sum= sum*n;
//         n--;
//     }
//     return (sum);
// }
// for(var i= num-1; i>=1; i--)
// {
//     num *= 1;
    
// }
// return num;

//Q7
// var first = prompt("Enter 1st num:");
// var  second= prompt("Enter 2nd num:");
// document.write("<br>Counting from " + first + "to " + second);
// +showcount(first, second)
// function showcount(num1, num2){
//     for(var i= num1; i<=num2;i++){
//         document.write("<br>" + i);
//         num1++;
//     }

// }

//Q8                             
// var base= prompt("Please Enter base of a triangle");
// var perpendicular= prompt("Please enyer perpendicular");
// document.write("<br>Base is:" + base + "<br>" +perpendicular);
// function calcultehypotenus(base, perpendicular){
//     var hypo=" ";
//     hypo= calculatesq
// }

//Q9
// var area=" ";
// var width= prompt("Enter width of a rectangle");
// var height=prompt("Enter height of a rectangle");
// document.write("<br>" + calAreaRec(width, height)); 
// function calAreaRec(width,height){
//     area=width*height;
// document.write(area);
// return (area);
// }
// document.write("<br>" + calAreaRec(5,4));
// function calAreaRec(a,b){
//     alert(a*b);
// }


//Q10
// var u_pal=prompt("Enter a word Palindrome");
// var pal="palindrome";
// function pali(){
//     if(u_pal!= pal){
//         document.write("<br> Fail Enter Wrong word!");

//     }
//     else
//     {
// document.write("<br> Psssed");
//     }
// }
// pali();




//Q11
// function first_letter_capital(letterOne){
//     return letterOne.replace(/\w\5*/g, function(txt){return txt.charAt(0).toUpperCase()+ txt.substr(1).toLowerCase();});

// }
// document.writeln(first_letter_capital('the quick brown fix'));

//Q12

  
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }
// document.write(longestWord("Web Development Tutorial"));





//Q13
// function character_counting(str_1, letter)
// {
//     var letter_Count= 0;
//     for(var position=0; position<str_1.length; position++)
//     {
//         if(str_1.charAt(position)==letter){
//             letter_Count+=1;
//         }
//     }
//     return letter_Count;
// }
// alert(character_counting('w3resources.com' , 'o'));

//Q14
// function circle(radius)
// {
//     this.radius = radius;

//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
  
//     this.circumference = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('Cicumference =', c.circumference().toFixed(2));
