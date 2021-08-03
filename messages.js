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

btn.addEventListener('click', () => {
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
                  <span>7 Haz 2020 ÖS 11:10</span>
                </div>
              </div>
            </div>
  `

  wrapper.appendChild(newMessage);
  input.value = '';
})