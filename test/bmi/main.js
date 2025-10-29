const caculateBMI = () => {
    let kg = document.getElementById("can").value;
    let m = document.getElementById("cao").value;

    kg = parseFloat(kg);
    m = parseFloat(m);

    if (isNaN(kg) || isNaN(m) || kg <= 0 || m <= 0) {
        alert("Vui lòng nhập đúng cân nặng và chiều cao (số dương).");
        return;
    }
    let bmi = kg / (m * m);
    document.getElementById("bmiI").value = bmi.toFixed(2);
    const img = document.getElementById("anh");
    if (bmi < 18.5) {
        img.src = "./thieu.png";
    } else if (bmi < 24.9) {
        img.src = "./binhthuong.png";
    } else if (bmi < 29.9) {
        img.src = "./thua.png";
    } else if (bmi < 39.9) {
        img.src = "./beocapdo1.png";
    } else {
        img.src = "./beonang.png";
    }
    img.classList.add("thunho");
};
