/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/app.bootstrap.js */"f2312596f3b7d4a164cd");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/app.config.js */"ac9fb58e23491f500d5e");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/app.module.js */"a3526f024d21c0dc4dbf");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/app.run.js */"74db4062ceb3ba03f075");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/common/common.service.config.js */"995c727d3d8213332392");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/common/common.service.js */"f3d1aa46e6a19eaedea1");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/common/common.service.rest.js */"0438cdb4caf45883466d");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/components/layouts/container/container.directive.js */"9d0ea21effa4c1c17055");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/components/layouts/footer/footer.directive.js */"6fc822223a8b98670938");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/components/layouts/header/header.directive.js */"66d4463fb11a998e40bb");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/board/board.controller.js */"427268f1c1723d7664bf");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/login/login.controller.js */"a1096974154d4a50fd4e");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/template/accountTransfer.controller.js */"53a2b41ec8e9fc0bd3b5");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/template/Chaja.controller.js */"93b7cae3349341b00fad");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/template/searchBank.controller.js */"4a94ec7f0f3937aab05e");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/template/searchNoteBook.controller.js */"fa2099b31973de2a7382");
	__webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/template/searchSuzy.controller.js */"e560e91931c670ee19a2");
	module.exports = __webpack_require__(/*! C:/Users/nhs09/Documents/eduBx/simpleHomePage/src/app/views/template/template.controller.js */"7cf2c0500fdf3162e05e");


/***/ },

/***/ "7cf2c0500fdf3162e05e":
/*!***********************************************!*\
  !*** ./views/template/template.controller.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");
	md.controller('views.template.controller', __controller);

	function __controller($scope, $commonService, $state) {
	   var vm = this;
	   $scope.test = 1;
	   var viewModel = {
	      "id": "",
	      "pwd": ""
	   };

	   _.assign(vm, viewModel);
	   console.log(vm);
	   vm.click = function () {
	      $commonService.login().then(function (data) {
	         console.log('success');
	      }, function (data) {
	         console.log('error');
	      });
	   };
	}

/***/ },

/***/ 1:
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = angular;

/***/ },

/***/ "ac9fb58e23491f500d5e":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var app = __webpack_require__(/*! ./app.module */ "a3526f024d21c0dc4dbf");

	// route 설정
	app.config(__config);

	/* @ngInject */
	function __config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

	    if (!$httpProvider.defaults.headers.get) $httpProvider.defaults.headers.get = {};

	    // IE 9 브라우저에서 ajax 호출 시, 파일이 캐시되는 문제를 위한 설정(파일의 modify 시간을 변조한다)
	    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
	    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

	    $stateProvider.state('500', {
	        url: "/500",
	        templateUrl: 'app/views/error/500.tpl.html'
	    }).state('login', {
	        url: "/login",
	        templateUrl: 'app/views/login/login.tpl.html',
	        controller: 'views.login.controller',
	        controllerAs: 'vm'
	    }).state('wrap', {
	        templateUrl: 'app/views/wrap/wrap.tpl.html'
	    }).state('wrap.board', {
	        url: "/board",
	        templateUrl: 'app/views/board/board.tpl.html',
	        controller: 'views.board.controller',
	        controllerAs: 'vm'
	    }).state('template', {
	        url: "/template",
	        templateUrl: 'app/views/template/template.tpl.html',
	        controller: 'views.template.controller',
	        controllerAs: 'vm' //별칭 view model 이걸 하지 않으면 $Scope 사용하면 된다.
	    }).state('searchBank', {
	        url: "/searchBank",
	        templateUrl: 'app/views/template/searchBank.tpl.html',
	        controller: 'views.searchBank.controller',
	        controllerAs: 'vm',
	        params: {
	            params: null
	        }
	    }).state('searchSuzy', {
	        url: "/searchSuzy",
	        templateUrl: 'app/views/template/searchSuzy.tpl.html',
	        controller: 'views.searchSuzy.controller',
	        controllerAs: 'vm',
	        params: {
	            params: null
	        }
	    }).state('accountTransfer', {
	        url: "/accountTransfer",
	        templateUrl: 'app/views/template/accountTransfer.tpl.html',
	        controller: 'views.accountTransfer.controller',
	        controllerAs: 'vm',
	        params: {
	            params: null
	        }
	    }).state('searchNoteBook', {
	        url: "/searchNoteBook",
	        templateUrl: 'app/views/template/searchNoteBook.tpl.html',
	        controller: 'views.searchNoteBook.controller',
	        controllerAs: 'vm',
	        params: {
	            params: null
	        }
	    }).state('Chaja', {
	        url: "/Chaja",
	        templateUrl: 'app/views/template/Chaja.tpl.html',
	        controller: 'views.Chaja.controller',
	        controllerAs: 'vm'
	    });

	    $urlRouterProvider.otherwise('/Chaja');
	}

