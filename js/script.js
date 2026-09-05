let text = document.getElementById("text")
let input = document.getElementById("input")
let btn = document.getElementById("btn")

input.addEventListener("keyup",()=>{
    if (input.value=="Delete") {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", true)
    }

    btn.addEventListener("click",()=>{
        text.style.visibility="hidden";
        input.value="";
    })
})