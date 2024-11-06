//Funzioni per far scorrere il testo nella home avanti e indietro

const nome = document.getElementById("nametostamp");
if(nome){
  showText(nome, "Andrea Bortolotti", 0, 150); 

  function showText (target, message, index, interval) {     
    if (index < message.length) {
        target.append(message[index]);
        setTimeout((function () { 
          showText(target, message, index, interval); 
        }), interval);
      }
    index++;
    if(index === 18){
      setTimeout(cancelText(target,message,0,150),150);
    }
  }
    
  function cancelText(target, message, index, interval){
    if(index<message.length){
      let new_string = message.substr(0,message.length-(index+1));
      if(index===0){
        setTimeout((function(){
          target.innerHTML= new_string;
          cancelText(target, message, index, interval);
        }),1500);
      }else{
        setTimeout((function () { 
          target.innerHTML= new_string;
          cancelText(target, message, index, interval); 
        }), interval);
      }
    }
    index++;
    if(index === 18){
      setTimeout(showText(target,message,0,150),150);
    }
  }
}
/* ------------------------------------------------------------*/
//Funzioni per scorrimento elementi in ingresso home
document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector("main article");
  const aside = document.querySelector("main aside");
  const boxLi = document.querySelectorAll("header nav ul li");

  if(aside){
    setTimeout(() => {
        article.classList.add("visible");
    }, 300);

    setTimeout(() => {
        aside.classList.add("visible");
    }, 300); 
    
    boxLi.forEach((li,index) => {
      setTimeout(()=>{
        li.classList.add("visible");
      }, index * 300);
    });
  }else{
    boxLi.forEach((li)=>{ li.classList.add("visible")});
  }

});
/* ------------------------------------------------------------*/
//Funzioni per scorrimento elementi in ingresso about

document.addEventListener("DOMContentLoaded", () => {
  const riquadro = document.querySelector(".about");
  const about = document.querySelector(".about_header");
  const foto = document.querySelector(".pic");
  const pres = document.querySelector(".presentazione");
  const contatti = document.querySelector(".contatti");
  const skill = document.querySelector(".skills_header");
  const linguaggio = document.querySelectorAll(".language");
  
  if(pres){
    setTimeout(()=>{
      riquadro.classList.add("visible");
    },1);

    setTimeout(()=>{
      skill.classList.add("visible");
    },1200);

    setTimeout(() => {
      about.classList.add("visible");
      foto.classList.add("visible");
    },1200);

    setTimeout(()=>{
      pres.classList.add("visible");
    },1400);

    setTimeout(() => {
      contatti.classList.add("visible");
    },2000);

    setTimeout(()=>{
      linguaggio.forEach((item,index) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, index*150);
      });
    },2100);
  }
});
/* ------------------------------------------------------------*/
//Funzioni per scorrimento elementi in ingresso portfolio
document.addEventListener("DOMContentLoaded", () =>{
  const progetti = document.querySelectorAll(".progetto");
  if(progetti){
    progetti.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index*200);
    });
  }
});
