// var
var El={
    car:document.getElementById("make"),
    year:document.getElementById("year"),
    check:document.querySelector('input[name="level"]'),
    btn:document.querySelector(".btn"),
    body:document.querySelector("body"),
    box:document.getElementById("content")
  
  }



  
// Event
El.body.onload=function(){
    const Load=new Ref();
    Load.getYears();
}
El.btn.addEventListener("click",function(e){
  e.preventDefault();
  if(e.target.id=="Btn"){
    if(El.car.value=="Select"){
      const ClickE=new button();
      ClickE.displayErorr("خطا");
    }
    else{
      const Info=new info(El.car.value,El.year.value,El.check.checked);
      const ClickT=new button();
     let test1= Info.getInfoCar(Info);
      ClickT.displayTrue(test1);
      // console.log(test1);
      
    
      
      
    }
  }
  // value Date click in button
  
})



// object
function Ref(){}
function button(){}
function info(car,year,level){
  this.car=car;
  this.year=year;
  this.level=level

}



// property Years
Ref.prototype.getYears=function(){
   // get Date today to divice
    let today = new Date().toLocaleDateString('fa-IR');
    // get just year
   var years=today.slice(0,4);
  //  convert to persian years
   var
   persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
   arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  //  fijers for convert persian Date to English Date
   fixNumbers = function (str)
   {
     if(typeof str === 'string')
     {
       for(var i=0; i<10; i++)
       {
         str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
       }
     }
     return str;
   };
  //  this is English years
   let YearsNumber=fixNumbers(years);
   
// this is maxiamom years
 var max=YearsNumber;
//  get 20 years ago with loop For
for(var i=0;i<20;++i){
  max-=1;
  var option=document.createElement("option");
 option.value=max;
  option.innerHTML+=max;
 El.year.append(option);

  
}

}
// Property Erorr
button.prototype.displayErorr=function(err){
  const div=document.createElement("div");
    div.id="Erorr";
    div.innerHTML=err;
    El.box.appendChild(div);
    setTimeout(function(){
     if(El.box.children[2].id=="Erorr"){
       El.box.children[2].remove();
     }
    },3000)

}
// Property True
button.prototype.displayTrue=function(important){
  const spinner=document.createElement("div");
  const img=document.createElement("img");
  img.id="spinnerImg"
  img.src="img/spinner.gif"
  spinner.id="spinner";
  spinner.appendChild(img);
  El.box.appendChild(spinner);
setTimeout(function(){
  spinner.remove();
  const div=document.createElement("div");
  div.id="Tr";
  div.innerHTML=`
  ${important}
  
  `
  El.box.appendChild(div);

  setTimeout(function(){
    div.remove();
  },6000)
},3000)

}
// info name car and price
info.prototype.getInfoCar=function(car){
let base=20000;
let make=car["car"];
let Year=car["year"];
let complt=car["level"];
let price;
if(make==1){
  make="پراید";
  if(Year>=1380 && Year<=1385 && complt==true){
    price = (base * 1.15) - 250;
  }
  else if(Year>=1385 && Year<=1390 && complt==true){
    price = (base * 1.15) - 75;
  }
  else if(Year>=1390 && Year<=1399 && complt==true){
    price = (base * 1.15) - 25;
  }
   else if(Year>=1380 && Year<=1385 && complt==false){
    price = (base * 1.15) - 550;
  }
  else if(Year>=1385 && Year<=1390 && complt==false){
    price = (base * 1.15) - 150;
  }
  else if(Year>=1390 && Year<=1399 && complt==false){
    price = (base * 1.15) - 50;
  }
  return `ماشین = ${make} / بیمه = ${price} / سال ماشین =${Year}`;
}
else if(make==2){
  make="اپتیما";
  if(Year>=1380 && Year<=1385 && complt==true){
    price = (base * 1.30) - 250;
  }
  else if(Year>=1385 && Year<=1390 && complt==true){
    price = (base * 1.30) - 75;
  }
  else if(Year>=1390 && Year<=1399 && complt==true){
    price = (base * 1.30) - 25;
  }
   else if(Year>=1380 && Year<=1385 && complt==false){
    price = (base * 1.30) - 550;
  }
  else if(Year>=1385 && Year<=1390 && complt==false){
    price = (base * 1.30) - 150;
  }
  else if(Year>=1390 && Year<=1399 && complt==false){
    price = (base * 1.30) - 50;
  }
  return `ماشین = ${make} / بیمه = ${price} / سال ماشین =${Year}`;
}
else if(make==3){
  make="پورشه";
  if(Year>=1380 && Year<=1385 && complt==true){
    price = (base * 1.80) - 250;
  }
  else if(Year>=1385 && Year<=1390 && complt==true){
    price = (base * 1.80) - 75;
  }
  else if(Year>=1390 && Year<=1399 && complt==true){
    price = (base * 1.80) - 25;
  }
   else if(Year>=1380 && Year<=1385 && complt==false){
    price = (base * 1.80) - 550;
  }
  else if(Year>=1385 && Year<=1390 && complt==false){
    price = (base * 1.80) - 150;
  }
  else if(Year>=1390 && Year<=1399 && complt==false){
    price = (base * 1.80) - 50;
  }
  return `ماشین = ${make} / بیمه = ${price} / سال ماشین =${Year}`;
}
}
