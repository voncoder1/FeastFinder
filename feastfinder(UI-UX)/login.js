document.getElementById('show-register').addEventListener('click', () => {
    document.querySelector('.container').classList.add('show-register');
});

document.getElementById('show-login').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('show-register');
});
