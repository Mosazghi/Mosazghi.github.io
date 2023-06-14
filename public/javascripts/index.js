let coll = document.getElementsByClassName("semester-button");

for (const element of coll) {
  element.addEventListener("click", function () {
    this.classList.toggle("active")
    let content = this.nextElementSibling;
    content.style.maxHeight ? content.style.maxHeight = null 
                            : content.style.maxHeight = content.scrollHeight + "px" 
  });
}