/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//Scrivere in console.log numeri da 1 a 100
const ulEl = document.createElement("ul");
ulEl.classList.add (" d-flex flex-wrap")
let fizz = 'fizz';
let buzz = 'buzz';
let fizzBuzz = 'fizzbuzz';

for (let i = 1; i < 100; i++) {
    const liEl = document.createElement("li")
    liEl.classList.add (" border-1 m-1 p-1 d-flex justify-content-center align-items-center")
    ulEl.append(liEl)

    if (i % 3 == 0 && i % 5 == 0) {
        liEl.innerHTML = `${fizzbuzz}`
        liEl.classList.add (" frizz_box")
    } else if (i % 3 == 0) {
        liEl.innerHTML = `${fizz}`
        iEl.classList.add (" box")
    } else if (i % 5 == 0) {
        liEl.innerHTML = `${buzz}`
        iEl.classList.add (" frizz")
    }
    else{
        liEl.innerHTML = `${i}`
    }
}
console.log(ulEl);
document.body.prepend(ulEl)