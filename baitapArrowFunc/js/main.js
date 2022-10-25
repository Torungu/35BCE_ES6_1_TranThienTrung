const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let renderClr = () => {
    let content = ''
    for (i = 0; i < colorList.length; i++) {
        let color = colorList[i];
        content += `<button class="color-button ${color}" onclick="changeClr('${color}')"></button>`
    }
    document.getElementById('colorContainer').innerHTML = content;
    document.getElementById('colorContainer').getElementsByClassName('color-button')[0].classList.add('active');
}
renderClr()

findClr = (Clr) => {
    return index = colorList.indexOf(Clr)
}

changeClr = (Clr) => {
    for (i = 0; i < colorList.length; i++) {
        document.getElementById('colorContainer').getElementsByClassName('color-button')[i].classList.remove('active');
    }
    let index = findClr(Clr);
    document.getElementById('house').className = `house ${Clr}`;
    document.getElementsByClassName('color-button')[index].classList.add('active');
}