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

	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/app.bootstrap.js */"55c77662804608a7a3dc");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/app.config.js */"05211f1afa57ca84aa17");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/app.module.js */"d130ee326adc5f318b40");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/app.run.js */"701161b70307a590a5e9");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/common/common.service.config.js */"4f85a43cbbac5b5290b2");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/common/common.service.js */"2e1dffc3117bcdfb7c17");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/common/common.service.rest.js */"bffeb31d8da8c2e09483");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/components/layouts/container/container.directive.js */"a4432495b6df8ca103e6");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/components/layouts/footer/footer.directive.js */"b44ba849da159d4d832c");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/components/layouts/header/header.directive.js */"81df59a275ddaf10ea61");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/views/board/board.controller.js */"7f3ebe75cb51b317561d");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/views/login/login.controller.js */"ebf82b59a10e77a32285");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/views/template/Chaja.controller.js */"196e38fb1d1ee92c926f");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/views/template/searchBank.controller.js */"1cf7e72e6e58c6977f65");
	__webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/views/template/searchSuzy.controller.js */"c88fba985232c6f9ccd6");
	module.exports = __webpack_require__(/*! /Users/heeseoknoh/Documents/eduBx/src/app/views/template/template.controller.js */"78d868e07a07e8eb0a0f");


/***/ },

/***/ "78d868e07a07e8eb0a0f":
/*!***********************************************!*\
  !*** ./views/template/template.controller.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "d130ee326adc5f318b40");
	md.controller('views.template.controller', __controller);

	function __controller($scope, $commonService) {
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

/***/ "05211f1afa57ca84aa17":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var app = __webpack_require__(/*! ./app.module */ "d130ee326adc5f318b40");

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
	        controllerAs: 'vm'
	    }).state('searchSuzy', {
	        url: "/searchSuzy",
	        templateUrl: 'app/views/template/searchSuzy.tpl.html',
	        controller: 'views.searchSuzy.controller',
	        controllerAs: 'vm'
	    }).state('Chaja', {
	        url: "/Chaja",
	        templateUrl: 'app/views/template/Chaja.tpl.html',
	        controller: 'views.Chaja.controller',
	        controllerAs: 'vm'
	    });

	    $urlRouterProvider.otherwise('/Chaja');
	}

/***/ },

/***/ "d130ee326adc5f318b40":
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

/***/ "701161b70307a590a5e9":
/*!********************!*\
  !*** ./app.run.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var angular = __webpack_require__(/*! angular */ 1);
	var app = __webpack_require__(/*! ./app.module */ "d130ee326adc5f318b40");

	app.run(__run);

	/* @ngInject */
	function __run($rootScope, $commonServiceConfig) {}

/***/ },

/***/ "4f85a43cbbac5b5290b2":
/*!*****************************************!*\
  !*** ./common/common.service.config.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by parkbeomsoo on 2016. 5. 31..
	 */

	var md = __webpack_require__(/*! ../app.module */ "d130ee326adc5f318b40");

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
	}

/***/ },

/***/ "2e1dffc3117bcdfb7c17":
/*!**********************************!*\
  !*** ./common/common.service.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../app.module */ "d130ee326adc5f318b40");

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
	}

/***/ },

/***/ "55c77662804608a7a3dc":
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

/***/ "a4432495b6df8ca103e6":
/*!*************************************************************!*\
  !*** ./components/layouts/container/container.directive.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../../app.module */ "d130ee326adc5f318b40");

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

/***/ },

/***/ "b44ba849da159d4d832c":
/*!*******************************************************!*\
  !*** ./components/layouts/footer/footer.directive.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../../app.module */ "d130ee326adc5f318b40");

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

/***/ "81df59a275ddaf10ea61":
/*!*******************************************************!*\
  !*** ./components/layouts/header/header.directive.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../../app.module */ "d130ee326adc5f318b40");

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

/***/ "7f3ebe75cb51b317561d":
/*!*****************************************!*\
  !*** ./views/board/board.controller.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../app.module */ "d130ee326adc5f318b40");

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

/***/ "ebf82b59a10e77a32285":
/*!*****************************************!*\
  !*** ./views/login/login.controller.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by sgjeon on 16. 4. 18..
	 */

	var md = __webpack_require__(/*! ../../app.module */ "d130ee326adc5f318b40");

	md.controller('views.login.controller', __controller);

	/* @ngInject */
	function __controller() {}

	module.exports = md;

/***/ },

/***/ "196e38fb1d1ee92c926f":
/*!********************************************!*\
  !*** ./views/template/Chaja.controller.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "d130ee326adc5f318b40");
	md.controller('views.Chaja.controller', __controller);

	function __controller($scope, $commonService) {
	   var vm = this;
	   $scope.test = 1;
	   var viewModel = {
	      "scriptBox": ""
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

/***/ "1cf7e72e6e58c6977f65":
/*!*************************************************!*\
  !*** ./views/template/searchBank.controller.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "d130ee326adc5f318b40");
	md.controller('views.searchBank.controller', __controller);

	function __controller($scope, $commonService) {
	  var vm = this;

	  var viewModel = {
	    "scriptBox": "뱅크웨어글로벌"
	  };

	  _.assign(vm, viewModel);
	  console.log(vm);
	  $scope.test = viewModel.scriptBox;
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

/***/ "c88fba985232c6f9ccd6":
/*!*************************************************!*\
  !*** ./views/template/searchSuzy.controller.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var md = __webpack_require__(/*! ../../app.module */ "d130ee326adc5f318b40");
	md.controller('views.searchBank.controller', __controller);

	function __controller($scope, $commonService) {
	  var vm = this;

	  var viewModel = {
	    "scriptBox": "suzy"
	  };

	  _.assign(vm, viewModel);
	  console.log(vm);
	  $scope.test = viewModel.scriptBox;
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

/***/ "bffeb31d8da8c2e09483":
/*!***************************************!*\
  !*** ./common/common.service.rest.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by parkbeomsoo on 2016. 5. 31..
	 */

	var md = __webpack_require__(/*! ../app.module */ "d130ee326adc5f318b40");

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
	        }
	    };
	}

/***/ }

/******/ });