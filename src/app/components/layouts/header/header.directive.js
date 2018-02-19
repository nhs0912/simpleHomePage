/**
 * Created by sgjeon on 16. 4. 18..
 */

const md = require('../../../app.module');

md.directive('componentsLayoutsHeaderDirective', __directive);


 /* @ngInject */
function __directive($compile) {

    return {
        replace: true,
        scope: true,
        transclude: true,
        restrict: 'E',
        templateUrl: 'app/components/layouts/header/header.tpl.html',
        controllerAs: 'vm',
        controller: function($scope){
        },
        compile: function (iElement, iAttrs, transclude) {
            return {
                pre: function ($scope, iElement, iAttrs, controller) {
                },
                post: function ($scope, iElement, iAttrs, controller) {

                }
            };
        }
    };
}
module.exports = md;