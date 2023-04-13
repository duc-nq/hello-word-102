function getName() {
    let name;
    do {
        name = prompt("Vui lòng nhập tên của bạn:");
    } while (!name);
    alert("Xin chào " + name + "! Chào mừng bạn đã truy cập trang web này.");
}

function getBGColor() {
    let color;
    do {
        color = prompt("Nhập tên màu bạn muốn đổi background:");
    } while (!color);
    if (color) {
        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = "white";
    }
}

function getStarRating() {
    let rating = prompt('What star rating would you give, 1-5?');
    let starRating = parseInt(rating);

    for (let i = 1; i <= starRating; i++) {
        document.getElementById("star" + i).style.color = "yellow";
    }
}

getName();
getBGColor();
getStarRating();