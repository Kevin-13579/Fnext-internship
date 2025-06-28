let display=document.getElementById("display");
function toDisplay(value)
{
    display.value+=value;
}
function clearDisplay()
{
    display.value="";
}
function calculate()
{
    display.value=eval(display.value);
    setTimeout(()=>{
        display.value="";
    },3000);
}