function checkform(el){
    let user = el.user.value;
    let email = el.email.value;
    let pass = el.pass.value;
    let radio = el.radio.value;
    let error = '';
    if(user.length < 3)
        error = 'Smoll User Name';
    else if(!email.includes("@"))
        error = 'Gmail isn\'t @';
    else if(pass.length < 4)
        error = 'Smoll Password!!';
    else if(radio == null || radio == "")
        error = 'Gender!!!';
    if(error != ''){
        document.getElementById('error').innerText=error;
    return false;
}
document.getElementById('error').innerText='';
window.location.href='../home/index.html';

return false;}