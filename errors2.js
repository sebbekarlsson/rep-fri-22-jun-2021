function doSomething(x) {
    if (typeof x === "function") {
        return x() * 100;
    } else {
        return 100;
    }
}


const result = doSomething(5);

console.log(result);