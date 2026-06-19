// we define our variables
const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

// we define our function
const convertMarkdown = () => {
    const h1 = /^# (.*$)/gim;
    const h2 = /^## (.*$)/gim;
    const h3 = /^### (.*$)/gim;
    const bold = /(\*\*|\_\_)(.*?)\1/gim;
    const italic = /(\*|\_)(.*?)\1/gim;
    const quote = /^\> (.*$)/gim;
    const image = /!\[(.*?)\]\((.*?)\)/gim;
    const link = /\[(.*?)\]\((.*?)\)/gim
    const lineBreak = /\n$/gim

    const htmlText = markdownInput.value.replace(h3, '<h3>$1</h3>').replace(h2, '<h2>$1</h2>').replace(h1, '<h1>$1</h1>').replace(quote, '<blockquote>$1</blockquote>').replace(bold, '<strong>$2</strong>').replace(italic, '<em>$2</em>').replace(image, '<img alt="$1" src="$2">').replace(link, '<a href="$2">$1</a>');

    htmlOutput.innerText = htmlText;
    preview.innerHTML = htmlText;

    return htmlText;
}

markdownInput.addEventListener('input', () => {
    convertMarkdown();
});