window.onload = function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById('platform').textContent = 'Estás visitando desde un dispositivo móvil.';
    } else {
        document.getElementById('platform').textContent = 'Estás visitando desde un navegador web.';
    }
};
