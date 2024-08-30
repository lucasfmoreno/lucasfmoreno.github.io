document.getElementById('guardar-url').addEventListener('click', () => {
    const url = document.getElementById('backend-url').value;
    if (url) {
        localStorage.setItem('backendUrl', url);
        document.getElementById('alert').textContent = 'URL base guardada correctamente.';
        document.getElementById('alert').className = 'alert success';
        document.getElementById('alert').style.display = 'block';
    } else {
        document.getElementById('alert').textContent = 'Por favor ingrese una URL válida.';
        document.getElementById('alert').className = 'alert error';
        document.getElementById('alert').style.display = 'block';
    }
});
