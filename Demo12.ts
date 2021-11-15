//抽象类  抽象方法  关键词abstract申明
abstract class Teachers{
    abstract skill():any
}

class BaseT extends Teachers{
    skill(){
        //实现不同的逻辑
        console.log("123");
        
    }
}

class MiddleT extends Teachers{
    skill(){
        return "456"
    }
}


const bt = new BaseT();
bt.skill();


const bm = new MiddleT();
console.log(bm.skill());

