function addBookmark() {
    const name = document.getElementById('bookmarkName').value;
    const url = document.getElementById('bookmarkURL').value;

    if (!isValidURL(url)) {
        
        alert('https://');
        return;
    }

    const existingBookmarks = document.querySelectorAll('#bookmarksTable tbody tr');
    for (const bookmark of existingBookmarks) {
        if (bookmark.cells[0].textContent === name) {
            alert('name found');
            return;
        }
    }

    const tableBody = document.getElementById('bookmarksTable').querySelector('tbody');
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = url;

    const actionsCell = newRow.insertCell(2);
    const deleteButton = document.createElement('button');
    deleteButton.textContent ='delete';
    deleteButton.onclick = () => {
        newRow.remove();
    };
    const visitButton = document.createElement('button');
    visitButton.textContent = 'visit';
    visitButton.onclick = () => {
        window.open(url, '_blank');
    };
    actionsCell.appendChild(deleteButton);
    actionsCell.appendChild(visitButton);

    document.getElementById('bookmarkName').value = '';
    document.getElementById('bookmarkURL').value = '';
}

function isValidURL(url) {
    return url.startsWith('https://');
}