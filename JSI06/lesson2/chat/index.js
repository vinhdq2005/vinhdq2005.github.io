document.querySelector("#sw-darkmode").addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});


// check xem đã đăng nhập hay chưa
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(user.email);
    loadchat(user.email)
    // ...
  } else {
    // User is signed out
    sweetAlert("warning", "bạn cần đăng nhập")
    setTimeout(()=>{
      open("../signin/index.html","_self")
    }, 3000)
  }
});

let signOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


let loadchat = async (email) => {
  let result = await firebase.firestore().collection("chat").where("users", "array-contains", email).get();
  console.log(result);
  let data = getDataFromDocs(result.docs)
  console.log(data);
  
  renderChat(data[0], email)
  renderUserList(data)
};


let getDataFromDoc = (doc) => {
  let data = doc.data();
  data.id = doc.id;
  return data;
};

let getDataFromDocs = (docs) => {
  let result = [];
  for (let doc of docs) {
    let data = getDataFromDoc(doc);
    result.push(data);
  }
  return result;
};


let sweetAlert = (icon, message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: icon,
    title: message
  })
}



let renderChat = (data, ownerEmail) => {
  let chat = data.chat
  let dom = document.querySelector(".chat-panel")
  dom.innerHTML = ""

  for (let i = 0; i < chat.length; i++) {
    let html = `<div class="no-gutters">
    <div class="col-md-5 ${chat[i].email == ownerEmail ? "offset-md-7" : ""}">
      <div class="chat-bubble ${chat[i].email == ownerEmail ? "chat-bubble--blue chat-bubble--right" : "chat-bubble--left"} ">
      <p>${chat[i].email}</p>  
      ${chat[i].content}
      </div>
    </div>
  </div>`

  dom.innerHTML += html
  }
}

let renderUserList = (data) => {
  let dom = document.querySelector(".list-friend")
  dom.innerHTML = ""
  
  for (let i = 0; i < data.length; i++) {
    let html = `<div class="friend-drawer friend-drawer--onhover">
    <img src="${data[i].avatar}" alt="" class="profile-image">
    <div class="text">
      <h6>${data[i].name}</h6>
    </div>
    <span class="time text-muted small">
      ${data[i].timeStart}
    </span>
  </div>
  <hr>`

  dom.innerHTML += html
  }
}


