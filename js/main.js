let apiEndpoint = "https://tsswebsite-mailing.herokuapp.com/";

window.onscroll = function() {
  navFunction();
};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

function navFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let closeIcon = document.querySelector(".close-icon");
let openIcon = document.querySelector(".open-icon");

let tssVideo = document.querySelector("#tssvideo");
let playBtn = document.querySelector("#playBtn");

let contactForm = document.querySelector("#contactForm");

let customModal1 = document.querySelector("#customModalForm1");
let customModal2 = document.querySelector("#customModalForm2");
let customModal3 = document.querySelector("#customModalForm3");
let customModal4 = document.querySelector("#customModalForm4");

let ictModal1 = document.querySelector("#ictModalForm1");
let ictModal2 = document.querySelector("#ictModalForm2");
let ictModal3 = document.querySelector("#ictModalForm3");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = contactForm["name"];
  let email = contactForm["email"];
  let msg = contactForm["msg"];

  let subBtn = contactForm["submit"];
  subBtn.innerText = "Submitting...";
  subBtn.disabled = true;

  contact(name.value, email.value, msg.value, function(res) {
    if (res) {
      swal({
        title: "Mail Success!",
        text: "Thanks for contacting us!",
        icon: "success"
      });

      msg.value = "";
      email.value = "";
      name.value = "";

      subBtn.innerText = "Submit";
      subBtn.disabled = false;
    } else {
      swal({
        title: "Mail Error!",
        text: "Error occured while sending mail",
        icon: "error"
      });

      subBtn.innerText = "Submit";
      subBtn.disabled = false;
    }
  });
});

customModal1.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = customModal1["name"];
  let email = customModal1["email"];
  let msg = customModal1["msg"];

  let subBtn = customModal1["submit"];
  subBtn.innerText = "Submitting...";
  subBtn.disabled = true;

  sendMessage(name.value, email.value, msg.value, "Desktop apps", function(
    res
  ) {
    if (res) {
      swal({
        title: "Message Success!",
        text: "Thanks for contacting us!",
        icon: "success"
      });

      msg.value = "";
      email.value = "";
      name.value = "";

      subBtn.innerText = "Submit";
      subBtn.disabled = false;

      $(".modal-close").click();
      closeTypeModal(1);
      closeTypeModal(2);

    } else {

      swal({
        title: "Message Error!",
        text: "Error occured while sending message",
        icon: "error"
      });

      subBtn.innerText = "Submit";
      subBtn.disabled = false;
    }
  });
});

customModal2.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = customModal2["name"];
  let email = customModal2["email"];
  let msg = customModal2["msg"];

  let subBtn = customModal2["submit"];
  subBtn.innerText = "Submitting...";
  subBtn.disabled = true;

  sendMessage(name.value, email.value, msg.value, "Mobile apps", function(res) {
    if (res) {
      swal({
        title: "Message Success!",
        text: "Thanks for contacting us!",
        icon: "success"
      });

      msg.value = "";
      email.value = "";
      name.value = "";

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

      $('.modal-close').click();
      closeTypeModal(1);
      closeTypeModal(2);

    } else {

      swal({
        title: "Message Error!",
        text: "Error occured while sending message",
        icon: "error"
      });

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

    }
  });
});

customModal3.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = customModal3["name"];
  let email = customModal3["email"];
  let msg = customModal3["msg"];
  
  let subBtn = customModal3['submit'];
  subBtn.innerText = 'Submitting...';
  subBtn.disabled = true;

  sendMessage(name.value, email.value, msg.value, "Web apps", function(res) {
    if (res) {
      swal({
        title: "Message Success!",
        text: "Thanks for contacting us!",
        icon: "success"
      });

      msg.value = "";
      email.value = "";
      name.value = "";

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

      $('.modal-close').click();
      closeTypeModal(1);
      closeTypeModal(2);

    } else {

      swal({
        title: "Message Error!",
        text: "Error occured while sending message",
        icon: "error"
      });

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

    }
  });
});

customModal4.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = customModal4["name"];
  let email = customModal4["email"];
  let msg = customModal4["msg"];

  let subBtn = customModal4['submit'];
  subBtn.innerText = 'Submitting...';
  subBtn.disabled = true;

  sendMessage(
    name.value,
    email.value,
    msg.value,
    "Automation solutions",
    function(res) {
      if (res) {
        swal({
          title: "Message Success!",
          text: "Thanks for contacting us!",
          icon: "success"
        });

        msg.value = "";
        email.value = "";
        name.value = "";

        subBtn.innerText = 'Submit';
        subBtn.disabled = false;

        $('.modal-close').click();
        closeTypeModal(1);
        closeTypeModal(2);

      } else {

        swal({
          title: "Message Error!",
          text: "Error occured while sending message",
          icon: "error"
        });

        subBtn.innerText = 'Submit';
        subBtn.disabled = false;

      }
    }
  );
});

