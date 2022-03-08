const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");



const bestbtn = document.querySelector('#bestbtn');
bestbtn.addEventListener('click', function (e) {
    console.log(e.target);
});

bestbtn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });