const moviesData = [
    {
        title: 'Lolita',
        rating: 9,
    }
];

updateTable(moviesData);

function updateTable(movies) {
    const moviesTable = document.getElementById('movies');
    for (const movie of movies) {
        const tableRow = document.createElement('tr');
    
        const tableDataName = document.createElement('td')
        tableDataName.textContent = movie.title;
        tableRow.appendChild(tableDataName);
    
        const tableDataRating = document.createElement('td')
        // tableDataRating.textContent = movie.rating;
        const star = '&#9733;';
        let starsString = '';
        for (let i = 0; i < movie.rating; i++) {
            starsString += star;
        }
        tableDataRating.innerHTML = starsString;
        tableRow.appendChild(tableDataRating);

        const tableDataYear = document.createElement('td')
        tableDataYear.textContent = movie.year;
        tableRow.appendChild(tableDataYear);
    
        moviesTable.appendChild(tableRow);
    }
}

function addMovie() {
    const title = document.getElementById('new-title');
    const rating = document.getElementById('new-rating');
    const year = document.getElementById('new-year');

    const movie = {
        title: title.value,
        rating: rating.value,
        year: year.value,

    }

    updateTable([movie]);
}
