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
    var searchValue = $scope.searchValue;
    // $state.go('searchBank', {searchValue: searchValue});
    window.alert(searchValue);
    console.log(searchValue);

    if(searchValue=="뱅크웨어글로벌")
    {
      $state.go('searchBank', {searchValue: searchValue});
    }
    // switch(searchValue){

    //             case "뱅크웨어글로벌":
    //             case "bankwareglobal":
    //             case "bankware global"
    //             $state.go('searchBank', {searchValue: searchValue});
    //             break;

    //             case "suzy":
    //             case "수지":
    //             case "miss a 수지":
    //             //searchSuzy();
    //             break;

    //             case "계좌이체"
    //             //accountTransfer();
    //             break;

    //             case "노트북":
    //             case "notebook":
    //             case "laptop":
    //             case "랩탑":
    //             //searchNoteBook();
    //             break;

    //         }
   
   };
}