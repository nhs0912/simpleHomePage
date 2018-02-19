/**
 * Created by sgjeon on 2018. 1. 19..
 */

import md from '../../../app.module.js';

const component = {
    templateUrl: 'app/components/layouts/container/container.tpl.html',
    controller(){

        this.$onInit = () => {
            console.log('$onInit event');
        };

        this.$postLink = () => {
            console.log('$postLink event');
        };
    }
};

md.component('container', component);

export default component;