var md = require('../../app.module');
md.controller('views.searchNoteBook.controller', __controller);

function __controller($scope, $state,$commonService,$stateParams,$commonServiceRest)
{
 
   
   let vm = this;
   let viewModel = {
        "items": [],
        "button": {
            "readLabel": '데이터 읽기',
            "createLabel": '데이터 생성',
            "updateLabel": '데이터 업데이트',
            "deleteLabel": '데이터 삭제'
        }
    };
   _.assign(vm, viewModel);

    $commonServiceRest.getJSONData().then((data) => {
            vm.items = data;
    });
    $scope.searchValue = $stateParams.params.searchInput;
    //   $commonServiceRest.getJSONNotebookData().then((data) => {
    //         vm.items = data;
    // });

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