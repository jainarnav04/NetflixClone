const languageDropdown = document.getElementById("language-btn")
const languageDropdown1 = document.getElementById("language-btn1")
const faqListItem = document.querySelectorAll(".inner-container ul li")

languageDropdown.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show")
})
languageDropdown1.addEventListener("click", () => {
  document.getElementById("language-dropdown1").classList.toggle("show")
})

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show")
  })
})