const buttons = document.querySelectorAll('.buttons')[0]
const textArea = document.querySelectorAll('textarea')[0]
let count = 0;

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    let array = createSpan(e.target.value)
    if (e.keyCode == 13) {
        randomSelect();
    }
})

function createSpan(value) {
    const btns = value.split(',').filter(ele => ele.trim() !== '').map((ele) => ele.trim())

    buttons.innerHTML = ''

    btns.forEach(ele => {
        const btn = document.createElement('span')
        btn.classList.add('btn')
        btn.innerHTML = ele;
        buttons.append(btn)
    })
}

// here we are swelecting the choices randomly
let active = 1;
let random;
function randomSelect() {
    const span = document.querySelectorAll('span')
    setInterval(() => {
        if (active == 1) {
            random = Math.floor(Math.random() * span.length)
            span[random].classList.add('effect')
            setTimeout(() => {
                span[random].classList.remove('effect')
            }, 200);
        }
    }, 200);
    setTimeout(() => {
        active = 0;
    }, 5000);
}