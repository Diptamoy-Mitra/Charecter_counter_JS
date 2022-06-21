let txt=document.querySelector('#txt');
let result=document.querySelector('.result');

txt.addEventListener("input", function(){
    result.innerText=txt.value.length;
    //console.log(txt.value.length);
})