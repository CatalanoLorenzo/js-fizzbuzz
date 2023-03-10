/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//Scrivere in console.log numeri da 1 a 100
const ulEl = document.createElement("ul");
const card = document.getElementById('card')
ulEl.className += ('d-flex flex-wrap')
let fizz = 'fizz';
let buzz = 'buzz';
let fizzBuzz = 'fizzbuzz';

for (let i = 1; i <= 100; i++) {
    const liEl = document.createElement("li")
    liEl.className += ("d-flex m-2 justify-content-center align-items-center box border border-1")
    ulEl.append(liEl)

    if (i % 3 == 0 && i % 5 == 0) {
        liEl.innerHTML = `${fizzBuzz}`
        liEl.classList.add ("fizz_buzz")
    } else if (i % 3 == 0) {
        liEl.innerHTML = `${fizz}`
        liEl.classList.add ("buzz")
    } else if (i % 5 == 0) {
        liEl.innerHTML = `${buzz}`
        liEl.classList.add ("fizz")
    }
    else{
        liEl.innerHTML = `${i}`
    }
}
console.log(ulEl);
card.prepend(ulEl)
