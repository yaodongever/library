/**
 * Created by 刘艳东 on 19-5-16.
 */
var myinput = document.querySelecter("#myinput");
function invalidFun(e){
    var tag = e.target;
    console.info(tag.validity);
    if(tag.validity.valueMissing){
        myinput.setCustomValidity("请输入正确的读者证件号！");
    }
    else{
        myinput.setCustomValidity("输入错误！")
    }
}