/***/ },

/***/ "a3526f024d21c0dc4dbf":
/*!***********************!*\
  !*** ./app.module.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(/*! angular */ 1);

	var md = angular.module('app', [__webpack_require__(/*! angular-ui-router */ 2), __webpack_require__(/*! bx-ui-angular */ 3)]);

	module.exports = md;

/***/ },

/***/ 2:
/*!********************************!*\
  !*** external "\"ui.router\"" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = "ui.router";

/***/ },

/***/ 3:
/*!****************************!*\
  !*** external "\"bx-ui\"" ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = "bx-ui";

/***/ },

/***/ "74db4062ceb3ba03f075":
/*!********************!*\
  !*** ./app.run.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var angular = __webpack_require__(/*! angular */ 1);
	var app = __webpack_require__(/*! ./app.module */ "a3526f024d21c0dc4dbf");

	app.run(__run);

	/* @ngInject */
	function __run($rootScope, $commonServiceConfig) {}

/***/ },

/***/ "995c727d3d8213332392":
/*!*****************************************!*\
  !*** ./common/common.service.config.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by parkbeomsoo on 2016. 5. 31..
	 */

	var md = __webpack_require__(/*! ../app.module */ "a3526f024d21c0dc4dbf");

	md.service('$commonServiceConfig', __service);

	function __service() {

	    return {
	        restful: {
	            data: {
	                url: 'app/common/stub/data.json',
	                method: 'GET'
	            }
	        }
	    };

	    return {
	        restful: {
	            notebookData: {
	                url: 'app/common/stub/notebook.json',
	                method: 'GET'
	            }
	        }
	    };
	}

/***/ },

/***/ "f3d1aa46e6a19eaedea1":
/*!**********************************!*\
  !*** ./common/common.service.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../app.module */ "a3526f024d21c0dc4dbf");

	md.service('$commonService', __service);

	function __service($q, $http) {
	  return {
	    login: function login() {
	      var defer = $q.defer();

	      $http({
	        url: 'app/common/stub/loginInfo.json',
	        method: 'GET'
	      }).success(function (data, status, headers, config) {
	        defer.resolve(data);
	      }).error(function (data, status, headers, config) {
	        defer.resolve(data);
	      });

	      return defer.promise;
	    }
	  };

	  return {
	    notebookList: function notebookList() {
	      var defer = $q.defer();

	      $http({
	        url: 'app/common/stub/notebook.json',
	        method: 'GET'
	      }).success(function (data, status, headers, config) {
	        defer.resolve(notebookData);
	      }).error(function (data, status, headers, config) {
	        defer.resolve(notebookData);
	      });

	      return defer.promise;
	    }
	  };
	}

/***/ },

