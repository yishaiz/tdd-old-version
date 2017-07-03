'use strict';

angular
    .module('hangmanAppInternal', [])
    .constant('maxStrikes', 8);

angular.module('hangmanApp', ['hangmanAppInternal']);

//angular.module('hangman.templates', []);




