//Funzioni per far scorrere il testo nella home avanti e indietro

const nome = document.getElementById("nametostamp");
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

//Funzione per cambiare colore della pagina attiva nella navigation bar

