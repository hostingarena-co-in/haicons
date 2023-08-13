let container = document.querySelector('.container');
let baseSize = 32;

let html = '<div class="card"><i class="{icon}"></i><span>{icon}</span></div>'

for (let x of arr) 
{
    card = html.replace('{icon}', x)
    card = card.replace('{icon}', x)
    container.innerHTML += card
}

document.querySelector('#plus').addEventListener('click', () => {
    baseSize += 1
    document.querySelector('.container').style.fontSize = baseSize + 'px'
})

document.querySelector('#minus').addEventListener('click', () => {
    baseSize -= 1
    document.querySelector('.container').style.fontSize = baseSize + 'px'
})