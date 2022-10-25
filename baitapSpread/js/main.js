let text = document.getElementsByTagName('h2')[0].innerText
let characters = [...text];
let hover = () => {
    let content = ''
    for (i of characters) {
        content += `<span>${i}</span>`
    }
    document.getElementsByTagName('h2')[0].innerHTML = content
}
hover()