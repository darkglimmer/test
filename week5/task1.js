var num = [2,3,4,5,6,7];
num.pop();
num.unshift(1);
var squareNum = new Array();
var x;
for (x in num){
    squareNum[x]=num[x]*num[x];
}
document.write(squareNum + "<br>");
var oddNum = new Array();
for (x in squareNum){
    if(squareNum[x]%2==1)
        oddNum[oddNum.length]=squareNum[x];
}
document.write(oddNum + "<br>");
var product = 1;
for (x in oddNum){
    product *= oddNum[x];
}
document.write(product);