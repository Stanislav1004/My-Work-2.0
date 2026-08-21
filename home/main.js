/*let user = prompt('You teacher', 'No');

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
    console.log('none')}*/

let times = 0;
let momi = setInterval(my_rou, 1000);
function my_rou(){
    document.getElementById("joji").innerHTML = "My Work: " + times;
    times++;
}

function stopfuck(){
    clearInterval(momi)
}

const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('noscroll');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('noscroll');
});

