const quote =  document.querySelector('#quote');
const author = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote');
const tags = document.querySelector('#tagsContainer');

function newQuoteGenerator() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.freeapi.app/api/v1/public/quotes/quote/random');
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const response = JSON.parse(this.responseText);
        quote.innerHTML = response.data.content;
        author.innerHTML = `- ${response.data.author}`; 
        tagsContainer.innerHTML = `<span id="tags">Tags: ${response.data.tags.join(', ')}</span>`;
    } else if (xhr.readyState === 4) {
        console.error('Error fetching quote:', xhr.statusText);
    }
}
xhr.send();
}

newQuoteButton.addEventListener('click', newQuoteGenerator);



