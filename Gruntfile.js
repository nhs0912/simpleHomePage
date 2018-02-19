const path = require('path');
const _ = require('lodash');

module.exports = function(grunt) {

    const node_modulesPath = path.join(__dirname, 'node_modules');
    const bx_builderPath = path.join(node_modulesPath, 'bx-builder-angular');
    const toolsPath = path.join(bx_builderPath, 'tools');

	// build config
    var buildConfig = require(path.join(__dirname, 'build.config'));

    // build.config 파일 반환값이 함수 타입일 경우
    if (_.isFunction(buildConfig)) buildConfig = buildConfig();

    // tools config
    const toolsConfig = require(path.join(toolsPath, 'config'));

    // grunt config object
    const config = Object.assign(
	    {build: buildConfig},
	    {tools: toolsConfig}
    );

    // 사용자 config 파일을 grunt 설정으로 초기화시킨다.
    config && grunt.config.init({
        config: config
    });

    require('time-grunt')(grunt);

    // https://github.com/firstandthird/load-grunt-config
    // load-grunt-config module 을 통해, grunt 설정을 각 기능별로 분리시킨다.
    require('load-grunt-config')(grunt, {
        configPath: path.join(toolsPath, 'grunt/config'),
        jitGrunt: {

            // tasks 폴더 설정
            customTasksDir: path.join(toolsPath, 'grunt/tasks')
        },
        data: {
            // data passed into config.  Can use with <%= test %>
            // config(*.task.js) 파일 로드 후, 할당된 객체(config)를 grunt.config 하위 프로퍼티로 할당한다.
            // 이것을 통해, grunt template 상에서 이 syntax(<%= %>)로, 데이터를 가져올 수 있다.
            config: config
        }
    });
};