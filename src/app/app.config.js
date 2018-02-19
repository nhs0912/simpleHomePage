/**
 * Created by sgjeon on 16. 4. 18..
 */

 const app = require('./app.module');

// route 설정
app.config(__config);

/* @ngInject */
function __config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    if (!$httpProvider.defaults.headers.get) $httpProvider.defaults.headers.get = {};

    // IE 9 브라우저에서 ajax 호출 시, 파일이 캐시되는 문제를 위한 설정(파일의 modify 시간을 변조한다)
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

    $stateProvider
    .state('500', {
        url: "/500",
        templateUrl: 'app/views/error/500.tpl.html'
    })
    .state('login', {
        url: "/login",
        templateUrl: 'app/views/login/login.tpl.html',
        controller : 'views.login.controller',
        controllerAs : 'vm'
    })
    .state('wrap', {
        templateUrl: 'app/views/wrap/wrap.tpl.html'
    })
    .state('wrap.board', {
        url: "/board",
        templateUrl: 'app/views/board/board.tpl.html',
        controller: 'views.board.controller',
        controllerAs: 'vm'
    })
    .state('template', {
       url:"/template",
       templateUrl:'app/views/template/template.tpl.html',
       controller:'views.template.controller',
       controllerAs: 'vm' //별칭 view model 이걸 하지 않으면 $Scope 사용하면 된다.
    })
    .state('searchBank', {
        url: "/searchBank",
        templateUrl: 'app/views/template/searchBank.tpl.html',
        controller: 'views.searchBank.controller',
        controllerAs: 'vm'
    })
    .state('searchSuzy', {
        url: "/searchSuzy",
        templateUrl: 'app/views/template/searchSuzy.tpl.html',
        controller: 'views.searchSuzy.controller',
        controllerAs: 'vm'
    })
    .state('Chaja', {
        url: "/Chaja",
        templateUrl: 'app/views/template/Chaja.tpl.html',
        controller: 'views.Chaja.controller',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/Chaja');
}

