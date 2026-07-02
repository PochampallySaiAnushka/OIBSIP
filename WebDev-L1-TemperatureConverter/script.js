function convert(){

let t=document.getElementById("temp").value;
let u=document.getElementById("unit").value;
let r=document.getElementById("result");

if(t==="" || isNaN(t)){
    r.innerHTML="<h2>❌ Invalid Input</h2><p>Please enter a valid number.</p>";
    return;
}

t=parseFloat(t);

if((u=="C"&&t<-273.15)||(u=="F"&&t<-459.67)||(u=="K"&&t<0)){
    r.innerHTML="<h2>🚫 Error</h2><p>Temperature cannot be below Absolute Zero!</p>";
    return;
}

let c,f,k;

if(u=="C"){
    c=t;
    f=(t*9/5)+32;
    k=t+273.15;
}
else if(u=="F"){
    c=(t-32)*5/9;
    f=t;
    k=c+273.15;
}
else{
    k=t;
    c=t-273.15;
    f=(c*9/5)+32;
}

let emoji="",msg="";

if(c<=0){
    emoji="🧊";
    msg="Freezing!";
}
else if(c<=15){
    emoji="❄️";
    msg="Cold Weather";
}
else if(c<=30){
    emoji="🌤️";
    msg="Pleasant Weather";
}
else if(c<=40){
    emoji="☀️";
    msg="Warm Weather";
}
else if(c<=50){
    emoji="🔥";
    msg="Hot Weather";
}
else{
    emoji="🥵";
    msg="Extreme Heat!";
}

r.innerHTML=`
<h2>${emoji} ${msg}</h2>
<p>🌡️ Celsius : ${c.toFixed(2)} °C</p>
<p>🔥 Fahrenheit : ${f.toFixed(2)} °F</p>
<p>❄️ Kelvin : ${k.toFixed(2)} K</p>
`;

}