/***/ "0438cdb4caf45883466d":
/*!***************************************!*\
  !*** ./common/common.service.rest.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by parkbeomsoo on 2016. 5. 31..
	 */

	var md = __webpack_require__(/*! ../app.module */ "a3526f024d21c0dc4dbf");

	md.service('$commonServiceRest', __service);

	function __service($http, $q, $commonServiceConfig) {

	    return {
	        getJSONData: function getJSONData() {

	            var defer = $q.defer();
	            $http({
	                url: $commonServiceConfig.restful.data.url,
	                method: $commonServiceConfig.restful.data.method
	            }).success(function (data, status, headers, config) {
	                defer.resolve(data);
	            }).error(function (data, status, headers, config) {
	                defer.resolve(data);
	            });

	            return defer.promise;
	        },

	        getJSONNotebookData: function getJSONNotebookData() {

	            var defer = $q.defer();
	            $http({
	                url: $commonServiceConfig.restful.notebookData.url,
	                method: $commonServiceConfig.restful.notebookData.method
	            }).success(function (data, status, headers, config) {
	                defer.resolve(data);
	            }).error(function (data, status, headers, config) {
	                defer.resolve(data);
	            });

	            return defer.promise;
	        }
	    };
	}

/***/ },

/***/ "f2312596f3b7d4a164cd":
/*!**************************!*\
  !*** ./app.bootstrap.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var angular = __webpack_require__(/*! angular */ 1);

	angular.element(document).ready(function (e) {
	  angular.bootstrap(document, ['app']);
	});

/***/ },

/***/ "6fc822223a8b98670938":
/*!*******************************************************!*\
  !*** ./components/layouts/footer/footer.directive.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../../app.module */ "a3526f024d21c0dc4dbf");

	md.directive('componentsLayoutsFooterDirective', __directive);

	/* @ngInject */
	function __directive($compile) {

	    return {
	        replace: true,
	        scope: true,
	        transclude: true,
	        restrict: 'E',
	        templateUrl: 'app/components/layouts/footer/footer.tpl.html',
	        compile: function compile(iElement, iAttrs, transclude) {

	            return {
	                pre: function pre($scope, iElement, iAttrs, controller) {},
	                post: function post($scope, iElement, iAttrs, controller) {}
	            };
	        }
	    };
	}
	module.exports = md;

/***/ },

/***/ "66d4463fb11a998e40bb":
/*!*******************************************************!*\
  !*** ./components/layouts/header/header.directive.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../../app.module */ "a3526f024d21c0dc4dbf");

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
	        controller: function controller($scope) {},
	        compile: function compile(iElement, iAttrs, transclude) {
	            return {
	                pre: function pre($scope, iElement, iAttrs, controller) {},
	                post: function post($scope, iElement, iAttrs, controller) {}
	            };
	        }
	    };
	}
	module.exports = md;

/***/ },

/***/ "427268f1c1723d7664bf":
/*!*****************************************!*\
  !*** ./views/board/board.controller.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");

	md.controller('views.board.controller', __controller);

	/* @ngInject */
	function __controller($commonServiceRest) {

	    var vm = this;

	    // viewModel 선언
	    var viewModel = {
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
	    vm.readData = function () {
	        // stub 데이터를 가져온다.
	        $commonServiceRest.getJSONData().then(function (data) {
	            vm.items = data;
	        });
	    };

	    vm.createData = function () {
	        var idx = vm.items.length + 1;
	        vm.items.push({ "id": 'bwg' + idx, "name": '\uBC45\uD06C\uC6E8\uC5B4\uAE00\uB85C\uBC8C' + idx, "sex": 'man' });
	    };

	    vm.updateData = function () {
	        var idx = vm.items.length;
	        vm.items[idx - 1] = { "id": 'bwg' + idx + '!!', "name": '\uBC45\uD06C\uC6E8\uC5B4\uAE00\uB85C\uBC8C' + idx + '!!', "sex": 'man' };
	    };

	    vm.deleteData = function () {
	        var idx = vm.items.length - 1;
	        vm.items.splice(idx, 1);
	    };
	}

	module.exports = md;

/***/ },

/***/ "a1096974154d4a50fd4e":
/*!*****************************************!*\
  !*** ./views/login/login.controller.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");

	md.controller('views.login.controller', __controller);

	/* @ngInject */
	function __controller() {}

	module.exports = md;

