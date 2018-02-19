/**
 * Created by sgjeon on 16. 4. 7..
 */

 // path module
const path = require("path");

const node_modulesPath = path.join(__dirname, 'node_modules');

const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');

const assetsPath = path.join(srcPath, 'assets');

const logPath = path.join(__dirname, 'log');

module.exports = function(){

    return {

        html: {
            title: 'AngularJS Project',
            template: path.join(srcPath, 'index.html')
        },
        js: {
            external: {
                pre: {
                    "jquery": {
                        globalVariable: '$',
                        absolutePath: node_modulesPath + '/jquery/dist/jquery.min.js'
                    },
                    "lodash": {
                        globalVariable: '_',
                        absolutePath: node_modulesPath + '/lodash/lodash.min.js'
                    },
                    "angular": {
                        globalVariable: 'angular',
                        absolutePath: node_modulesPath + '/angular/angular.min.js'
                    },
                    "angular-ui-router": {
                        globalVariable: '"ui.router"',
                        absolutePath: node_modulesPath + '/angular-ui-router/release/angular-ui-router.min.js'
                    },
                    "bx-ui-core": {
                        absolutePath: node_modulesPath + '/bx-ui-core/dist/bx-ui-core.min.js'
                    },
                    "bx-ui": {
                        absolutePath: node_modulesPath + '/bx-ui/dist/bx-ui.min.js'
                    },
                    "bx-ui-angular": {
                        globalVariable: '"bx-ui"',
                        absolutePath: node_modulesPath + '/bx-ui-angular/dist/bx-ui-angular.min.js'
                    },
                    "bx-i18n": {
                        absolutePath: node_modulesPath + '/bx-i18n/dist/bx-i18n.min.js'
                    }
                },
                post: {
                }
            },
            remote: {
                pre: {
                },
                post: {
                }
            },
            strictMode: true,
            sourceMap: false
        },
        css: {
            external: {
                "bx-theme-tsavorite.css": path.join(node_modulesPath, 'bx-ui-core/dist/assets/theme/bx-theme-tsavorite.css'),
                "bx-ui.min.css": path.join(node_modulesPath, 'bx-ui-core/dist/assets/css/bx-ui.min.css')
            },
            remote: {
            }
        },
        copy: {
            files: [
                {
                    cwd: srcPath,
                    expand: true,
                    dest: buildPath,
                    src: [
                        'app/common/stub/**/*.json'
                    ]
                },
                {
                    cwd: path.join(node_modulesPath),
                    expand: true,
                    dest: buildPath + '/assets',
                    src: [
                        'bx-ui-core/dist/assets/images/**/*'
                    ]
                }
            ]
        },
        loaders:{
            es2015: true
        },
        restore:{
            backup: false,
            logPath: logPath
        },
        userTask: {
            pre: {
                dev: [],
                prod: []
            },
            post: {
                dev: [],
                prod: []
            }
        },
        devServer: {
            host: 'localhost',
            port: 8088,
            proxyPatterns: []
        }
    };
};