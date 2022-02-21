let spanOnClick = document.querySelector("#liveToastBtn");
let inputTask = document.querySelector("#task");
let liveToastError = document.querySelector("#liveToastError");
let liveToastSuccess = document.querySelector("#liveToastSuccess");
let closeSuccessBtn = document.querySelector(".closeSuccess");
let closeErrorBtn = document.querySelector(".closeError");
closeSuccessBtn.addEventListener("click", toastCloseSuccess)
closeErrorBtn.addEventListener("click", toastCloseError)
document.addEventListener("click", function (e) {
    e.target.classList.contains("checked") ? e.target.classList.remove("checked") : e.target.classList.add("checked")
})

function newElement() {
    let inputString = inputTask.value
    if (inputString.trim() == "") {
        liveToastError.classList.remove("hide")
        liveToastError.classList.add("show")
    }
    else {
        liveToastSuccess.classList.remove("hide")
        liveToastSuccess.classList.add("show")
    }
}

function toastCloseError() {
    liveToastError.classList.remove("show")
    liveToastError.classList.add("hide")
}

function toastCloseSuccess() {
    liveToastSuccess.classList.remove("show")
    liveToastSuccess.classList.add("hide")
}