/***/ },

/***/ "53a2b41ec8e9fc0bd3b5":
/*!******************************************************!*\
  !*** ./views/template/accountTransfer.controller.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");
	md.controller('views.accountTransfer.controller', __controller);

	function __controller($scope, $commonService, $stateParams, $state) {
	  var vm = this;

	  var viewModel = {
	    "scriptBox": "뱅크웨어글로벌"
	  };

	  _.assign(vm, viewModel);
	  console.log(vm);
	  $scope.test = viewModel.scriptBox;
	  $scope.searchValue = $stateParams.params.searchInput;
	  // vm.click = () => {
	  //    $commonService.login().then(
	  //    	data => {
	  //       console.log('success');
	  //    }, data => {
	  //       console.log('error');
	  //    });
	  // };
	}

/***/ },

/***/ "93b7cae3349341b00fad":
/*!********************************************!*\
  !*** ./views/template/Chaja.controller.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");
	md.controller('views.Chaja.controller', __controller);

	function __controller($scope, $state, $commonService) {
	                var vm = this;
	                $scope.test = 1;
	                var viewModel = {
	                                "scriptBox": ""
	                };

	                _.assign(vm, viewModel);

	                $scope.moveNextPage = function () {
	                                var params = {
	                                                searchInput: $scope.searchValue
	                                };

	                                // $state.go('searchBank', {searchValue: searchValue});
	                                window.alert(params.searchInput);
	                                // console.log(searchValue);

	                                // if(params.searchInput=="뱅크웨어글로벌" || params.searchInput=="bankwareglobal")
	                                // {
	                                //   $state.go('searchBank', {params :params});
	                                // }
	                                switch (params.searchInput) {

	                                                case "뱅크웨어글로벌":
	                                                case "bankwareglobal":
	                                                case "bankware global":
	                                                                $state.go('searchBank', { params: params });
	                                                                break;

	                                                case "suzy":
	                                                case "수지":
	                                                case "miss a 수지":
	                                                                $state.go('searchSuzy', { params: params });
	                                                                break;

	                                                case "계좌이체":
	                                                                $state.go('accountTransfer', { params: params });
	                                                                break;

	                                                case "노트북":
	                                                case "notebook":
	                                                case "laptop":
	                                                case "랩탑":
	                                                                $state.go('searchNoteBook', { params: params });
	                                                                break;

	                                }
	                };
	}

/***/ },

/***/ "4a94ec7f0f3937aab05e":
/*!*************************************************!*\
  !*** ./views/template/searchBank.controller.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");
	md.controller('views.searchBank.controller', __controller);

	function __controller($scope, $state, $stateParams) {
	                var vm = this;

	                var viewModel = {
	                                "scriptBox": "뱅크웨어글로벌"
	                };

	                _.assign(vm, viewModel);

	                console.log($stateParams.params.searchInput);
	                $scope.searchValue = $stateParams.params.searchInput;
	                $scope.moveNextPage = function () {
	                                var params = {
	                                                searchInput: $scope.searchValue
	                                };

	                                // $state.go('searchBank', {searchValue: searchValue});
	                                window.alert(params.searchInput);
	                                switch (params.searchInput) {

	                                                case "뱅크웨어글로벌":
	                                                case "bankwareglobal":
	                                                case "bankware global":
	                                                                $state.go('searchBank', { params: params });
	                                                                break;

	                                                case "suzy":
	                                                case "수지":
	                                                case "miss a 수지":
	                                                                $state.go('searchSuzy', { params: params });
	                                                                break;

	                                                case "계좌이체":
	                                                                //accountTransfer();
	                                                                break;

	                                                case "노트북":
	                                                case "notebook":
	                                                case "laptop":
	                                                case "랩탑":
	                                                                //searchNoteBook();
	                                                                break;

	                                }
	                };
	}

/***/ },

