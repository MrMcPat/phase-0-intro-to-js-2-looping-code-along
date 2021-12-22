// Code your solutions in this file


function writeCards(name, event) {
    let thankYou=[];
    for (let i = 0; i<name.length; i++) {
        thankYou.push("Thank you, "+ name[i] + ", for the wonderful " + event + " gift!");
    }
    return thankYou;
    }
    writeCards(["Ada", "Brendan", "Ali"], "birthday");
    
function countDown(num) {
        while (num >= 0) {
            num--;
            console.log(num+1);
        }
}
    
    