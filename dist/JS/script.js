
// 1 Uždavinys
let n1 = 20;

if (n1 > 0){
    console.log ("Skaičius teisingas");
} else {
    console.log ("Skaičius neteisingas");
}
//  2Uždavinys
let n2 = 1;

if (n2==1) {
    console.log ("Eiti");
}else if (n2==2){
    console.log ("Palaukite");
} else if(n2==3) {
    console.log ("Draudžiama eiti");
}else {
    console.log ("Ivestas skaičius nėra 1, 2 ar 3")
}

// 3 Uždavinys

let dez = 3 ;
let kn=1;
let n3=5

if (dez*n3>=kn){
   console.log ("Knygos telpa į dėžes");  
} else  {
    console.log("Knygos netelpa į dėžes");
}

// 4 uždavinys

let n4 =1221
let ketvirtas=n4%10;
let trecias=Math.floor(n4/10)%10;
let antras=Math.floor(n4/100)%10;
let pirmas=Math.floor(n4/1000);

// if( pirmas==ketvirtas ) {
//     if(antras==trecias){
//          console.log("Skaičius polindromas");
//     }   else  {
//     console.log("Skaičius nepolindromas");
// }else  {
//     console.log("Skaičius nepolindromas");

if(pirmas==ketvirtas&& antras==trecias){
    console.log("Skaičius polindromas");
}else {
    console.log("Skaičius nepolindromas");
}

// 5 Uzdavinys
// let n5 = 222442
// let num6 = n5%10;
// let num5 = Math.floor(n5/10)%10;
// let num4 = Math.floor(n5/100)%10;
// let num3=Math.floor(n5/1000)%10;
// let num2 =Math.floor(n5/10000)%10;
// let num1 =Math.floor(n5/100000);
// let sum = num1+num2+num3+num4+num5+num6
// if (sum % 4 == 0 ){
//     console.log("Bilietas laimingas");
// }else {
//     console.log("Bilietas nelaimingas");
// }


// 6 uzdavinys

let m6 = 2004
let met1= m6%10
let met2=Math.floor(m6/10)%10

if( m6%4==0 && met1+met2>0){
    console.log("Metai keliamieji");
}else{
    console.log("Metai nekeliamieji");
}

// 7 uzdavinys


let n7 = 12321
let num5=n7 %10
let num4= Math.floor(n7/10)%10
let num2 = Math.floor(n7/1000)%10
let num1= Math.floor(n7/10000)

if (num5==num1 && num2==num4){
    console.log("Skaičius polindromas")
}else {
    console.log("Skaičius nepolindromas")
}

// 8 uzdavinys 

let k8 = 9;

if (k8>6 && k8<1){
    console.log(" Skaičius nėra nuo 1 iki 6");
}else if (k8%2==0){
    console.log(" Kambarį tvarkys vyresnėlis");
}else {
    console.log(" Kambarį tvarkys jaunėlis");  

}

// 9 uzdavinys

let p1=8;
let p2=2;
let p3=6;

if (p1>p2 && p1>p3){
    console.log(" pirmasis gavo geriausia pažymį");
}else if (p2>p1 && p2>p3){
    console.log(" antrasis gavo geriausia pažymį");
}else {
    console.log(" trečiasis gavo geriausia pažymį");
}


// 10uzdavinys

let n10=10;

if ( n10<=0 || n10>12){
console.log("Nėra tiek mėnesių");
}else if (n10==2){
    console.log("dienų 28");
}else if(n10==4 ||n10== 6 ||n10== 9 || n10==11){
    console.log("dienų 30");
}else{
    console.log("dienų 31");
}
