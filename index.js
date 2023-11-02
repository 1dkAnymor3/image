const fs = require("fs")
var readJson = (path, cb) => {
    fs.readFile(require.resolve(path), (err, data) => {
        if (err) cb(err);
        else cb(null, JSON.parse(data));
    });
};
const imgData = readJson("./allImg.json", function(){})

function randint(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function replaceAltText(imgElement) {
    let randomAlt = [
        "looks like your browser wont let you see the image",
        "have you tried turning off and on your computer?",
        "no img 4 u :("
    ];
    imgElement.alt = randomAlt[randint(0, randomAlt.length)];
    return;
}

function replaceImgSrc(imgElement) {
    let randomImg = imgData.key;
    imgElement.src = randomImg[randint(0, randomImg.length)];
    return;
}

function main() {
    const node = document.getElementById("base");
    replaceAltText(node);
    replaceImgSrc(node);
    console.log(localStorage)
    return;
}