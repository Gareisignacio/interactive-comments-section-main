const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

const container = document.querySelector(".container");

for (let i = 0; i < data.comments.length; i++) {
  let allComments = document.createElement("div");
  container.appendChild(allComments);
  allComments.classList.add("all-comments");

  let card = document.createElement("div");
  card.classList.add("card");

  let currentUser = data.currentUser.username;

  if (data.comments[i].replies.length === 0) {
    allComments.appendChild(card);
    card.innerHTML = `
         <div class="score">
            <div class="plus-icon"></div>
            <p>${data.comments[i].score}</p>
            <div class="minus-icon" ></div>
         </div>
         <div class="info">
            <div class="upper">
            <div class="user">
               <div class="user-icon" style='background-image: url(${data.comments[i].user.image.png});'
               ></div>
               <p class="user-name">${data.comments[i].user.username}</p>
            </div>
            <div class="createdAt">${data.comments[i].createdAt}</div>
            <div class="options">
               <div class="reply">
                  <div class="reply-icon"></div>
                  <p>Reply</p>
               </div>
            </div>
            </div>
            <div class="lower">
            <div class="content">${data.comments[i].content}</div>
            </div>
         </div>
   `;
  } else {
    allComments.appendChild(card);

    for (let j = 0; j < data.comments[i].replies.length; j++) {
      let replyUser = data.comments[i].replies[j].user.username;

      let replies = document.createElement("div");
      replies.classList.add("card");
      replies.classList.add("replies");

      card.innerHTML = `
          <div class="score">
            <div class="plus-icon"></div>
            <p class='score-num'>${data.comments[i].score}</p>
            <div class="minus-icon" ></div>
          </div>
          <div class="info">
            <div class="upper">
            <div class="user">
               <div class="user-icon" style='background-image: url(${data.comments[i].user.image.png});'
               ></div>
               <p class="user-name">${data.comments[i].user.username}</p>
            </div>
            <div class="createdAt">${data.comments[i].createdAt}</div>
            <div class="options">
               <div class="reply">
                  <div class="reply-icon"></div>
                  <p>Reply</p>
               </div>
            </div>
            </div>
            <div class="lower">
            <div class="content">${data.comments[i].content}</div>
            </div>
         </div>
    `;
      if (currentUser === replyUser) {
        replies.innerHTML = `
              <div class="score">
                <div class="plus-icon"></div>
                <p class='score-num'>${data.comments[i].replies[j].score}</p>
                <div class="minus-icon"></div>
              </div>
              <div class="info">
                <div class="upper">
                  <div class="user">
                    <div class="user-icon" style='background-image: url(${data.comments[i].replies[j].user.image.png});'></div>
                    <p class="user-name">${data.comments[i].replies[j].user.username}</p>
                    <p class="you">you</p>
                    </div>
                  <div class="createdAt">${data.comments[i].replies[j].createdAt}</div>
                  <div class="options">
                    <div class="delete">
                      <div class="delete-icon"></div>
                      <p>Delete</p>
                    </div>
                    <div class="edit">
                      <div class="edit-icon"></div>
                      <p>Edit</p>
                    </div>
                  </div>
                  
                </div>
                <div class="lower">
                  <div class="content">
                  <span class='replying-to'>
                  @
                  ${data.comments[i].replies[j].replyingTo}</span>
                  <span>
                  ${data.comments[i].replies[j].content}
                  </span>
                  </div>
                </div>
              </div>`;
      } else {
        replies.innerHTML = `
              <div class="score">
                <div class="plus-icon"></div>
                <p class='score-num'>${data.comments[i].replies[j].score}</p>
                <div class="minus-icon"></div>
              </div>
              <div class="info">
                <div class="upper">
                  <div class="user">
                    <div class="user-icon" style='background-image: url(${data.comments[i].replies[j].user.image.png});'></div>
                    <p class="user-name">${data.comments[i].replies[j].user.username}</p>
                    <p class="you">you</p>
                    </div>
                  <div class="createdAt">${data.comments[i].replies[j].createdAt}</div>
                  <div class="options">
                    <div class="reply">
                        <div class="reply-icon"></div>
                        <p>Reply</p>
                    </div>
                  </div>
                  
                </div>
                <div class="lower">
                  <div class="content">
                  <span class='replying-to'>
                  @
                  ${data.comments[i].replies[j].replyingTo}</span>
                  <span>
                  ${data.comments[i].replies[j].content}
                  </span>
                  </div>
                </div>
              </div>
    `;
      }

      allComments.appendChild(replies);

      // plusBtn.addEventListener('click', ()=>{
      //   let scoreNum = document.querySelector('.score-num')
      //   alert(scoreNum.textContent);
      // })
    }
  }
}
const plusBtn = document.querySelectorAll(".plus-icon");

plusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let scoreNum = document.querySelector(".score-num");
    alert();
  });
});

// const plusBtn = document.querySelector('.plus-icon');
// const minusBtn = document.querySelector('.minus-icon');
// const replyBtn = document.querySelector('.reply-icon');
