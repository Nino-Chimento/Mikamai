// posizionamento:sostitunedi gli argomenti con date o nomi il sort ordinera anche 
// questi 

const array = [2, 1, 4, 3]

array.sort((a, b) =>
    a > b ? 1 : -1,
);
for (let index = 0; index < array.length; index++) {}
console.log(array)

// search item restituisce la poszione dell item trovato, la ricerca e'fatta su oggetti 
// identici,si potrebbe implementare l includes invece della comparazione 
// per restituire modificanto il return con un push in un array di appoggio
// tutti gli elementi che ad esempio contengono uan porzione di stringa

let array = ["nino", "cane", "fame", "prova"]

function search(itemSearch, array) {
    for (let index = 0; index < array.length; index++) {
        if (itemSearch === array[index]) {
            return console.log(index)
        } else {
            return console.log("elemento non trovato")
        }
    }
}
search("fame", array)

// appiattimento array: sfruttando le virgole e quindi lo SecurityPolicyViolationEvent,si riesce 
// ad appiattire l'array in modo semplice,dividendolo per un determinato elemento

let array = [1, [4, 5],
    [2, [3, 4]]
]

const flatten = array.toString().split(',').map(Number)
console.log(flatten);

// non ho svolto il punto 4 perche' non ho nozioni scraping capendo che non bisognava
// sfruttare chiamate Api.