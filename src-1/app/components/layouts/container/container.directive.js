/**
 * Created by sgjeon on 16. 4. 18..
 */

const md = require('../../../app.module');

md.directive('componentsLayoutsContainerDirective', __directive);


 /* @ngInject */
function __directive($compile) {

    return {
        replace: true,
        scope: false,
        transclude: false,
        restrict: 'E',
        templateUrl: 'app/components/layouts/container/container.tpl.html',
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