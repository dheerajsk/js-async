

const x = 3;
const y = 2;

function add(promiseX, promiseY){
    console.log("1");
    return Promise.all([promiseX, promiseY])
        .then((values)=>{
            console.log("2");
            return values[0]+values[1];
        }).catch(err=>{console.log(err)});
}


add(x,y).then(res=>{console.log(res)});