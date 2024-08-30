let selectedState = null;

function selectState(state, buttonElement) {
    // Deselecciona el botón previamente seleccionado
    const previouslySelected = document.querySelector('.estado-btn.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Selecciona el nuevo botón
    buttonElement.classList.add('selected');
    selectedState = state;
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    if (currentPath.includes('reportar_estado.html')) {
        // Lógica para la página de reporte de estado
        document.getElementById('enviar').addEventListener('click', () => {
            const dni = document.getElementById('dni').value;
            const backendUrl = localStorage.getItem('backendUrl');

            if (!dni || !selectedState) {
                alert('Por favor complete todos los campos.');
                return;
            }

            console.log("Voy a conectar con "+backendUrl+"/estado");

            fetch(`${backendUrl}/estado`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ dni, estado: selectedState }),
                mode: 'cors'
            })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    console.log("Ok en then");
                    document.getElementById('alert').textContent = 'Estado enviado correctamente.';
                    document.getElementById('alert').className = 'alert success';
                    document.getElementById('dni').value = '';
                    selectedState = null;
                    const buttons = document.querySelectorAll('.estado-btn');
                    buttons.forEach(btn => btn.classList.remove('selected'));
                } else {
                    console.log("Error en then");
                    document.getElementById('alert').textContent = 'Error al enviar el estado.';
                    document.getElementById('alert').className = 'alert error';
                }
                document.getElementById('alert').style.display = 'block';
            })
            .catch(() => {
                console.log("CATCH");
                document.getElementById('alert').textContent = 'Error al enviar el estado.';
                document.getElementById('alert').className = 'alert error';
                document.getElementById('alert').style.display = 'block';
            });
        });
    } else if (currentPath.includes('reportar_averia.html')) {
        // Lógica para la página de reporte de avería
        document.getElementById('enviar').addEventListener('click', () => {
            const dni = document.getElementById('dni').value;
            const detalle = document.getElementById('detalle').value;
            const backendUrl = localStorage.getItem('backendUrl');

            if (!dni || !detalle) {
                alert('Por favor complete todos los campos.');
                return;
            }

            console.log("Voy a conectar con "+backendUrl+"/averia");

            fetch(`${backendUrl}/averia`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ dni, detalle }),
                mode: 'cors'
            })
            .then(response => {
                if (response.ok) {
                    console.log("Ok en then");
                    document.getElementById('alert').textContent = 'Avería enviada correctamente.';
                    document.getElementById('alert').className = 'alert success';
                    document.getElementById('dni').value = '';
                    document.getElementById('detalle').value = '';
                } else {
                    console.log("Error en then");
                    document.getElementById('alert').textContent = 'Error al enviar la avería.';
                    document.getElementById('alert').className = 'alert error';
                }
                document.getElementById('alert').style.display = 'block';
            })
            .catch(() => {
                console.log("Catch");
                document.getElementById('alert').textContent = 'Error al enviar la avería.';
                document.getElementById('alert').className = 'alert error';
                document.getElementById('alert').style.display = 'block';
            });
        });
    }
});
