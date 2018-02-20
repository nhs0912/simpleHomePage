var md = require('../../app.module');
md.controller('views.searchSuzy.controller', __controller);

function __controller($scope, $commonService,$stateParams, $state)
{
  let vm = this;
   
   let viewModel = {
         "scriptBox" :"suzy"
    };
   
   _.assign(vm, viewModel);
   console.log(vm);
   $scope.test = viewModel.scriptBox;
   $scope.searchValue = $stateParams.params.searchInput;

    $scope.moveNextPage = function(){
    let params = {
         searchInput:  $scope.searchValue 
    };
      
    
    window.alert(params.searchInput);
   
     switch(params.searchInput){

                case "뱅크웨어글로벌":
                case "bankwareglobal":
                case "bankware global":
                $state.go('searchBank', {params: params});
                break;

                case "suzy":
                case "수지":
                case "miss a 수지":
                $state.go('searchSuzy', {params: params});
                break;

                case "계좌이체":
                $state.go('accountTransfer', {params: params});
                break;

                case "노트북":
                case "notebook":
                case "laptop":
                case "랩탑":
                $state.go('searchNoteBook', {params: params});
                break;

            }


   
   
   };
}