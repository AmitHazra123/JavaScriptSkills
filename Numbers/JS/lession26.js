function add(){
    var a, b, c;
    a=Number(document.getElementsByName("num1")[0].value);
    b=Number(document.getElementsByName("num2")[0].value);
    c= a + b;
    document.getElementsByName("res")[0].value= c;
}