/**
 * Created by sgjeon on 2018. 1. 19..
 */

import md from '../../../app.module.js';

const component = {
    templateUrl: 'app/components/layouts/footer/footer.tpl.html',
    controller(){
    
        this.$onInit = () => {
            console.log('$onInit event');
        };

        this.$postLink = () => {
            console.log('$postLink event');
        };
    }
};

md.component('footer', component);

export default component;