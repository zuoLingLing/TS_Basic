//接口
interface Girl {
    name:string;
    age:number;
    job:string;
    hobby?:string[]; //加个?  就是可有，可无  当想要拿实例对象中的这个值，需要如下最后一个打印，加个问号，可能会报错
    [propname:string]:any;  //这个是无论加多少个属性，任何类型属性
    say():string  //还可以写入方法并定义方法返回值为string类型
}

const ZLL ={
    name:"左玲玲",
    age:24,
    job:"IT",
    hobby:["爬山","追剧","打游戏"],
    sex:"女",
    food:["辣条","方便面","烤肠","油炸食品"],
    say:()=>{
        return "很荣幸加入贵公司！"
    }
}

const LGC ={
    name:"刘光超",
    age:26,
    job:"IT",
    say:()=>{
        return "加入贵校是我的荣幸！"
    },
    teach:()=>{
        return "Good afternoon, everyone ！"
    }
}

//在类的声明中，通过关键字extends来创建一个类的子类。
//一个类通过关键字implements声明自己使用一个或者多个接口
//如果类通过关键字implements声明自己使用一个或者多个接口,那么接口中所必须的属性，方法，类中必须给其属性赋值或者执行方法
class Easier implements Girl {
    name="刘光超";
    age=27;
    job="IT";
    say=()=>{
        return "123"
    }
}

//接口继承：extends   继承者拥有且必须拥有被继承者的一切属性，方法

interface Teacher extends Girl{
    subject?:string;
    teach():string
}


function getResume (ZLL:Girl){
    const {name,age,job,hobby,sex,food,say}=ZLL;
    console.log(name+"的年龄是"+age)
    console.log(name+"的工作是"+job)
    console.log(name+"的兴趣爱好是"+hobby?.join(","))
    console.log(name+"的性别是"+sex)
    console.log(name+"喜欢的食物是"+food?.join(","))
    console.log(name+"说"+say())
}

function getResumes (LGC:Teacher){
    const {name,age,job,say,teach}=LGC;
    console.log(name+"的年龄是"+age)
    console.log(name+"的工作是"+job)
    console.log(name+"说"+say())
    console.log(name+"说"+teach())
}

getResume(ZLL);
getResumes(LGC)