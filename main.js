
document
    .getElementById('click-me')
    .addEventListener('click', function() {
        console.log();
        var el = document.getElementById('foo-p');
        el.innerText = 'Bar';
    });