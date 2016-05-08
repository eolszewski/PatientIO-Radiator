(function() {
    'use strict';

    angular
        .module('app')
        .directive('requestsSection', requestsSectionDirective);

    function requestsSectionDirective() {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                theme: '@',
                requests: '='
            },
            template: '' +
                      '<section>' +
                      '  <md-subheader ng-class="theme">{{title}}</md-subheader>' +
                      '  <md-list>' +
                      '    <md-list-item class="md-3-line" ng-repeat="request in requests">' +
                      '    <div class="md-list-item-text">' +
                      '      <h3>{{request.timeStamp}}</h3>' +
                      '      <h4>{{request.detail}}</h4>' +
                      '      <p>{{request.url}}</p>' +
                      '    </div>' +
                      '    </md-list-item>' +
                      '  </md-list>' +
                      '</section>',
            link : function(scope, element, attrs) {
            }
        };
    }
})();