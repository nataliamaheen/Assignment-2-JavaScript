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
// var d = new Date();
// var n = d.getHours();
// document.write(d);

//Q12


    // var dob_entry = getTextValue();
    // var split_dob = dob_entry.split("/");
    // var month = split_dob[0];
    // var day = split_dob[1];
    // var year = split_dob[2];
    // var dob_asdate = new Date(year, month, day);
    // var today = new Date();
    // var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
    // var age = (mili_dif / (1000 * 3600 * 24 * 365.25));
    // within_age_range=(14<age & age<24);
    
    // alert(age);

    
