var md = require('../../app.module');
md.controller('views.template.controller', __controller);

function __controller($scope, $commonService, $state)
{
   let vm = this;
   $scope.test = 1;
   let viewModel = {
         "id" :"",
         "pwd":""
   };
   
   _.assign(vm, viewModel);
   console.log(vm);
   vm.click = () => {
      $commonService.login().then(
      	data => {
         console.log('success');
      }, data => {
         console.log('error');
      });
   };
}
