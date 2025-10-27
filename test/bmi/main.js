const caculateBMI = () => {
    let kg = document.getElementById("can").value;
    let m = document.getElementById("cao").value;
    
    let bmi = kg / (m*m);
    document.getElementById("bmiI").value = bmi;
    if(bmi< 18.5){
        document.getElementsByTagName("img")[0].src="./thieu.png" 
    } else if(bmi<24.9){
        document.getElementsByTagName("img")[0].src = "./binhthuong.png"; 
    } else if(bmi<29.9){
        document.getElementsByTagName("img")[0].src = "./thua.png"; 
    } else if(bmi<39.9){
        document.getElementsByTagName("img")[0].src = "./beocapdo1.png"; 
    } else{
        document.getElementsByTagName("img")[0].src = "./beonang.png"; 
    }
}