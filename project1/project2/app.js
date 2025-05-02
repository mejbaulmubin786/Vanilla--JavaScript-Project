

let value = document.getElementById('value');

const btns = document.querySelectorAll('.btn');

let counter = 0;
btns.forEach(function(btn){
  // console.log(btn);
  btn.addEventListener('click', function(e){
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
      counter --;
      
    } else if(styles.contains('increase')){
      counter ++;
      
    } else{
      counter =0;
      
    }

    if(counter>0){
      value.style.color = "green";
    } else if(counter<0){
      value.style.color = "blue";
    } else{
      value.style.color = "red";
    }

    value.textContent = counter;

  });
  
});










//=============================my own Code =================
// const value = document.getElementById('value');

// const btnDecrease = document.getElementsByClassName('btn')[0];
// const btnReset = document.getElementsByClassName('btn')[1];
// const btnIncrease = document.getElementsByClassName('btn')[2];
// let counter = 0;

// btnIncrease.addEventListener('click', function(){
//   counter +=1;
//   value.textContent = counter;
  
// });

// btnDecrease.addEventListener('click', function(){
//   counter -=1;
//   value.textContent = counter;
  
// });

// btnReset.addEventListener('click', function(){
//   counter =0;
//   value.textContent = counter;
  
// });

