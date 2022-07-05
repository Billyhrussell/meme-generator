let img = document.getElementsByTagName('img');
var form = document.getElementById('form');


form.addEventListener("submit", function(event){
  event.preventDefault();
  let meme = document.createElement("div");
  let toptxt = document.createElement("div");
  let bottomtxt= document.createElement("div");
  let img = document.createElement("img");
  let memecontainer = document.createElement("div");

  let btn = document.createElement("button");
  let removebtn = document.createElement("div");
  btn.setAttribute("type", "button");

  memecontainer.classList.add("memecontainer");
  memecontainer.appendChild(toptxt);
  memecontainer.appendChild(bottomtxt);
  memecontainer.appendChild(img);


  img.src = document.getElementById('imageLink').value;
  toptxt.classList.add("toptxt");
  toptxt.innerHTML = document.getElementById('topText').value;

  bottomtxt.classList.add("bottomtxt");
  bottomtxt.innerHTML = document.getElementById('bottomText').value;

  btn.innerHTML = "Delete Meme";
  removebtn.classList.add("removebtn");

  meme.classList.add("meme");
  meme.appendChild(memecontainer);
  removebtn.appendChild(btn);
  meme.appendChild(removebtn);

  let placement = document.getElementById('placement');
  placement.appendChild(meme);


  document.getElementById('imageLink').value = "";
  document.getElementById("topText").value = "";
  document.getElementById("bottomText").value = "";

  btn.addEventListener('click',function(e){
    meme.remove();
  });

});

