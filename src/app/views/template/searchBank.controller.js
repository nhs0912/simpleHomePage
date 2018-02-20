var md = require('../../app.module');
md.controller('views.searchBank.controller', __controller);

function __controller($scope, $stateParams,$commonService)
{
  let vm = this;
   
   let viewModel = {
         "scriptBox" :"뱅크웨어글로벌"
    };
   
    _.assign(vm, viewModel);
    console.log(vm);
    $scope.test = viewModel.scriptBox;
    $scope.searchValue = $stateParams.searchValue;
  
   // vm.click = () => {
   //    $commonService.login().then(
   //    	data => {
   //       console.log('success');
   //    }, data => {
   //       console.log('error');
   //    });
   // };
}