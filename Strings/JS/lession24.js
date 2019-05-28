window.onload = function(){
    var x = "Please locate where 'locate' ours";
    document.write(x.indexOf("locate"));
    document.write("<br/>"+x.lastIndexOf("locate"));
    document.write("<br/>"+x.lastIndexOf("John"));
    document.write("<br/>"+x.indexOf("locate", 15));
    document.write("<br/>"+x.search("locate"));
    
    var str = "Apple, Banana, Kiwi";
    document.write("<br/>"+str.slice(7, 13));
    document.write("<br/>"+str.slice(-12, -6));
    document.write("<br/>"+str.slice(7));
    document.write("<br/>"+str.slice(-12));
    document.write("<br/>"+str.substring(7, 13));
    document.write("<br/>"+str.substr(7, 6));

    var str1 = "Welcome to Microsoft!";
    var str2 = str1.replace("Microsoft", "W3schools");
    document.write("<br/>"+str2);
    
    document.write("<br/>"+str1.toUpperCase());
    document.write("<br/>"+str1.toLowerCase());
    
    var text1 = "Hello";
    var text2 = "World";
    var text3 = text1.concat(" ", text2);
    document.write("<br/>"+text3);
    document.write("<br/>"+text3.charAt(0));
    document.write("<br/>"+text3.charCodeAt(0));
    document.write("<br/>"+text3[0]);
    
    var arr = str.split(", ");
    document.write("<br/>"+arr[0]);
}