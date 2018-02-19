/**
 * Created by parkbeomsoo on 2016. 5. 31..
 */

const md = require('../app.module');

md.service('$commonServiceRest', __service);

function __service($http, $q, $commonServiceConfig){

    return {
        getJSONData : function(){

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
    }
}

