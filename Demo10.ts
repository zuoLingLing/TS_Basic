//类的内部和外部都可以访问的变量  public变量（默认是public变量）

class Person{
    public name?:string;
    public sayHello(){
        return this.name+"say hello!"
    }
}
class Teacher extends Person{
    public sayBye(){
        console.log(this.name+"say hello!");
        
    }

}
const hong = new Teacher();
hong.name="小红";
hong.sayBye();
let juzi  = hong.sayHello()
console.log(hong.name,juzi);

//只能在类的内部调用，不允许在继承类的内部使用，也不允许在类的外部使用   private


class IT{
    private name="string";
    protected age=18;
    public sayIt(){
        console.log(this.name);
    }
}
const ling = new IT();
ling.sayIt();






//只能在类的内部，和类的继承中使用，不可以在类的外部使用   protected

class ITS extends IT{
    sayH(){
        console.log(this.age);
    }
}
const chao = new ITS();
chao.sayH();




