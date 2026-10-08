
function determineVideoSource() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    // Detectar si el usuario está en un dispositivo móvil
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Definir las URLs de los videos para diferentes condiciones
    let videoUrl;

    if (isMobile) {
        // Verificar la orientación del dispositivo
        const isLandscape = window.innerWidth > window.innerHeight;
        
        if (isLandscape) {
            // Orientación landscape en dispositivo móvil
            videoUrl = "https://ik.imagekit.io/ql9msrqiq/The%20Swap%20Group%20M%C3%A9xico/The%20Swap%20Group%20Mx%20x%20AYM.M4V/ik-video.mp4?updatedAt=1791431455888";
        } else {
            // Orientación portrait en dispositivo móvil
            videoUrl = "https://ik.imagekit.io/ql9msrqiq/The%20Swap%20Group%20M%C3%A9xico/The%20Swap%20Group%20Mx%20x%20AYM.M4V/ik-video.mp4?updatedAt=1791431455888";
        }
    } else {
        // Video para PC
        videoUrl = "https://ik.imagekit.io/ql9msrqiq/The%20Swap%20Group%20M%C3%A9xico/The%20Swap%20Group%20Mx%20x%20AYM.M4V/ik-video.mp4?updatedAt=1791431455888";
    }

    // Solo cambiar la fuente y recargar si es diferente de la actual
    if (videoSource.src !== videoUrl) {
        videoSource.src = videoUrl;
        videoPlayer.load(); // Cargar el nuevo video

        // Esperar a que el video esté listo para reproducir
        videoPlayer.oncanplay = function() {
            videoPlayer.play(); // Reproducir el nuevo video automáticamente
        };
    }
}

// Ejecutar la función al cargar la página
window.onload = determineVideoSource;

// Detectar cambios de orientación en dispositivos móviles
window.onresize = function() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        determineVideoSource();
    }
};

 