ictModal1.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = ictModal1["name"];
  let email = ictModal1["email"];
  let msg = ictModal1["msg"];

  let subBtn = ictModal1['submit'];
  subBtn.innerText = 'Submitting...';
  subBtn.disabled = true;

  sendMessage(name.value, email.value, msg.value, "Cloud", function(res) {
    if (res) {
      swal({
        title: "Message Success!",
        text: "Thanks for contacting us!",
        icon: "success"
      });

      msg.value = "";
      email.value = "";
      name.value = "";

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

      $('.modal-close').click();
      closeTypeModal(1);
      closeTypeModal(2);

    } else {

      swal({
        title: "Message Error!",
        text: "Error occured while sending message",
        icon: "error"
      });

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

    }
  });
});

ictModal2.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = ictModal2["name"];
  let email = ictModal2["email"];
  let msg = ictModal2["msg"];

  let subBtn = ictModal2['submit'];
  subBtn.innerText = 'Submitting...';
  subBtn.disabled = true;

  sendMessage(name.value, email.value, msg.value, "DevSecOps", function(res) {
    if (res) {
      swal({
        title: "Message Success!",
        text: "Thanks for contacting us!",
        icon: "success"
      });

      msg.value = "";
      email.value = "";
      name.value = "";

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

      $('.modal-close').click();
      closeTypeModal(1);
      closeTypeModal(2);

    } else {

      swal({
        title: "Message Error!",
        text: "Error occured while sending message",
        icon: "error"
      });

      subBtn.innerText = 'Submit';
      subBtn.disabled = false;

    }
  });
});

ictModal3.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = ictModal3["name"];
  let email = ictModal3["email"];
  let msg = ictModal3["msg"];

  let subBtn = ictModal3['submit'];
  subBtn.innerText = 'Submitting...';
  subBtn.disabled = true;

  sendMessage(
    name.value,
    email.value,
    msg.value,
    "Digital transformation",
    function(res) {
      if (res) {
        
        swal({
          title: "Message Success!",
          text: "Thanks for contacting us!",
          icon: "success"
        });

        msg.value = "";
        email.value = "";
        name.value = "";

        subBtn.innerText = 'Submit';
        subBtn.disabled = false;
        
        $('.modal-close').click();
        closeTypeModal(1);
        closeTypeModal(2);

      } else {

        swal({
          title: "Message Error!",
          text: "Error occured while sending message",
          icon: "error"
        });

        subBtn.innerText = 'Submit';
        subBtn.disabled = false;
      }
    }
  );
});

playBtn.addEventListener("click", function(e) {
  playVideo();
});

closeIcon.addEventListener("click", function(e) {
  closeMobileNav();
});

openIcon.addEventListener("click", function(e) {
  e.preventDefault();
  openMobileNav();
});

function displayTypeModal(type) {
  let modal1 = document.querySelector(".modal-up-1");
  let modal2 = document.querySelector(".modal-up-2");

  if (type === 1) {
    modal2.style.display = "none";
    modal1.style.display = "flex";

    modal1.scrollIntoView();
  } else if (type === 2) {
    modal1.style.display = "none";
    modal2.style.display = "flex";

    modal2.scrollIntoView();
  }
}

function closeTypeModal(type) {
  let modal1 = document.querySelector(".modal-up-1");
  let modal2 = document.querySelector(".modal-up-2");

  if (type === 1) {
    return (modal1.style.display = "none");
  } else if (type === 2) {
    return (modal2.style.display = "none");
  }
}

function openMobileNav() {
  let mobileNav = document.querySelector(".mobile-nav");
  mobileNav.style.display = "block";
  mobileNav.scrollIntoView();
}

function closeMobileNav() {
  let mobileNav = document.querySelector(".mobile-nav");
  mobileNav.style.display = "none";
}

function playVideo() {
  tssVideo.style.display = "block";

  tssVideo.play();

  if (tssVideo.requestFullscreen) {
    tssVideo.requestFullscreen();
  } else if (tssVideo.mozRequestFullScreen) {
    /* Firefox */
    tssVideo.mozRequestFullScreen();
  } else if (tssVideo.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    tssVideo.webkitRequestFullscreen();
  } else if (tssVideo.msRequestFullscreen) {
    /* IE/Edge */
    tssVideo.msRequestFullscreen();
  }
}

async function contact(name, email, msg, callback) {
  let body = {
    name,
    email,
    msg,
    medium: "local"
  };

  let response = await fetch(`${apiEndpoint}contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });

  if (response.status === 200) callback(true);
  else callback(false);
}

async function sendMessage(name, email, msg, type, callback) {
  let body = {
    name,
    email,
    msg,
    type,
    medium: "local"
  };

  let response = await fetch(`${apiEndpoint}send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });

  if (response.status === 200) callback(true);
  else callback(false);
}

// alert(window.innerWidth);
