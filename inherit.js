function Father(name) {
    this.name = name;
}
Father.prototype.sayName = function () {
    console.log(this.name);
};

function Son(name, age) {
    Father.call(Son, name);
    this.age = age;
}

Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;
