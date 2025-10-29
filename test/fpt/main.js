let banner = document.getElementById("banner1");
const doiVideo = () => {
    
    let video = document.getElementById("trailer1");
    banner.style.display = "none";
    video.style.display = "block";
}
let listFilm = [
    {
        id: 1,
        name: "Conan",
        banner:"./img/conan.jpeg",
        trailer: "https://youtu.be/u3cvoE36cp0?si=QsENeNQkCV1tK_jO",
        nation: "Nhật Bản",
    },
    {
        id: 2,
        name: "Mưa đỏ",
        banner:"./img/conan.jpeg",
        trailer: "https://youtu.be/u3cvoE36cp0?si=QsENeNQkCV1tK_jO",
        nation: "Việt Nam",
    },
]
const chooseFilm = (filmID) =>{
    let selectedFilm = listFilm.find(film => film.id === filmID);
    bannerElement.style.backgroundImage = "url" + "('" + selectedFilm.banner + "')";
    filmNationElement.innerText = selectedFilm.nation;
}
