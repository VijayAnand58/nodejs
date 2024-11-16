// let mypromise = new Promise(function(resolve,reject){
//     let a=10;
//     let b=0;
//     setTimeout(()=>{
//         if(a===b){
//             resolve(`numbers are equal`)
//         }
//         else{
//             reject(`numbers are not equal`)
// }},2000)
    
// })
// mypromise.then(function(result){
//     console.log(result)
// })
// mypromise.catch(function(err){
//     console.log(err)
// })
function placeorder(order){
    return new Promise(function(resolve,reject){
        if(order==='coffee'){
            resolve('coffee is taken')
        }
        else{reject(`order for ${order} is rejected`)}
    })
}
function do_order(item){
    return new Promise(function(resolve){
        resolve('item is ready to ship')
    })
}
// placeorder('tea').then(function(result){
//     console.log(result)
//     let order_processed=do_order(result)
//     return order_processed
// }).then(function(result){
//     console.log(result)
// }).catch(function(err){console.log(err)})
async function serveorder() {
    try {
        let orderplaced=await placeorder(`coffee`)
        console.log(orderplaced)
        let processedorder= await do_order(orderplaced)
        console.log(processedorder)
    } catch (error) {
        console.log(error)
    }
    
}
serveorder()