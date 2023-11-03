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
    fetch("./allImg.json") // I sure do hope it doesnt get cache'd
        .then((response) => response.json())
        .then((json) => imgElement.src = json.key[randint(0, json.key.length)]);
    return;
}

function main() {
    const node = document.getElementById("base");
    replaceAltText(node);
    replaceImgSrc(node);
    return;
}