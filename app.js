fetch('listatareas.html')
    .then(res =>  res.text())
    .then(html => {
        document.getElementById('contenedor-lista').innerHTML = html;
    });