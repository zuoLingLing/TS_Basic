//泛型   <>表示

//函数中如何使用泛型


function getCom<T>(first: T, second: number) {
    return `${first}${second}`
}

const result = getCom<string>("邮箱", 1)
console.log(result);


//泛型中数组的使用   泛型名称：T   T[]或者 Array<T>  代表数组中的所有元素都得是T这个类型的元素

function getArray<T>(array: T[]) {
    return array;
}
const result1 = getArray<string>(["1", "2"])   //这个就是必须传一个数组，并且数组的每一项都得是字符串
console.log(result1);

//多个泛型

function getMore<T, P>(first: T, second: P) {
    return `${first}${second}`
}

const result3 = getMore<string, number>("刘广超", 250)
console.log(result3);


//类中如何使用泛型

class Girls<T>{
    constructor(private girls: T[]) {}
    getGirl(index:number): T {
        return this.girls[index]
    }
}
const girlsc = new Girls <string>(["甄嬛","眉庄","华妃"]);
console.log(`今夜翻牌${girlsc.getGirl(1)}`);



//泛型继承接口
interface boyss{
    name:string
}

class Boys<T extends boyss>{
    constructor(private boy : T[]){}
    getBoy(index:number): string {
        return this.boy[index].name
    }
}
const boysc = new Boys([{name:"胡歌"},{name:"邓伦"}]);
console.log(`今夜翻牌${boysc.getBoy(1)}`);


//泛型约束
type anyType  = (string | number);

class Ceshi<T extends anyType>{
    constructor (private person : T){}
    getPerson() : T{
        return this.person
    }
}

const ceshi  =  new Ceshi("静姐");
const ceshi1 = new Ceshi(1314)
console.log(`爱${ceshi.getPerson()}${ceshi1.getPerson()}`)











