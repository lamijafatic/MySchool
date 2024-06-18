const dodaj = document.querySelector(".icon"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
addBtn = popupBox.querySelector(".dugme");
let isUpdate = false, updateId;
const notes = JSON.parse(localStorage.getItem("notes") || "[]");


dodaj.addEventListener("click", () => {
    popupTitle.innerText = "Add a new Course";
    addBtn.innerText = "Add to Timetable";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
});
closeIcon.addEventListener("click", () => {
    isUpdate = false;
   /* titleTag.value = descTag.value = "";*/
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});


