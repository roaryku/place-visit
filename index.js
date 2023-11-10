// const image = document.querySelector('#image');
// const button = document.querySelector('#submit');

// button.addEventListener('click', () => {
//     image.style.display = 'none'
// })

// const books = ["The women's heart", "Braking free", "Chasing the vines"];
// const check = books.includes('Braking free') ? 'It is here' : 'It is not here'
// console.log(check)

// const sentence = 'I love Mike';
// const word = sentence.startsWith('I');
// const end = sentence.endsWith('Bob')
// console.log(end)

const inputField = document.querySelector('#search');
const divs = document.querySelectorAll('.places');

inputField.addEventListener('keyup', (e) => {
    const word =  e.target.value.toLowerCase();
     
     divs.forEach(item => {
            item.querySelector('h3').textContent.toLowerCase().includes(word) 
            item.querySelector('p').textContent.toLowerCase().includes(word) 
            ? (item.style.display = 'block') 
            : (item.style.display = 'none')
            
     })
})

