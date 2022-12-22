const mid = document.getElementById("mid");
const midtxt = document.getElementById("midtxt");

let percent = 0;

midtxt.innerHTML = `Working on update ${percent}% complete. <br> Don't turn off your PC. This will take a while.`

let number = 10000

function loading() {
    if (number < 100) {
        number = 100
    }
    if (number > 100000000) {
        number = 100000000
    }
    function up() { }
    if (percent != 100) {
        let x = Math.random();
        let time = x * number;
        setTimeout(() => {
            percent += 1;
            midtxt.innerHTML = `Working on update ${percent}% complete. <br> Don't turn off your PC. This will take a while.`
            up();
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
}
up()

};

window.addEventListener("load", setTimeout(() => {
    number = prompt('Enter number between 100 and 100000000.\nHigher number = longer update screen', 10000)
    loading()
}, 1000));
