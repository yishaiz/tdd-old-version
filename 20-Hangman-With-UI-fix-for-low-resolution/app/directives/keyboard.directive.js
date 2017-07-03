'use strict';
(function () {

    var app = angular.module("hangmanAppInternal");

    app.directive('keyboard', keyboard);

    function keyboard(hangmanEvents) {

        return {
            templateUrl: 'app/views/templates/keyboard.tmpl.html',

            restrict: 'E',
            scope: {
                keys: '=',
                wasSelected: '&'
            },
            link: function postLink(scope) {
                scope.onKeyClick = function (key) {
                    scope.$emit(hangmanEvents.letterSelected, key);
                };
                scope.wasSelected = scope.wasSelected();
            }
        };
    }

    app.constant('hangmanEvents', {
        letterSelected: 'letterSelected'
    });

})();