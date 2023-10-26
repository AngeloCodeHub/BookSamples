class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

showInfo() {
        return '(' + this.name + ', ' + this.age + ')';
    }
}

var obj = new Person('吳健銘', '35');
console.log('姓名: ',obj.name);
console.log('姓名: ',obj.age);