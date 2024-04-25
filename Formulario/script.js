const formulario = document.getElementById('formulario-cliente');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correoElectronico = document.getElementById('correo_electronico').value;
  const telefono = document.getElementById('telefono').value;

  if (nombre === '' || apellido === '' || correoElectronico === '') {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoElectronico)) {
    alert('Correo electrónico no válido.');
    return;
  }

  if (!/^[\d\+\-]+$/.test(telefono)) {
    alert('Número de teléfono no válido.');
    return;
  }


  alert('¡Datos enviados correctamente!');
  console.log('Datos del cliente:', {
    nombre,
    apellido,
    correoElectronico,
    telefono
  });
});
