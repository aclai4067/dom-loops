// Dino Array

console.log('🦖');

const dinosaurs = [
    {
        dinoType: 't-rex',
        description: 'Many teeth.',
        emoji: '🦖'
    },
    {
        dinoType: 'stegosaurus',
        description: 'Spiky back',
        emoji: '🐉'
    },
    {
        dinoType: 'velociraptor',
        description: 'Will eat your face',
        emoji: '🐊'
    }
];

const printArrayToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDino = (dinoArr) => {
    let domString = '';
    for (let i = 0; i < dinoArr.length; i++) {
        domString += `<div class="dinosaur">`
        domString += `<h1>${dinoArr[i].emoji}<h1>`
        domString += `<h3>${dinoArr[i].dinoType}</h3>`
        domString += `<p>${dinoArr[i].description}</p>`
        domString += `</div>`
    };
    printArrayToDom('dinoOutput', domString);
};

buildDino(dinosaurs);