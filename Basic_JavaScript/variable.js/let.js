// reassigned and is block-scoped.


function number(){
    let a = 10;
    console.log(a);
    a = 20;
    console.log(a);

    let count = 0;
    for(let i = 0; i < 5; i++){
        count++;
    // console.log(count[i]);
    }
    console.log(count);
}

number()
