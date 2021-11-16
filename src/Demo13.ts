
//联合类型：两个及以上的类型


//类型保护   防止在开发中报错
interface Girl1{
    qunzi:boolean;
    say:()=>{}
}

interface Girl2{
    qunzi:boolean;
    sing:()=>{}
}

function getOne(anyone: Girl1 | Girl2){   //传入的参数可以是Girl1 也可以是Girl2
    //方法一：类型断言   关键字as  如下
    // if(anyone.qunzi){
    //     (anyone as Girl1).say()
    // }else{
    //     (anyone as Girl2).sing()
    // }


    //方法二：in 方法
    // if('say' in anyone){
    //     anyone.say()
    // }else{
    //     anyone.sing()
    // }
}


//方法三：typeof 判断类型
function add(num1:string|number, num2:string|number){
    if(typeof(num1)==="string" || typeof(num2)==="string"){
        return `${num1}${num2}`
    }
    return num1 + num2
}


//方法四： instanceof  用于类
class Numobj{
    count !:number;
}

function addobj(first: object | Numobj, second:object | Numobj){
    if(first instanceof Numobj && second instanceof Numobj){
        return first.count + second.count
    }
    return 0
}