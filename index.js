//accion al darle click al aavatar
document.addEventListener('DOMContentLoaded', function () {
    var avatar = document.getElementById('avatar');
    var dropdownMenu = document.getElementById('dropdown-menu');

    avatar.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!avatar.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});



//accion al aside, (mostrar/ocultar)
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var sidebar = document.getElementById('sidebar');

    sidebar.style.display = 'none';

    menuIcon.addEventListener('click', function () {
        if (sidebar.style.display === 'block' || sidebar.style.display === '') {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    });

});


const videos = [
    {
        thumbnail: 'img/img-video9.webp',
        gif: 'img/matrix_papa.mp4',
        perfil: 'img/canal1.jpeg',
        title: 'APRENDE A PROGRAMAR EN 10MIN',
        channel: 'Programador X',
        views: '2.3M views',
        time: '5 days ago'
    },
    {
        thumbnail: 'img/img-video4.webp',
        gif: 'img/hacking.mp4',
        perfil: 'img/canal2.jpeg',
        image: 'img/canal2.jpeg',
        title: 'Bootcamp intensivo de Java',
        channel: 'freeCodeCamp.org',
        views: '1.2M views',
        time: '1 week ago'
    },
    {
        thumbnail: 'img/img-video2.webp',
        gif: 'img/3D gif dubstep.mp4',
        perfil: 'img/canal4.jpeg',
        title: 'Lo que pasó con el cometa verde',
        channel: 'CNN en Español',
        views: '1.4M views',
        time: '6 hours ago'
    },
    {
        thumbnail: 'img/img-video3.webp',
        perfil: 'img/Airthings.jpg',
        title: 'Airthings Master 2023 | DÍA 5',
        channel: 'Airthings',
        views: '92k views',
        time: '5 hours ago'
    },
    {
        thumbnail: 'img/img-video5.webp',
        perfil: 'img/canal5.jpeg',
        title: 'Machupichu Road to 4K',
        channel: 'devinsupertramp',
        views: '9.5M views',
        time: '1 day ago'
    },
    {
        thumbnail: 'img/img-video6.webp',
        perfil: 'img/canal6.jpeg',
        title: 'Frapuccino (Café Frappé) - Fácil 2024',
        channel: 'LA COCINA DE LILA',
        views: '293k views',
        time: '3 months ago'
    },
    {
        thumbnail: 'img/img-video7.webp',
        perfil: 'img/canal3.jpeg',
        title: 'Todo lo que no viste en el detrás de escenas',
        channel: 'Canal23 en Español',
        views: '104K views',
        time: '2 weeks ago'
    },
    {
        thumbnail: 'img/img-video8.webp',
        perfil: 'img/Chessteacher.jpg',
        title: 'GANA el 99% de tus PARTIDAS con estas KEYS',
        channel: 'Chess Teacher',
        views: '239K views',
        time: '10 hours ago'
    },
    {
        thumbnail: 'img/image-fill1.webp',
        perfil: 'img/Fazt.jpg',
        title: 'Chat GPT vs Google Bard, La Guerra de las IA (Google vs Microsoft)',
        channel: 'Fazt',
        views: '41K views',
        time: '22 hours ago'
    }
];

const videoContainer = document.getElementById('video-container');

videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <video src="${video.gif}" alt="${video.title}" class="gif-image">
        </div>
        <div class="video-info">    
        <img src="${video.perfil}" alt="Descripción de la imagen" class="info-image">
            <div class="texto-video">
                <div class="video-title">${video.title}</div>
                <div class="video-channel">${video.channel}</div>
                <div class="video-views">${video.views}<span>•</span><div class="video-time">${video.time}</div></div>
            </div>
        </div>
    `;

    videoContainer.appendChild(videoCard);
});

document.getElementById('menu-icon').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var navegate = document.querySelector('.containerFilters');
    var videos = document.querySelector('.video-card');
    var videoContainer = document.getElementById('video-container');

    sidebar.classList.toggle('open');
    videoContainer.classList.toggle('shrink');
    videos.classList.toggle('shrink');
    navegate.classList.toggle('shrink');
});


document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    const video = thumbnail.querySelector('.gif-image');

    thumbnail.addEventListener('mouseenter', () => {
        video.currentTime = 0; // Reinicia el video/GIF al inicio
        video.play(); // Reproduce el video/GIF
    });

    thumbnail.addEventListener('mouseleave', () => {
        video.pause(); // Pausa el video/GIF cuando se sale el cursor
    });
});

