const tabs = {
    EBGDAE: [
        [
            "x",
            "x",
            "x",
            "x",
            "x",
            0,
        ],
        [
            "x",
            "x",
            "x",
            "x",
            "x",
            3,
        ],
        [
            "x",
            "x",
            "x",
            "x",
            "x",
            4,
        ],
        [
            "x",
            "x",
            "x",
            "x",
            2,
            "x",
        ],
    ]
}

const box = document.getElementById('box');

for (let i = 0; i < tabs.EBGDAE.length; i++) {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    box.appendChild(tab);
    for (let a = 0; a < tabs.EBGDAE[i].length; a++) {

        let string = document.createElement('div');
        string.classList.add('string');
        tab.appendChild(string);

        if (tabs.EBGDAE[i][a] != "x") {
            let number = document.createElement('div');
            number.classList.add('number');
            number.textContent = tabs.EBGDAE[i][a];
            string.appendChild(number);
        }
    }
}
