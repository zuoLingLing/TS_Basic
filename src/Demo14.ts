//枚举enum  默认从0开始   可以定义从数字几开始  反查Status[1] 下标，跟我们的数组获取元素很像


enum Status{
    MTBF = 1,
    MTTR,
    MULL
}
function getStatus(status:any){
    if(status==Status.MTBF){
        return "哈哈哈"
    }else if(status==Status.MTTR){
        return "嘻嘻嘻"
    }else{
        return "啦啦啦"
    }
}
const recult = getStatus(Status.MTBF);
console.log(recult)

