const btn_dropdown = document.getElementById("icon_dropdown")
console.log(btn_dropdown)


btn_dropdown.addEventListener("click", function (event) {
    var dropBlock = document.getElementById("dropdown_block")   

    dropBlock.style.display == 'none' ? dropBlock.style.display = 'block' : dropBlock.style.display = 'none'
})