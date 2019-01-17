const API_KEY = "SOME KEY";

const Complex = {}; 

Complex.someFunction = ()=>{
    console.log('Does something with:' + API_KEY);
}

Complex.foo = () => {
    console.log('foo');
}

module.exports = Complex;