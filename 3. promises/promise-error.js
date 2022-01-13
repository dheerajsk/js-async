var p = new Promise( function(resolve,reject){ 
    // reject("x");
    foo.bar(); 
    // `foo` is not defined, so error! 
    resolve( 42 ); // never gets here :(
         } ); 

         p.then( function fulfilled(){ 
             // never gets here :( 
                 })
                    .catch(err=>{console.log("catch error......")});
