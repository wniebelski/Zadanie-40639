document.querySelector('button').onclick = function () {
    document.getElementById('name').textContent = document.getElementById('one').value;
    document.getElementById('surname').textContent = document.getElementById('two').value;
    document.getElementById('phone').textContent = document.getElementById('three').value;
}