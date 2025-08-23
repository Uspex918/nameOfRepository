const obj = {

    a: 5,
    b: [1,2],
    c: {
        key: "kluch",
        age: 35,
        obj: {
            one: 1
        }
    },
    d: function(){
        console.log("love");
    },
}

const arr = [{chislo: 35}, [1,2], function() {return 1}, [1, "two", true, {key: "value"}, [5,6]]];

console.log(obj);
console.log(arr);

