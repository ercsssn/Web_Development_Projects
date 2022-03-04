const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.setAttribute('style','color:red;');
container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.cssText = 'color:blue;';
container.appendChild(blue);

const myContent = document.createElement('div');
myContent.style.cssText = 'border: solid black; background-color: pink;';
container.appendChild(myContent);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
myContent.appendChild(h1);

const p = document.createElement('p');
p.textContent = "ME TOO!";
myContent.appendChild(p);




