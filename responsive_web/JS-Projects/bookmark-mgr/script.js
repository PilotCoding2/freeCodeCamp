const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const addBookmarkBtn = document.getElementById('add-bookmark-button');
const categoryName = document.querySelector('.category-name');
const categoryDropdown = document.getElementById('category-dropdown');
const closeFormBtn = document.getElementById('close-form-button');
const addBookmarkBtnForm = document.getElementById('add-bookmark-button-form');
const bookmarkListSection = document.getElementById('bookmark-list-section');
const viewCategoryBtn = document.getElementById('view-category-button');
const categoryLists = document.getElementById('category-list');
const closeListBtn = document.getElementById('close-list-button');
const deleteBookmarkBtn = document.getElementById('delete-bookmark-button');
const formName = document.getElementById('name');
const formUrl = document.getElementById('url');

const getBookmarks = () => {
    try{
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if(!bookmarks || !Array.isArray(bookmarks) || !bookmarks.every((item) => typeof item === 'object' && 'name' in item && 'category' in item && 'url' in item) || bookmarks.length === 0) return [];
        return bookmarks;
    } catch {   
        return [];
    }
}

const displayOrCloseForm = () => {
    mainSection.classList.toggle('hidden');
    formSection.classList.toggle('hidden');
}

const displayOrCloseLists = () => {
    bookmarkListSection.classList.toggle('hidden');
    mainSection.classList.toggle('hidden');
}

const addNewBookmark = () => {
    const bookmarksArr = getBookmarks();
    bookmarksArr.push({
        name: formName.value,
        category: categoryDropdown.value,
        url: formUrl.value
    });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksArr));
    formName.value = '';
    formUrl.value = '';
}

const displayOrHideCategory = () => {
    bookmarkListSection.classList.toggle('hidden');
    mainSection.classList.toggle('hidden');
}

const categoryFoundOrNotFound = () => {
    const bookmarks = getBookmarks();
    const hasNoMatches = !bookmarks.find(bookmark => bookmark.category === categoryDropdown.value);
    if(hasNoMatches){
        categoryLists.innerHTML = "";
        categoryLists.innerHTML = '<p>No Bookmarks Found</p>';
    } else {
        categoryLists.innerHTML = "";
        const filteredBookmarks = bookmarks.filter(item => item.category === categoryDropdown.value);
        filteredBookmarks.forEach((bookmark) => {
            categoryLists.innerHTML += `
            <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="radio-btn">
            <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`
        });
    }
}

const deleteItem = () => {
    const bookmarks = getBookmarks();
    const selectedRadioBtns = document.querySelector('input[name="radio-btn"]:checked');
    const dataArrIndex = bookmarks.findIndex((item) => item.name === selectedRadioBtns.id && item.category === categoryDropdown.value);
    bookmarks.splice(dataArrIndex, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

addBookmarkBtn.addEventListener('click', () => {
    displayOrCloseForm();
    categoryName.innerText = categoryDropdown.value;
});

closeFormBtn.addEventListener('click', () => {
    displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener('click', (e) => {
    e.preventDefault();
    addNewBookmark();
    displayOrCloseForm();
});

viewCategoryBtn.addEventListener('click', () => {
    bookmarkListSection.classList.toggle('hidden');
    mainSection.classList.toggle('hidden');
    categoryFoundOrNotFound();
});

closeListBtn.addEventListener('click', () => {
    displayOrCloseLists();
});

deleteBookmarkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteItem();
    categoryFoundOrNotFound();
});