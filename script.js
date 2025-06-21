//creata random image selector
//creat a funtion anduse it in hhtml 
//creat a funtion to tell teh winner
//creat roll a dice  funbtion
//this funtion willl select a random photo
//make an array containing 6 numbers seleect any randm number from that array

let score1=0
let score2=0
//creata fxn for random  number from 1 to 6
function randomno(arr){
    let index=Math.floor(Math.random() * arr.length);
    return arr[index]
    
}
let arr=[1,2,3,4,5,6]

//fxn to compaer numbers
function comp(no1,no2){
    let heading=document.getElementsByClassName("heading")
      if(no1>no2){
        heading[0].innerHTML=`PLAYER1 won`
        score1++
      }
      else if(no1<no2){
         heading[0].innerHTML=`PLAYER2 won`
         score2++
      }
      else{
        
         heading[0].innerHTML=`DRAW`
      }
}


function roll(){
   //use dom to get phtos by id
   let player_1=randomno(arr)
   let player_2=randomno(arr)
   let search=document.getElementsByClassName("img1")
   let search2=document.getElementsByClassName("img2")
   search[0].src=`images/dice${player_1}.png`
   search2[0].src=`images/dice${player_2}.png`
    
   comp(player_1,player_2)

   let score_1=document.getElementsByClassName("score1")
   let score_2=document.getElementsByClassName("score2")
   
   score_1[0].innerHTML=`${score1}`
   score_2[0].innerHTML=`${score2}`
}


