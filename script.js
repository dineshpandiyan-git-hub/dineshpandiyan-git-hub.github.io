function openImage(src){
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  popup.style.display = "flex";
  img.src = src;
}

function closeImage(){
  document.getElementById("popup").style.display = "none";
}
  document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

function toggleProject(){
    const details = document.getElementById("projectDetails");
    const btn = document.querySelector(".toggle-btn");
    if(details.style.display === "block"){
        details.style.display = "none";
        btn.innerHTML = "Show Details";
    }else{
        details.style.display = "block";
        btn.innerHTML = "Hide Details";
    }
}