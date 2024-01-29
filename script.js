"use strict";

window.addEventListener("load", start);

let number;

    function start() {
        console.log("start");
        number = generateRandomNumber();
        document.querySelector("#guess-form").addEventListener("submit", receiveGuess);
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function receiveGuess(event) {
        event.preventDefault();

        const form = event.target;
        const value = form.guess.valueAsNumber;

        checkGuess(value);
    }

    function checkGuess(guess) {
        if(guess === number) {
                guessIsCorrect(guess);
        } else if(guess < number) {
                guessIsTooLow(guess);
        } else {
                guessIsTooHigh(guess);
        }
    }

    function guessIsCorrect(guess) {
        const list = document.querySelector("#guess-list");
        const html = `<li class="list-group-item">You guessed ${guess} - which was correct! New number will be generated in 10 seconds</li>`;
        list.insertAdjacentHTML("beforeend", html);
    
        setTimeout(function() {
            clearGuessList();
            number = generateRandomNumber();
            console.log(number);
        }, 10000);
    }

    function clearGuessList() {
        const list = document.querySelector("#guess-list");
        list.innerHTML = '';
    }

    function guessIsTooLow(guess) {
        const list = document.querySelector("#guess-list");
        const html = `<li class="list-group-item">You guessed ${guess} - that was too low, try again!</li>`;
        list.insertAdjacentHTML("beforeend", html);
    }

    function guessIsTooHigh(guess) {
        const list = document.querySelector("#guess-list");
        const html = `<li class="list-group-item">You guessed ${guess} - that was too high, try again!</li>`;
        list.insertAdjacentHTML("beforeend", html);
    }