/***/ "fa2099b31973de2a7382":
/*!*****************************************************!*\
  !*** ./views/template/searchNoteBook.controller.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");
	md.controller('views.searchNoteBook.controller', __controller);

	function __controller($scope, $state, $commonService, $stateParams, $commonServiceRest) {

	                $scope.searchValue = $stateParams.params.searchInput;
	                var vm = this;
	                var viewModel = {
	                                "items": [],
	                                "button": {
	                                                "readLabel": '데이터 읽기',
	                                                "createLabel": '데이터 생성',
	                                                "updateLabel": '데이터 업데이트',
	                                                "deleteLabel": '데이터 삭제'
	                                }
	                };
	                _.assign(vm, viewModel);

	                $commonServiceRest.getJSONData().then(function (data) {
	                                vm.items = data;
	                });

	                //   $commonServiceRest.getJSONNotebookData().then((data) => {
	                //         vm.items = data;
	                // });

	                $scope.moveNextPage = function () {
	                                var params = {
	                                                searchInput: $scope.searchValue
	                                };

	                                window.alert(params.searchInput);

	                                switch (params.searchInput) {

	                                                case "뱅크웨어글로벌":
	                                                case "bankwareglobal":
	                                                case "bankware global":
	                                                                $state.go('searchBank', { params: params });
	                                                                break;

	                                                case "suzy":
	                                                case "수지":
	                                                case "miss a 수지":
	                                                                $state.go('searchSuzy', { params: params });
	                                                                break;

	                                                case "계좌이체":
	                                                                //accountTransfer();
	                                                                break;

	                                                case "노트북":
	                                                case "notebook":
	                                                case "laptop":
	                                                case "랩탑":
	                                                                //searchNoteBook();
	                                                                break;

	                                }
	                };
	}

/***/ },

/***/ "e560e91931c670ee19a2":
/*!*************************************************!*\
  !*** ./views/template/searchSuzy.controller.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "a3526f024d21c0dc4dbf");
	md.controller('views.searchSuzy.controller', __controller);

	function __controller($scope, $commonService, $stateParams, $state) {
	                var vm = this;

	                var viewModel = {
	                                "scriptBox": "suzy"
	                };

	                _.assign(vm, viewModel);
	                console.log(vm);
	                $scope.test = viewModel.scriptBox;
	                $scope.searchValue = $stateParams.params.searchInput;

	                $scope.moveNextPage = function () {
	                                var params = {
	                                                searchInput: $scope.searchValue
	                                };

	                                window.alert(params.searchInput);

	                                switch (params.searchInput) {

	                                                case "뱅크웨어글로벌":
	                                                case "bankwareglobal":
	                                                case "bankware global":
	                                                                $state.go('searchBank', { params: params });
	                                                                break;

	                                                case "suzy":
	                                                case "수지":
	                                                case "miss a 수지":
	                                                                $state.go('searchSuzy', { params: params });
	                                                                break;

	                                                case "계좌이체":
	                                                                $state.go('accountTransfer', { params: params });
	                                                                break;

	                                                case "노트북":
	                                                case "notebook":
	                                                case "laptop":
	                                                case "랩탑":
	                                                                $state.go('searchNoteBook', { params: params });
	                                                                break;

	                                }
	                };
	}

/***/ },

/***/ "9d0ea21effa4c1c17055":
/*!*************************************************************!*\
  !*** ./components/layouts/container/container.directive.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../../app.module */ "a3526f024d21c0dc4dbf");

	md.directive('componentsLayoutsContainerDirective', __directive);

	/* @ngInject */
	function __directive($compile) {

	    return {
	        replace: true,
	        scope: false,
	        transclude: false,
	        restrict: 'E',
	        templateUrl: 'app/components/layouts/container/container.tpl.html',
	        compile: function compile(iElement, iAttrs, transclude) {

	            return {
	                pre: function pre($scope, iElement, iAttrs, controller) {},
	                post: function post($scope, iElement, iAttrs, controller) {}
	            };
	        }
	    };
	}
	module.exports = md;

/***/ }

/******/ });