// $("#logo").click(function(){
//   console.log('yo');
//   $("#header").load(" #header");
// })





closeBtn = document.querySelector('.close');
tweetBtn = document.querySelector('#tweetBtn');
wrapper = document.querySelector('.tweet-box-wrapper');
tweetBox = document.querySelector('#tweetBox');
modal = document.querySelector('.modal');


tweetBtn.addEventListener('click', () =>{
  openModal();
})


wrapper.addEventListener('click', () =>{
  closeModal();
}) 

function openModal() {
   wrapper.style.display = "block";
  tweetBox.style.display = "flex";
  tweetBox.classList.add('modal');
}

function closeModal(){
  wrapper.style.display = "none";
 tweetBox.style.display = "none";
tweetBox.classList.remove('modal');
}

closeBtn.addEventListener('click', () => {
closeModal();
})


// fade in function for new tweets

function fadeIn(el, time) {
  el.style.opacity = 0
  setTimeout(() => (el.style.opacity = 1), time);
}



// tweetSend function
function sendTweet(){
const tweetValue = document.getElementById('tweetValueLeft');
const articleWrapper = document.querySelector('.article-wrapper');
const btn = document.querySelector('.main-tweet');
  const newTweet = document.createElement('div');
  newTweet.classList.add('.article-profile');
  newTweet.style.transition = "1s";
  
  
newTweet.innerHTML = `
<div class="article-profile">
              <div class="tweet-icon">
                <img src="/dist/images/profile.jpg" alt="">
              </div>
              <div class="article-items">
                <div class="article-top-bar">
                  <div class="profile-name">KIM AMA YON</div>
                  <div class="profile-tag">@Dunkofkim</div>
                  <div class="time">13m</div>
                  <div class="article-icon">
                      <i class="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div class="article-text">
                  <p class="article-tweet">
                   ${tweetValue.value}
                  </p>
                </div>
                <div class="article-image">
                  <img src="/dist/images/sedat.jpg" alt="">
                </div>
                <div class="article-icons">
                  <div class="below-img">
                    <i class="far fa-comment"></i>
                    <p></p>
                  </div>

                  <div class="below-img">
                    <i class="fas fa-retweet"></i>
                    <p>3</p>
                  </div>
                  
                  <div class="below-img">
                    <i class="far fa-heart"></i>
                    <p>26</p>
                  </div>
                  
                  <div class="below-img">
                    <i class="fas fa-link"></i>
                    <p>19</p>
                  </div>
                  
                  
                </div>
`
articleWrapper.prepend(newTweet);

tweetValue.value = '';
closeModal();

fadeIn(newTweet,0)

}


// send tweet from left
const left_btn = document.querySelector('.main-tweet');



// send tweet

const articleWrapper = document.querySelector('.article-wrapper');
const btn = document.querySelector('.main-tweet');
const tweetValue = document.getElementById('tweetValue');



btn.addEventListener('click', () =>{
if (tweetValue.value === ""){
  btn.setAttribute("disabled", "");
} else {
  btn.removeAttribute("disabled", "");
  console.log('yoyo');
  const newTweet = document.createElement('div');
  newTweet.classList.add('.article-profile');
  newTweet.style.transition = "1s";
  
newTweet.innerHTML = `
<div class="article-profile">
              <div class="tweet-icon">
                <img src="/dist/images/profile.jpg" alt="">
              </div>
              <div class="article-items">
                <div class="article-top-bar">
                  <div class="profile-name">KIM AMA YON</div>
                  <div class="profile-tag">@Dunkofkim</div>
                  <div class="time">13m</div>
                  <div class="article-icon">
                      <i class="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div class="article-text">
                  <p class="article-tweet">
                   ${tweetValue.value}
                  </p>
                </div>
              
                <div class="article-icons">
                  <div class="below-img">
                    <i class="far fa-comment"></i>
                    <p></p>
                  </div>

                  <div class="below-img">
                    <i class="fas fa-retweet"></i>
                    <p>3</p>
                  </div>
                  
                  <div class="below-img">
                    <i class="far fa-heart"></i>
                    <p>26</p>
                  </div>
                  
                  <div class="below-img">
                    <i class="fas fa-link"></i>
                    <p>19</p>
                  </div>
                  
                  
                </div>
`
articleWrapper.prepend(newTweet);
tweetValue.value = '';
fadeIn(newTweet,0);
}

})





// new message after click send button.

// function sendMessage() {


// const input = document.querySelector('.footer-input');
// const btns = document.querySelector('.footer-send');
// const wrapper = document.querySelector('.private-messages-wrapper');

// // Date template for messages
// let currentdate = new Date();
// currentdate.getDate()

// let now = currentdate.getDate() + ' ' + currentdate.getMonth(+1) + ' ' + currentdate.getFullYear().toString().substr(-2) + ' ' + currentdate.getHours() +":"+ currentdate.getMinutes();
// console.log(now);

// btns.addEventListener('click', () => {
//   if(input.value === ''){
//     input.value = ''
//   } else {
//      const newMessage = document.createElement('div');
  
//   newMessage.innerHTML = `
//   <div class="private-message">
//               <div class="private-img">
//                 <img src="/dist/images/profile.jpg" alt="">
//               </div>
//               <div class="private-text-container">
//                 <div class="private-text">
//                 <span>${input.value}
//                 </span>
//                 </div>
//                 <div class="private-date">
//                   <span>${now}</span>
//                 </div>
//               </div>
//             </div>
//   `

//   wrapper.appendChild(newMessage);
//   input.value = '';
//   }
// })

// }




// DATE
// let currentdate = new Date();
// currentdate.getDate()

// let now = currentdate.getDate() + ' ' + currentdate.getMonth(+1) + ' ' + currentdate.getFullYear().toString().substr(-2) + ' ' + currentdate.getHours() +":"+ currentdate.getMinutes();
// let tweetMin = currentdate.getMinutes();


// increase new tweet date by one each minute















// tried to increase liked on per click


// const imageBelow = document.querySelectorAll('.below-img');
// // const cocuk = document.querySelectorAll('#cocuk')


// imageBelow.forEach(function(item){
//   item.addEventListener('click', function(e){
//     const cocuk = document.querySelectorAll('#cocuk').forEach(function(cocuk){
//        cocuk.innerText = Number(cocuk.innerText) +1;
        
//     })
    
//   })
// })





// AJAX TRY



