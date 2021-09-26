const btnList = document.querySelectorAll(".btn");

btnList.forEach( (btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("isOpen");

        let content = this.nextElementSibling;        
        if(content.style.height !== "") {
            content.style.height = "";
        }
        else {
            content.style.height = content.scrollHeight + 'px';
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
        }
    })
}