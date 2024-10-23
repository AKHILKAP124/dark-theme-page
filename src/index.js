const checkbox = document.getElementById('checkbox')
let body = document.querySelector('body')
let select = document.querySelectorAll(".select")

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    body.classList.add("theme")
    select.forEach(s=>{s.classList.add('slbgc')})
  } else {
    body.classList.remove("theme")
    select.forEach(s=>{s.classList.remove('slbgc')})
  }
})