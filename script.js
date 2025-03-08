document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    filterData(searchTerm);
});

function filterData(searchTerm) {
    const sections = ['places', 'shops', 'roads', 'hotels'];
    sections.forEach(section => {
        const list = document.getElementById(`${section}-list`);
        list.innerHTML = ''; // Clear the list
        data[section].forEach(item => {
            if (item.name.toLowerCase().includes(searchTerm)) {
                const div = document.createElement('div');
                div.textContent = `${item.name} - ${item.description}`;
                list.appendChild(div);
            }
        });
    });
}

// Initial load
filterData('');
