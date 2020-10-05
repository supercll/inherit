function Father(name) {
    this.name = name;
}
Father.prototype.sayName = function () {
    console.log(this.name);
};

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}

Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;

Son.prototype.sayAge = function () {
    console.log(this.age);
};

let s = new Son("lc", 20);
console.log(s);
s.sayAge();
s.sayName();

let f = new Father("LC");
console.log(f.sayAge); // undefined
console.log(Son.prototype);
console.log(Father.prototype);
