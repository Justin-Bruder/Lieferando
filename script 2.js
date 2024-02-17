let posts = [
  {
    author: "NFL",
    image: "./img/post1.png",
    description: "Are we getting a Super Bowl preview?🏈🦾",
    location: "Baltimore",
    userComments: "<b>Tom_335:</b> nice😍", 
    comments: [''],
    logo: "./img/nfl.png",
    likes: 243443,
    likeImage: "./img/herzfalse.png",
    isLiked: false,
  },
  {
    author: "dcoffical",
    image: "./img/post2.png",
    description: "There’s more action lurking under the surface. Catch our special event broadcast December 19!",
    location: "",
    userComments: "<b>b3cc4xo: </b>Am i the only one who actually LOVES this Camouflage suit?🤗",
    comments: [''],
    logo: "./img/dc.png",
    likes: 3444,
    likeImage: "./img/herzfalse.png",
    isLiked: false,
  },
  {
    author: "atlantafalcons",
    image: "./img/post3.png",
    description: "He isn’t called Joker for nothing!",
    location: "Atlanta",
    userComments: "<b>mzdrean87: </b>How`d that turn out last week for him🤔",
    comments: [''],
    logo: "./img/falcons.png",
    likes: 86533,
    likeImage: "./img/herzfalse.png",
    isLiked: false,
  },
  {
  author: "broncos",
    image: "./img/post4.png",
    description: "Prepped for a prime-time showdown.",
    location: "Boston",
    userComments: "<b>novi03: </b>This should be a easy win let’s go boys go broncos🐎🟠",
    comments: [''],
    logo: "./img/broncos.png",
    likes: 865,
    likeImage: "./img/herzfalse.png",
    isLiked: false,
  },
];

function show() {

  load();

    document.getElementById('content').innerHTML ='';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('content').innerHTML += `
        <div class="line"></div>
        <div class="postContainer">
            <div class="postHead">
            <img class="logoAuthorHead" src="${post['logo']}"
            <div class="authorAndLocation">
            ${post['author']}<br>${post['location']}
            </div>
            <img class="postImg" src="${post['image']}">
            <div class="buttonBox">
            <div class="iconsLeft">
            <img onclick="addLike(${i})" class="buttons" src="./img/herz${post['isLiked']}.png">
            <img class="buttons" src="./img/sprechblase.png">
            <img class="buttons" src="./img/nachrichten.png">
            </div>
            <div class="iconRight">
            <img class="buttons" src="./img/lesezeichen.png">
            </div>
            </div>
            <div class="likeBox"> <b>Gefällt</b> ${post['likes']} <b>mal</b> </div>
            <div class="bottomPost">
            <div><b>${post['author']}</b><br>${post['description']}</div>
            <div>${post['userComments']}</div>
            <div class="commentBox" id="commentBox${i}"></div>
            <div class="postComment">
            <input id="input${i}" placeholder="Kommentieren..">
            <img class="commentButton" onclick="addComment(${i})" src="./img/commentIcon.png">
            </div>
            </div>
        </div>
        `;

        let commentContent = document.getElementById(`commentBox${i}`);
        
        for (let j = 0; j < post['comments'].length; j++) {
            const finalComment = post['comments'][j];
            commentContent.innerHTML += `<div>${finalComment}</div>`;

            
        }
    }
}


function addComment(index){
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push('<b>Justin: </b>' + input.value,);
    save();
    show();

    input.value='';
    
    
}

function save(){
  let postsAsString = JSON.stringify(posts);
  localStorage.setItem('posts', postsAsString);
  }


function load(){
  let postsAsString=localStorage.getItem('posts');
  if (postsAsString) {
    posts = JSON.parse(postsAsString)
  }
}

function addLike(i) {
  
    let isLiked = posts[i]['isLiked'];

    if (isLiked == false) {
      posts[i]['likes']++;
    }
    else{
      posts[i]['likes']--;

    }

    posts[i]['isLiked'] = !posts[i]['isLiked'];

    save();
    show();
}

//*function categorie() {

//  for (let i = 0; i < favorites.length; i++) {
  const favorite = favorites[i];

  document.getElementById('favorite').innerHTML += `
  <div class="dishContainer">
<div class="leftSideMenuContainer">
  <div>
    <h2 class="padding-left">${favorite["dish"]}</h2>
    <p class="padding-left">${favorite["description"]}</p>
  </div>
  <div class="price">${favorite["price"]} €</div>
</div>
<div class="menuImageContainer">
<img class="menuImage" src="${favorite["image"]}" />
</div>
<div>
  <button class="plus">+</button>
</div>
</div>`;
  
}
}