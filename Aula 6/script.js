let opcoes = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function temGeolocalizacao() {
    if (navigator.geolocation) {
        alert('Este navegador tem suporte a geolocalização');
    } else {
        alert('Este navegador não tem suporte a geolocalização');
    }
}
//MOSTRA POSIÇÃO
function mostraPosicao() {
    navigator.geolocation.getCurrentPosition((position) => {
        alert(`Suas coordenadas são ${position.coords.latitude} lon: ${position.coords.longitude}`);
    });
}

//POSIÇÃO COM MAIS DETALHES
function mostraPosicaoMaisDetalhes() {
    navigator.geolocation.getCurrentPosition((position) => {
        alert(`Altitude: ${position.coords.altitude}, velocidade ${position.coords.speed} e precisão: ${position.coords.accuracy}`);
    });
}


//APRESENTA O ERRO
function error() {
    console.error(`Ocorreu um erro ao pegar as informações de localização`);
}

//MOSTAR NO MAPA
function mostraPosicaoNoMapa() {
    const mapLink = document.getElementById('maplink');
    mapLink.href = '';
    mapLink.textContent = '';

    function sucesso(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        mapLink.href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function erro() {
        console.error('Local não encontrado');
    }

    if (!navigator.geolocation) {
        alert('Este navegador não tem suporte a geolocalização');
    } else {
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    }
}