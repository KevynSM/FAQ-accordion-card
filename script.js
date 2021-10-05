const btnList = document.querySelectorAll(".btn");

btnList.forEach( (btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("isOpen");

        if(this.getAttribute("aria-expanded") === "true") {
            this.setAttribute("aria-expanded", "false")
        }
        else {
            this.setAttribute("aria-expanded", "true")
        }

        let content = this.nextElementSibling;        
        if(content.style.height !== "") {
            content.style.height = "";
            content.style.visibility = "hidden";
        }
        else {
            content.style.height = content.scrollHeight + 'px';
            content.style.visibility = "visible";
        }
        hideAll(this);
    })
})

const hideAll = (notThis) => {
    btnList.forEach((btn) => {
        if(btn !== notThis) {
            btn.classList.remove("isOpen");
            let content = btn.nextElementSibling;
            content.style.height = "";
            content.style.visibility = "hidden";
        }
    })
}