'use strict';

(function (angular) {

    function gameFactory(gameState, maxStrikes, $rootScope) {

        function Game(guessWord) {

            var self = this;
            this.strikes = 0;


            //this.strikes = 5;



            this.state = gameState.playing;
            this.MAX_STRIKES = maxStrikes;
            this.word = guessWord || "no word selected";
            //  this.keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            this.charactersInLanguage = 'qwertyuiopasdfghjklzxcvbnm'.split('');
            this.charactersInLanguageForUI = 'qwertyuiop asdfghjkl-+zxcvbnm'.split('')
            this.GameState = gameState;

            var selectedLetters = [];

            this.isSelectedLetter = function (char) {
                return selectedLetters.indexOf(char) !== -1;
            };

            this.selectLetter = function (letter) {
                if (self.state != gameState.playing) {
                    return;
                }

                if (self.isSelectedLetter(letter)) {
                    return;
                }

                selectedLetters.push(letter);

                if (!self.word.toLowerCase().match(letter)) {
                    self.strikes++;
                }

                checkAndUpdateGameStatus();

                //   console.log(self.strikes);
            };

            /*

             if(!String.prototype.contains){
             String.prototype.contains = function (str) {
             return (this.indexOf(str)!==-1);
             };
             }

             */


            if (!Array.prototype.contains) {
                Array.prototype.contains = function (str) {
                    var i;
                    for (i in this) {
                        if (this[i] == str) {
                            return true;
                        }
                    }
                    return false;
                };
            }


            function checkAndUpdateGameStatus() {

                if (self.strikes === self.MAX_STRIKES) {
                    self.state = gameState.lost;
                }
                else {
                    //can be done once, and not in any letter guess.
                    var wordLetters = self.word.toLowerCase().replace(/\s/g, '').split('');


                    //    console.log('wordLetters ' + wordLetters);
                    var won = wordLetters.every(function (char) {
                        return selectedLetters.contains(char);
                    });

//                    console.log('won ' + won);

                    if (won) {
                        self.state = gameState.won;
                    }
                }

                if (self.state !== gameState.playing) {
                    $rootScope.$broadcast('gameOver', self.state);
                }
            }

            this.getRevealedLettersArray = function () {
                var guessWordStatus = [];
                var wordCharArray = guessWord.split('');

                return wordCharArray.map(function (char) {
                    var shouldShowChar = char === ' ' || self.isSelectedLetter(char) //selectedLetters.indexOf(char) !== -1
                    return shouldShowChar ? char : '_';
                });
            };

            this.getRevealedWord = function () {
                //var space = ' ' + ' ';
                return this.getRevealedLettersArray().join('');
                //.replace(/ /g, space );
            };

        };

        return Game;
    }

    angular
        .module('hangmanAppInternal')
        .factory('Game', gameFactory)
        .constant('gameState', {'playing': 10, 'won': 1, 'lost': -1});
    //   .constant('maxStrikes', 8);
})(angular)
