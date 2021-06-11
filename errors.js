function doSomething(x) {
    try {
        return x() * 100;
    } catch(e) {
        return 100;
    }
}


const result = doSomething(5);

console.log(result);