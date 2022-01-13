

const p = {
    then:(cb)=>{
        cb(42);
        throw Error("hahah");
    }
}

// Here, this is a thenable object, but not a real promise.
// Hence both functions inside then are executed.
// p.then(
//     (val)=>{
//         console.log(val);
//         console.log("return");
//     },
//     (err)=>{
//         console.log(err);
//     }
// )

// To solve above problem, we can use Promise.Resolve function
// It will wrap any thenable and unwrap to its thenable value
// Promise.Resolve returns a genuine promise.

Promise.resolve(p).then(
    (val)=>{
        console.log(val);
        console.log("return");
    },
    (err)=>{
        console.log(err);
    }
)