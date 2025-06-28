document.getElementById("giftBox").onclick = () => {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("soniyoooScene").classList.remove("hidden");
  createHearts();
};

function createHearts() {
  const container = document.getElementById("heartsContainer");
  container.innerHTML = ""; // clear existing hearts
  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = "Assets/heart.png";
    img.classList.add("heart");
    img.onclick = () => handleHeartClick(img);
    container.appendChild(img);
  }
}

let heartsClicked = 0;

function handleHeartClick(img) {
  img.remove();
  heartsClicked++;
  if (heartsClicked === 5) {
    setTimeout(() => {
      alert("WAIT.... SOMEONE HAS BIRTHDAY TODAY!😉");
      setTimeout(() => {
        document.getElementById("soniyoooScene").classList.add("hidden");
        document.getElementById("birthdayScene").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("birthdayScene").classList.add("hidden");
          document.getElementById("giftQuestion").classList.remove("hidden");
        }, 4000);
      }, 3000);
    }, 100);
  }
}

function giftResponse(wantsGift) {
  document.getElementById("giftQuestion").classList.add("hidden");
  document.getElementById("giftResponse").classList.remove("hidden");
  const text = document.getElementById("responseText");
  const clickBtn = document.getElementById("clickHereBtn");

  if (!wantsGift) {
    text.innerText = "how sweet 🥰... issi baat pe ye lo 1 chummii 😘";
  } else {
    text.innerText = "pehle party do 😎";
    setTimeout(() => {
      text.innerText = "Acha chlo de hi deti hu apne babu ko gift ☺️";
      clickBtn.classList.remove("hidden");
    }, 2000);
  }
}

function showGift() {
  document.getElementById("giftResponse").classList.add("hidden");
  document.getElementById("finalScene").classList.remove("hidden");
}
