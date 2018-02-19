/**
 * Created by sgjeon on 16. 4. 18..
 */

const md = require('../../app.module');

md.controller('views.board.controller', __controller);

/* @ngInject */
function __controller($commonServiceRest){

    let vm = this;

    // viewModel 선언
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

    // CRUD 예제 코드
    vm.readData = () => {
        // stub 데이터를 가져온다.
        $commonServiceRest.getJSONData().then((data) => {
            vm.items = data;
        });
    };

    vm.createData = () => {
        let idx = vm.items.length + 1;
        vm.items.push({"id": `bwg${idx}`, "name": `뱅크웨어글로벌${idx}`, "sex": 'man'})
    };

    vm.updateData = () => {
        let idx = vm.items.length;
        vm.items[(idx - 1)] = {"id": `bwg${idx}!!`, "name": `뱅크웨어글로벌${idx}!!`, "sex": 'man'}
    };

    vm.deleteData = () => {
        let idx = vm.items.length - 1;
        vm.items.splice(idx, 1);
    };
}

module.exports = md;
