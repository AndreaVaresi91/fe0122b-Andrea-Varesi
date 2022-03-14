let giocatore1: number = Math.floor(Math.random() * (100 - 1) + 1);
let giocatore2: number =  Math.floor(Math.random() * (100 - 1) + 1);

console.log(giocatore1)
console.log(giocatore2)

function casual() {
    let random: number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(random)

    if (random == giocatore1) {
        alert("complimenti giocatore 1")

    } else if (random == giocatore2) {
        alert("complimenti giocatore 2")

    } else {
        let modulo1 = Math.abs(random - giocatore1)
        let modulo2 = Math.abs(random - giocatore2)

        console.log(modulo1)
        console.log(modulo2)

        if (modulo1 < modulo2) {
            alert("Giocatore 1 si è avvicinato di piu")
        } else {
            alert("Giocatore 2 si è avvicinato di piu")
        }
    }

}

casual();

