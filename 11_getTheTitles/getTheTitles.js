const getTheTitles = function(books) {
    let titles = []
    for (let i = 0; i < books.length; i++) {
        titles[i] = books[i].title;
    }
    console.log(titles);
    return titles;
}
// Do not edit below this line
module.exports = getTheTitles;
