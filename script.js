"use strict";

/*
    DOM is document object model 
    under the document a lot of element that elements are called as objects


function button(){
    alert("Button clicked");
}

let box = document.querySelector(".js");
box.style.color = "green";

let btnEle = document.querySelector(".btn");
//btnEle.addEventListener("click", button);

let color = "white";


btnEle.addEventListener("click",


    function name(e){ //e is event 
        
        console.log(e);
        if (color == "white"){
          document.querySelector("body").style.backgroundColor = "green";
          color = "green";
        }
        else{

            document.querySelector("body").style.backgroundColor = "white";
            color = "white";

        }
    }
);

*/

const guess_inp = document.querySelector('.guess');
const check = document.querySelector(".check");
const msg_label = document.querySelector(".message");
const big_number = document.querySelector(".number");
const score_lable = document.querySelector(".score");
const again_btn = document.querySelector(".again");
const body_obj = document.querySelector("body");
const high_score_label = document.querySelector(".highscore");
const h1_text = document.querySelector("h1");
const btn_again_obj = document.querySelector(".btn");


//the element should not be changed for that using const

let total_score = 20;
let max_high_score = 0;
let hidden_num = Math.random() * 20 + 1;

//let p = Math.trunc(20.5); //trunc is a lowest round off

hidden_num = Math.trunc(hidden_num);

console.log(hidden_num);

check.addEventListener(

    "click",
    
    function(event)
    {
        let inp_val = Number(guess_inp.value);
        
        if (inp_val >= 1 && inp_val <= 20) {
          if (inp_val === hidden_num) {
            msg_label.textContent = "correct";
            body_obj.style.backgroundColor = "green";
            big_number.textContent = hidden_num;

            if (total_score > max_high_score) {
              max_high_score = total_score;
              high_score_label.textContent = max_high_score;
              h1_text.textContent = "Vanakam d Maapla!!";
            }
          }
          else{

            if (hidden_num > guess_inp.value){
                msg_label.textContent = "Too Low...";
            }
            if (hidden_num < guess_inp.value) {
                msg_label.textContent = "Too High...";
            }
            score_lable.textContent -= 1; 
            if (score_lable.textContent == 0){
                h1_text.textContent = "You Lose!!";
                body_obj.style.backgroundColor = "red";
            }
            if (score_lable.textContent < 0){
                score_lable.textContent = 0;
            }
          }
         
        } else {
          alert("Enter number only between 1 to 20");
        }
    }
);


btn_again_obj.addEventListener(
  "click",
  function (event) {
    score_lable.textContent = 20;
    msg_label.textContent = "Start guessing...";
}
);

