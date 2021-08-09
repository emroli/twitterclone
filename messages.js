// const xhr = new XMLHttpRequest();
// const container = document.getElementsByClassName('nav-container');

// xhr.onload = function() {
//   if(this.status = 200) {
//     container.innerHTML = xhr.responseText;
//   } else {
//     console.warn('nope');
//   }
// };


// xhr.open('get', 'index.html');
// xhr.send();


const input = document.querySelector('.footer-input');
const btn = document.querySelector('.footer-send');
const wrapper = document.querySelector('.private-messages-wrapper');


// Date template for messages
let currentdate = new Date();
currentdate.getDate()

let now = currentdate.getDate() + ' ' + currentdate.getMonth(+1) + ' ' + currentdate.getFullYear().toString().substr(-2) + ' ' + currentdate.getHours() +":"+ currentdate.getMinutes();
console.log(now);


// new message after click send button.
btn.addEventListener('click', () => {
  if(input.value === ''){
    input.value = ''
  } else {
     const newMessage = document.createElement('div');
  
  newMessage.innerHTML = `
  <div class="private-message">
              <div class="private-img">
                <img src="/dist/images/profile.jpg" alt="">
              </div>
              <div class="private-text-container">
                <div class="private-text">
                <span>${input.value}
                </span>
                </div>
                <div class="private-date">
                  <span>${now}</span>
                </div>
              </div>
            </div>
  `

  wrapper.appendChild(newMessage);
  input.value = '';
  }
})



