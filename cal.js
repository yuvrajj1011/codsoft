let res = document.getElementById('show')
function insertvalue(value){
    res.value += value;
}
function clerResult(){
    res.value ='';
}
function deleteResult(){
    res.value = res.value.slice(0, -1)
}
function calculate(){
    try{
        res.value = eval(res.value)
    }
    catch(error){
        res.result = "error";
    }
}