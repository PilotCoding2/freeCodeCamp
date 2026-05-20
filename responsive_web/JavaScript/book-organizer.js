let books = [{
    'title': "Antifragile",
    'authorName': "Nicholas Nassim Taleb",
    'releaseYear': 2012
},
{
    'title': "The Black Swan",
    'authorName': "Nicholas Nassim Taleb",
    'releaseYear': 2007
},
{
    'title': "Outliers",
    'authorName': "Malcolm Gladwell",
    'releaseYear': 2008
}]

function sortByYear(book1, book2){
    if(book1.releaseYear > book2.releaseYear){
        return 1;
    };
    if(book1.releaseYear < book2.releaseYear){
        return -1;
    };
    if(book1.releaseYear === book2.releaseYear){
        return 0;
    }
}

console.log(sortByYear(books[0], books[1]));

let filteredBooks = books.filter((book) => book.releaseYear > 2005);

filteredBooks.sort(sortByYear);

