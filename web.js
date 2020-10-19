

let py=document.querySelector(".sec")
let py1=document.querySelector(".min")
let py2=document.querySelector(".hour")

let d1=new Date();
let pp=d1.getHours();
    let p1=pp>=12?'P.M':'A.M';
    document.querySelector(".ap").innerHTML=p1;
    
let min = ((d1.getMinutes())*60+ d1.getSeconds())/60.0;
let hour = ((d1.getHours()*3600)+(d1.getMinutes())*60+ d1.getSeconds())/3600.0;
    console.log(min);
    console.log(hour);
    
    py1.style.transform=`rotate(${min*6+90}deg)`;
    py2.style.transform=`rotate(${hour*30+90}deg)`;

function settimeassec()
{
    let d=new Date();
    let pp=d.getHours();
    let p1=pp>=12?'P.M':'A.M';
    document.querySelector(".ap").innerHTML=p1;

    let sec = d.getSeconds();
    console.log(sec);
    
    py.style.transform=`rotate(${(sec*6)+90}deg)`;


    
}
setInterval(settimeassec, 1000);

function settimeasmin()
{
    let d1=new Date();
    let min = ((d1.getMinutes())*60+ d1.getSeconds())/60.0;
    console.log("min " + min);
    py1.style.transform=`rotate(${min*6+90}deg)`;


    
}
setInterval(settimeasmin, 60000);


function settimeashour()
{
    let d1=new Date();
    let pp=d1.getHours();
    let pp2=pp>=12?(pp-12):pp;
    let hour = ((d1.getHours()*3600)+(d1.getMinutes())*60+ d1.getSeconds())/3600.0;
    console.log(hour);
    py2.style.transform=`rotate(${(hour*.5)+90}deg)`;
    let p1=pp>=12?'P.M':'A.M';
    document.querySelector(".ap").innerHTML=p1;



    
}
setInterval(settimeasmin, 60000);
