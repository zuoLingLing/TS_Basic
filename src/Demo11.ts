//类的构造函数  constructor  
class Myage {
    private _age:number;
    public readonly _name:string;   //readonly代表只读，不可修改
    constructor(age:number,name:string){
        this._age = age;
        this._name = name;
    }

    get age(){ //是个属性，不是方法,  调用就是X.age
        return this._age + 1
    }
    set ages(age:number){ //是个属性，不是方法  调用就是X.ages
        this._age = age
    }

    static sayXiXi(){
        console.log("嘻嘻嘻！");
        
    }

}
const zuol = new Myage(18,"风来了");
console.log(zuol.age);
zuol.ages=20;
console.log(zuol.age);
console.log(zuol._name);
//构造函数的get，set用于封装，set是赋值，get是返回值




//static  静态类   方法，属性可以直接用类名.访问

Myage.sayXiXi()

console.log(Myage.prototype);










