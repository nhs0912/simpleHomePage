var md = require('../../app.module');
md.controller('views.Chaja.controller', __controller);

function __controller($scope, $commonService)
{
   let vm = this;
   $scope.test = 1;
   let viewModel = {
         "scriptBox":""
   };
   
   // _.assign(vm, viewModel);
   // console.log(vm);
   // vm.click = () => {
   //    $commonService.login().then(
   //    	data => {
   //    		window.alert("success");
   //       console.log('success');
   //    }, data => {
   //       console.log('error');
   //    });
   // };
}