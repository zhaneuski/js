// document.getElementById("addButton").onclick = function () {
 
//     document.getElementById("addForm").classList.toggle("hidden")

// }


document.getElementById("addButton").onclick = function () {
    // if (document.getElementById("addForm").classList.contains("hidden")) {
    //     // document.getElementById("addForm").classList.remove("hidden")
    //     this.innerText = "Убрать"
    // } else {
    //     // document.getElementById("addForm").classList.add("hidden")
    //     this.innerText = "Добавить"
    // }
    this.innerText = this.innerText === "Убрать"?"добавить":"Убрать"

    document.getElementById("addForm").classList.toggle("hidden")

}