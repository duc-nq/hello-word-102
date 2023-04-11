let name = prompt("Nhập tên của bạn:");
if (name) {
    alert("Xin chào " + name + "! Chào mừng bạn đã truy cập trang web này.");
} else {
    alert("Xin chào! Chào mừng bạn đã truy cập trang web này.");
}

let color = prompt("Nhập tên màu bạn muốn đổi background:");
if (color) {
    document.body.style.backgroundColor = color;
} else {
    document.body.style.backgroundColor = "white";  
}