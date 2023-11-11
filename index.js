const inputField = document.querySelector('#search');
const divs = document.querySelectorAll('.places');

inputField.addEventListener('keyup', (e) => {
    const word =  e.target.value.toLowerCase();
     
     divs.forEach(item => {
            item.querySelector('h3').textContent.toLowerCase().includes(word) ||
            item.querySelector('p').textContent.toLowerCase().includes(word) 
            ? (item.style.display = 'block') 
            : (item.style.display = 'none')
            
     })
})

