let user = prompt('You teacher', 'No');

if (user == null) {
    alert('You Debsil');
    console.log('You Debsil')
} else if (user == 'no' || user == 'No') {
    alert('No you not teacher');
    console.log('No you not teacher')
} else if (user == 'yes' || user == 'Yes') {
    alert('Yes you teacher');
    console.log('Yes you teacher');
} else {
    alert('What');
    console.log('none')
}
let times = 0;
let momi = setInterval(my_rou, 1000);
function my_rou(){
    document.getElementById("joji").innerHTML = "My Work: " + times;
    times++;
}

function stopfuck(){
    clearInterval(momi)
}
/*setTimeout(function(){
    alert('you watching sait 1000second');
}, 1000000)8*/