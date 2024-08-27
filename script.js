document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Obtén los datos de los parámetros de la URL
    const fecharespuesta = urlParams.get('fecharespuesta') || 'No disponible';
    const patente = urlParams.get('patente') || 'No disponible';
    const empresa = urlParams.get('empresa') || 'No disponible';
    const rutempresa = urlParams.get('rutempresa') || 'No disponible';
    const nombre = urlParams.get('nombre') || 'No disponible';
    const apellidopaterno = urlParams.get('apellidopaterno') || 'No disponible';
    const apellidomaterno = urlParams.get('apellidomaterno') || 'No disponible';
    const rut = urlParams.get('rut') || 'No disponible';
    const contacto = urlParams.get('contacto') || 'No disponible';
    const email = urlParams.get('email') || 'No disponible';
    const lugar = urlParams.get('lugar') || 'No disponible';
    const fechainicio = urlParams.get('fechainicio') || 'No disponible';
    const fechatermino = urlParams.get('fechatermino') || 'No disponible';

    // Muestra los datos en la página
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = `
      <p><strong>Fecha de Respuesta:</strong> ${fecharespuesta}</p>
      <p><strong>Patente:</strong> ${patente}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Rut de Empresa:</strong> ${rutempresa}</p>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Apellido Paterno:</strong> ${apellidopaterno}</p>
      <p><strong>Apellido Materno:</strong> ${apellidomaterno}</p>
      <p><strong>RUT:</strong> ${rut}</p>
      <p><strong>Contacto:</strong> ${contacto}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Área donde se dirige:</strong> ${lugar}</p>
      <p><strong>Fecha de inicio:</strong> ${fechainicio}</p>
      <p><strong>Fecha de término:</strong> ${fechatermino}</p>
    `;

    // Genera la URL para el código QR
    const qrData = `fecharespuesta=${fecharespuesta}&patente=${patente}&empresa=${empresa}&nombre=${nombre}&rut=${rut}&contacto=${contacto}&fechainicio=${fechainicio}&fechatermino=${fechatermino}`;
   
    // Añade un parámetro único para evitar el caché del navegador
    const timestamp = new Date().getTime();
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}&timestamp=${timestamp}`;
   
    // Imprime la URL del código QR en la consola para verificarla
    console.log("Código QR generado:", qrCodeUrl);

    // Muestra el código QR en la página
    const qrCodeImg = document.getElementById('qr-code');
    qrCodeImg.src = qrCodeUrl;
});
