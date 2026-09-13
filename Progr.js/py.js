let times = 0;
let momi = setInterval(my_rou, 1000);
function my_rou(){
    document.getElementById("joji").innerHTML = "Python.Time: " + times;
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
