function verMapa() {

    const mapa = document.getElementById("mapa");
    mapa.href = '';
    mapa.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        mapa.href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}`;
        mapa.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function erro() {
        console.error('Localização não encontrada');
    }

    if (!navigator.geolocation) {
        alert('Este navegador não tem suporte a geolocalização');
    } else {
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    }

}