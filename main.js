const min = 1;
const max = 100;
const target = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(target)
let tries = 0 ;
let tring = true ;
let try1 = document.getElementById('try')

function triesCounter(){
    tries += 1;

    if(tries == 10 && tring == true ){
        document.getElementById('tex').innerHTML =`YOU LOST <Br> you tried 10 times wrong <br> the number was ${target}`
        tring = false;
    }
}

function lowerOrHigher() {
    triesCounter();
    if(tring == true){
    if(try1.value > target){
        document.getElementById('tex').innerHTML =`The number is <b>LOWER</b> than this <br> You still have ${10 - tries} tries `
    } else if(try1.value < target){
        document.getElementById('tex').innerHTML =`The number is <b>HIGHER</b> than this <br> You still have ${10 - tries} tries `
    }else if(try1.value == target){
        document.getElementById('tex').innerHTML =`<b>Congratulations</b> you got the number in ${tries} tries `  
        tring = false;
    }
}
}