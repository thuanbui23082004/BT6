const inputColor = document.querySelector(".input1");
const inputW = document.querySelector(".input2");
const inputH = document.querySelector(".input3");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
    const c = inputColor.value;
    const w = inputW.value;
    const h = inputH.value;
    create(w, h, c);
});

function create(w, h, c) {
    if (!c || !w || !h) {
        inputColor.style.border = "2px solid red";
        inputW.style.border = "2px solid red";
        inputH.style.border = "2px solid red";
        alert("Vui lòng nhập đầy đủ mã màu, chiều ngang và chiều dọc!");
        return;
    } else if (!/^#[0-9a-fA-F]{3}$|^#[0-9a-fA-F]{6}$/.test(c)) {
        inputColor.style.border = "2px solid red";
        alert("Nhập sai mã màu vui lòng nhập lại");
        return;
    } else if (!/^\d+px$/.test(h)) {
        inputH.style.border = "2px solid red";
        alert("Nhập sai kích thước, nhập lại");
        return;
    } else if (!/^\d+px$/.test(w)) {
        inputW.style.border = "2px solid red";
        alert("Nhập sai kích thước, nhập lại");
        return;
    } else {
        box.style.backgroundColor = c;
        box.style.width = w;
        box.style.height = h;
    }
}

box.addEventListener("click", function () {
    box.style.display = "none";
    document.querySelector(".input1").value = "";
    document.querySelector(".input2").value = "";
    document.querySelector(".input3").value = "";
});
