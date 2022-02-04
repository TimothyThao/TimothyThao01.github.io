//alert
function Alert()
{
    alert("Hello World");
}
//increase size of letter
function bigger()
{
    document.getElementById("textfield").style.fontSize = "24pt";
}
//----------------------------------------- fancy vs Betty
//when onclick: bolds up, changes to blue, and underline
function fancy()
{
    document.getElementById("betty").checked  = false;  //check
    document.getElementById("textfield").style.fontWeight = "bold";
    document.getElementById("textfield").style.color = "blue";
    document.getElementById("textfield").style.textDecoration = "underline";
}
//when onclick: decrease to 10pt, changes to black, normal, get rid of underline
function Boring()
{
    document.getElementById("Fancy").checked  = false; //check
    document.getElementById("textfield").style.fontSize = "10pt";
    document.getElementById("textfield").style.color = "black";
    document.getElementById("textfield").style.fontWeight = "normal";
    document.getElementById("textfield").style.textDecoration = "none";
}
//-------------------------------------changes all letters to upper case
function MooUpper()
{
    document.getElementById("moo-button");
    document.getElementById("textfield").style.textTransform = "uppercase";
    SubMoo();
}
//---------------------------------------------- adding -moo
function SubMoo()
{
    var str = document.getElementById("textfield").value;
    var parts = str.split(".");  // ["How", "are", "you?"]
    str = parts.join("-moo");  // "How_are_you?"
    document.getElementById("textfield").value = str + ".";

}