const links = [
    '1-circle.svg',
    '2-circle.svg',
    '3-circle.svg',
    '4-circle.svg',
    '5-circle.svg',
    '6-circle.svg'
]
const colors = [
    '#FCCDBB',
    '#CDEDFC',
    '#CCCFF8',
    '#FFFBA4',
    '#CCF2B5',
    '#EACEF7',
]
const body = document.querySelector('body')
const cube = document.querySelector('.cube')
const randomCircle = document.querySelector('img')
const button = document.querySelector('button')
button.addEventListener('click', function () {
    const randomNumber = getRandomInt()
    console.log(randomNumber)
    randomCircle.classList.add('hidding')
    body.setAttribute("style", ("background: " + colors[getRandomInt()]))
    setTimeout(function () {
        randomCircle.classList.add('unhidding')
        cube.classList.add('rotating')
        randomCircle.classList.remove('hidding')
        randomCircle.setAttribute('src', links[randomNumber])
    }, 500)
    cube.classList.remove('rotating')
})

function getRandomInt() {
    return Math.floor(Math.random() * links.length);
}
