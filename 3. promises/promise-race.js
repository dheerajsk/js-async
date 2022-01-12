// a utility for timing out a Promise 


const foo = ()=>{return new Promise((res, rej)=>{res("x")});}

function timeoutPromise(delay) { 
    return new Promise( function(resolve,reject)
    { setTimeout( 
        function(){ reject( "Timeout!" ); }, delay ); } ); }
        
        // setup a timeout for `foo()` 
        Promise.race( [ foo(), 
            // attempt `foo()` 
            timeoutPromise( 3000 ) 
            // give it 3 seconds 
        ] ) .then( function(x){ console.log("foo done"+x);
            // `foo(..)` fulfilled in time! 
        }, function(err){ 
            // either `foo()` rejected, or it just // didn't finish in time, so inspect // `err` to know which
         } );
