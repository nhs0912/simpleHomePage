/**
 * Created by parkbeomsoo on 2016. 5. 31..
 */

const md = require('../app.module');

md.service('$commonServiceConfig', __service);

function __service(){

    return {
        restful: {
            data: {
                url: 'app/common/stub/data.json',
                method: 'GET'
            }
        }
    }

    return {
        restful: {
            notebookData: {
                url: 'app/common/stub/notebook.json',
                method: 'GET'
            }
        }
    }
}

