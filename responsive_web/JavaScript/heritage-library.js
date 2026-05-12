const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

function parseCard(rawString){
    const parts = rawString.split("|");
    let trimmedParts = [];
    for(let i = 0; i < parts.length; i++){
        trimmedParts.push(parts[i].trim());
    }
    const obj = {'title': trimmedParts[0]==="" ? "Unknown" : trimmedParts[0],
                 'author': trimmedParts[1]==="" ? "Unknown" : trimmedParts[1],
                    'year': trimmedParts[2] ? parseInt(trimmedParts[2]) : "Unknown", 
                    'location': trimmedParts[3]==="" ? "Unknown" : trimmedParts[3]
    };
    return obj;
}

let cardResult = parseCard(rawCatalogCards[2]);
console.log(cardResult);

function parseCatalog(rawCards){
    let catalog = [];
    for(let i = 0; i < rawCards.length; i++){
        catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
}

let catalog = parseCatalog(rawCatalogCards);
console.log(catalog.length);

function findByAuthor(catalog, author){
    const searchTerm = author.toLowerCase();
    const results = [];
    for(let i = 0; i < catalog.length; i++){
        if(catalog[i].author.toLowerCase().includes(searchTerm)){
            results.push(catalog[i]);
        }
    }
    return results;
}

let kingBooks = findByAuthor(catalog, "king");
console.log(kingBooks.length);

for(let i = 0; i < kingBooks.length; i++){
    console.log(`${kingBooks[i].title} (${kingBooks[i].year})`)
}

function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if(book.year === "Unknown"){
        if(!grouped["Unknown"]){
            grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey  = `${decade}s`;
    if(!grouped[decadeKey]){
        grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
  }
  return grouped;
}

let byDecade = groupByDecade(catalog);
console.log(byDecade);

function renderEntry(entry){
    const title = entry.title === "" ? "Unknown" : entry.title;
    const author = entry.author === "" ? "Unknown" : entry.author;
    const year = entry.year === "" ? "Unknown" : entry.year;
    const location = entry.location === "" ? "Unknown": entry.location;
    const message = `${"-".repeat(25)}
                    Title: ${title}
                    Author: ${author}
                    Year: ${year}
                    Location: ${location}
                    ${"-".repeat(25)}`;
    console.log(message);
    return message;
}

console.log(renderEntry(catalog[0]))

function validateEntry(entry){
    let isValid = true;
    if(entry.title === "Unknown" || !entry.title){
        isValid = false;
    }
    if(entry.author === "Unknown" || !entry.author){
        isValid = false;
    }
    if(entry.year === "Unknown" || !entry.year){
        isValid = false;
    }
    if(entry.location === "Unknown" || !entry.location){
        isValid = false;
    }
    return isValid;
}

console.log(validateEntry(catalog[0]));
console.log(validateEntry(catalog[16]));

function exportToJSON(catalog){
    return JSON.stringify(catalog, null, 2);
}

// the slice lets us preview the first 2 entries
console.log(exportToJSON(catalog.slice(0, 2)));

function exportToCSV(catalog){
    const header = "Title,Author,Year,Location";
    const rows = [];
    for(let i = 0; i < catalog.length; i++){
        const entry = catalog[i];
        rows.push(`"${entry.title}","${entry.author}","${entry.year}","${entry.location}"`);
    }
    let csv = header;
    for(let i = 0; i < rows.length; i++){
        csv = csv + "\n" + rows[i];
    }
    return csv;
}

console.log(exportToCSV(catalog));
console.log(catalog.length);
console.log(Object.keys(byDecade).length);

let oldestYear = Infinity;
let newestYear = 0;

for(let i = 0; i < catalog.length; i++){
    if(catalog[i].year !== "Unknown"){
        if(catalog[i].year < oldestYear){
            oldestYear = catalog[i].year;
            console.log(oldestYear);
        }
        if(catalog[i].year > newestYear){
            newestYear = catalog[i].year;
            console.log(newestYear);
        }
    }
}