const xhr = new XMLHttpRequest();
const container = document.getElementsByClassName('nav-container');

xhr.onload = function() {
  if(this.status = 200) {
    container.innerHTML = xhr.responseText;
  } else {
    console.warn('nope');
  }
};


xhr.open('get', 'index.html');
xhr.send();