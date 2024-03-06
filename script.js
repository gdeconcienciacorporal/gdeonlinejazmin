
// Crear dos nuevas instancias de HTMLVideoElement para cada sección
let Dia_1_video_1 = document.createElement("video");
let Dia_1_video_2 = document.createElement("video");
let Dia_1_video_3 = document.createElement("video");
let Dia_1_video_4 = document.createElement("video");
let Dia_1_video_5 = document.createElement("video");
let Dia_1_video_6 = document.createElement("video");
let Dia_1_video_7 = document.createElement("video");
let Dia_1_video_8 = document.createElement("video");

// Establecer las fuentes de video
Dia_1_video_1.src = "video1.mp4"; // ruta de su primer video
Dia_1_video_2.src = "video2.mp4"; // ruta de su segundo video
Dia_1_video_3.src = "video3.mp4"; // ruta de su tercer video
Dia_1_video_4.src = "video4.mp4"; // ruta de su cuarto video
Dia_1_video_5.src = "video5.mp4"; // ruta de su quinto video
Dia_1_video_6.src = "video6.mp4"; // ruta de su sexto video
Dia_1_video_7.src = "video7.mp4"; // ruta de su septimo video
Dia_1_video_8.src = "video8.mp4"; // ruta de su octavo video

// Establecer atributos de video
Dia_1_video_1.controls = true;
Dia_1_video_1.autoplay = false;
Dia_1_video_1.loop = false;

Dia_1_video_2.controls = true;
Dia_1_video_2.autoplay = false;
Dia_1_video_2.loop = false;

Dia_1_video_3.controls = true;
Dia_1_video_3.autoplay = false;
Dia_1_video_3.loop = false;

Dia_1_video_4.controls = true;
Dia_1_video_4.autoplay = false;
Dia_1_video_4.loop = false;

Dia_1_video_5.controls = true;
Dia_1_video_5.autoplay = false;
Dia_1_video_5.loop = false;

Dia_1_video_6.controls = true;
Dia_1_video_6.autoplay = false;
Dia_1_video_6.loop = false;

Dia_1_video_7.controls = true;
Dia_1_video_7.autoplay = false;
Dia_1_video_7.loop = false;

Dia_1_video_8.controls = true;
Dia_1_video_8.autoplay = false;
Dia_1_video_8.loop = false;

// Agregar los videos a cada sección
document.getElementById("Dia 1").appendChild(Dia_1_video_1);
document.getElementById("Dia 1").appendChild(Dia_1_video_2);
document.getElementById("Dia 1").appendChild(Dia_1_video_3);
document.getElementById("Dia 1").appendChild(Dia_1_video_4);
document.getElementById("Dia 1").appendChild(Dia_1_video_5);
document.getElementById("Dia 1").appendChild(Dia_1_video_6);
document.getElementById("Dia 1").appendChild(Dia_1_video_7);
document.getElementById("Dia 1").appendChild(Dia_1_video_8);

// Crear dos nuevas instancias de HTMLAudioElement para cada sección
let Dia_1_audio_1 = document.createElement("audio");
let Dia_1_audio_2 = document.createElement("audio");
let Dia_1_audio_3 = document.createElement("audio");
let Dia_1_audio_4 = document.createElement("audio");
let Dia_1_audio_5 = document.createElement("audio");
let Dia_1_audio_6 = document.createElement("audio");
let Dia_1_audio_7 = document.createElement("audio");
let Dia_1_audio_8 = document.createElement("audio");

// Establecer las fuentes de audio
Dia_1_audio_1.src = "Audio1.mp4"; // ruta de su primer audio
Dia_1_audio_2.src = "Audio2.mp4"; // ruta de su primer audio
Dia_1_audio_3.src = "Audio3.mp4"; // ruta de su primer audio
Dia_1_audio_4.src = "Audio4.mp4"; // ruta de su primer audio
Dia_1_audio_5.src = "Audio5.mp4"; // ruta de su primer audio
Dia_1_audio_6.src = "Audio6.mp4"; // ruta de su primer audio
Dia_1_audio_7.src = "Audio7.mp4"; // ruta de su primer audio
Dia_1_audio_8.src = "Audio8.mp4"; // ruta de su primer audio

// Establecer atributos de audio
Dia_1_audio_1.controls = true;
Dia_1_audio_1.autoplay = false;
Dia_1_audio_1.loop = false;

Dia_1_audio_2.controls = true;
Dia_1_audio_2.autoplay = false;
Dia_1_audio_2.loop = false;

Dia_1_audio_3.controls = true;
Dia_1_audio_3.autoplay = false;
Dia_1_audio_3.loop = false;

Dia_1_audio_4.controls = true;
Dia_1_audio_4.autoplay = false;
Dia_1_audio_4.loop = false;

Dia_1_audio_5.controls = true;
Dia_1_audio_5.autoplay = false;
Dia_1_audio_5.loop = false;

Dia_1_audio_6.controls = true;
Dia_1_audio_6.autoplay = false;
Dia_1_audio_6.loop = false;

Dia_1_audio_7.controls = true;
Dia_1_audio_7.autoplay = false;
Dia_1_audio_7.loop = false;

Dia_1_audio_8.controls = true;
Dia_1_audio_8.autoplay = false;
Dia_1_audio_8.loop = false;

// Agregar los audios a cada sección
document.getElementById("Dia 1").appendChild(Dia_1_audio_1);
document.getElementById("Dia 1").appendChild(Dia_1_audio_2);
document.getElementById("Dia 1").appendChild(Dia_1_audio_3);
document.getElementById("Dia 1").appendChild(Dia_1_audio_4);
document.getElementById("Dia 1").appendChild(Dia_1_audio_5);
document.getElementById("Dia 1").appendChild(Dia_1_audio_6);
document.getElementById("Dia 1").appendChild(Dia_1_audio_7);
document.getElementById("Dia 1").appendChild(Dia_1_audio_8);

// Obtener todos los videos de las columnas
const videos = document.querySelectorAll('.column-container video');

// Obtener el video grande y su contenedor
const videoGrande = document.getElementById('video-grande');
const videoGrandeContainer = document.querySelector('.video-grande-container');

// Función para cambiar el video grande
function cambiarVideo(event) {
    // Obtener la ruta del video clickeado
    const src = event.target.src;

    // Cambiar la fuente del video grande
    videoGrande.src = src;

    // Mostrar el contenedor del video grande
    videoGrandeContainer.style.display = 'block';
}

// Agregar un event listener a cada video de las columnas
videos.forEach(video => {
    video.addEventListener('click', cambiarVideo);
});

// Ocultar el video grande al hacer clic fuera de él
videoGrandeContainer.addEventListener('click', () => {
    videoGrandeContainer.style.display = 'none';
});
