function val(result){
    form.disp.value =  form.disp.value + result; 
}
function calculate(){
    if(form.disp.value == ""){
        alert("please enter numbers");
    }
    else {
        form.disp.value = eval(form.disp.value);
    }
}

var btn = form.veql;
btn.addEventListener('dblclick', function(){
    form.disp.value = "";
});