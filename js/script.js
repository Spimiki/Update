const mid = document.getElementById("mid");
const midtxt = document.getElementById("midtxt");

let percent = 0;

midtxt.innerHTML = `Working on update ${percent}% complete. <br> Don't turn off your PC. This will take a while.`


let number = 10000

function loading() {
    let x = Math.random();
    let time = x * number;
    if (percent != 100) {
        setTimeout(() => {
            percent += 1;
            midtxt.innerHTML = `Working on update ${percent}% complete. <br> Don't turn off your PC. This will take a while.`
            loading();
        }, time);
    }
    else {
        setTimeout(() => {
            document.body.style.backgroundColor = '#000'
            document.body.style.cursor = 'none'
            document.body.style.overflow = 'hidden'
            document.body.innerHTML = ` `;
        }, number * x + 100);
    }

};

window.addEventListener("load", setTimeout(() => {
    number = prompt('Im wyższy numer, tym dłużej będzie trwać aktualizacja\ndefault: 10000', number)
    loading()
}, 1000));