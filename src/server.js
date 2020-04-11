import {createApp} from './main.js';

/**
 * @params context node环境下request的url
 */
export default context=>{
    return new Promise((resolve,reject)=>{
        const {app,router} = createApp();
        router.push(context.url);
        router.onReady(()=>{
            const matchedComponents = router.getMatchedComponents();
            if(!matchedComponents){
                return reject({code:404,})
            }
        });
        resolve(app);
    })
}