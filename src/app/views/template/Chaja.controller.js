var md = require('../../app.module');
md.controller('views.Chaja.controller', __controller);


function __controller($scope,$state, $commonService)
{
   let vm = this;
   $scope.test = 1;
   let viewModel = {
         "scriptBox":""
   };
   
   _.assign(vm, viewModel);
   
   $scope.moveNextPage = function(){
    let params = {
         searchInput:  $scope.searchValue 
    };
      
    
   // window.alert(params.searchInput);
   
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