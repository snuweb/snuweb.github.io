document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        header.style.backgroundColor = header.style.backgroundColor === 'rgb(76, 175, 80)' ? '#555' : '#4CAF50';
    });

});

