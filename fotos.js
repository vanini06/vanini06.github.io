let item = 1
const max = 11;

function proxImagem(img) {
    fetch(`img/${img}.jpg`)
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);

            const proxIMG = document.createElement("img");
            proxIMG.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxIMG);
        })
}
window.onload = function () {
    for (; item < 11; item++) {
        proxImagem(item);
    }
}

window.onscroll = function () {

    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= altura) {
        proxImagem(item++ % max);
    }

}