'use strict';
(function (angular) {

    function MainController(Game, $scope, $rootScope) {
        var self = this;
        $scope.$on('gameOver', function () {
            $rootScope.toggle('gameOverOverlay', 'on');
        });

        $rootScope.toggle = function (event, value) {
            $rootScope.gameState = 'finished';
        };

        $scope.init = function () {
            self.startNewGame('new game to guess');
        };

        this.startNewGame = function (guessWord) {

            this.game = new Game(guessWord);

            var self = this;

            $scope.$on('letterSelected', function (event, letter) {
                self.game.selectLetter(letter);
            });

        };

/*

        this.isBlueFace = function () {
            return self.game.strikes > 2 && self.game.strikes < 8;
        };


        this.isRedFace = function () {
            return self.game.strikes ==8;
        };
*/


    }

    angular
        .module('hangmanAppInternal')
        .controller('MainController', MainController);
})(angular)