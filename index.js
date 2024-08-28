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

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.style.display = 'none';
        }
    });
});


const videos = [
    {
        thumbnail: 'img/img-video9.webp',
        image: 'img/canal1.jpeg',
        title: 'APRENDE A PROGRAMAR EN 10MIN',
        channel: 'Channel Name 1',
        views: '1M views'
    },
    {
        thumbnail: 'img/img-video4.webp',
        image: 'img/canal2.jpeg',
        title: 'Video Title 2',
        channel: 'Channel Name 2',
        views: '500K views'
    },
    {
        thumbnail: 'img/img-video9.webp',
        image: 'img/canal3.jpeg',
        title: 'Video Title 3',
        channel: 'Channel Name 3',
        views: '250K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        image: 'img/canal4.jpeg',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        image: 'img/canal5.jpeg',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        image: 'img/canal6.jpeg',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        image: 'img/IconoPersona.jpeg',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        image: 'img/canal1.jpeg',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        image: 'img/canal1.jpeg',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    }
];

const videoContainer = document.getElementById('video-container');

videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
        </div>
        <div class="video-info">
            <div class="video-image">${video.image}</div>
            
            <div class="texto-video">
                <div class="video-title">${video.title}</div>
                <div class="video-channel">${video.channel}</div>
                <div class="video-views">${video.views}</div>
            </div>
        </div>
    `;

    videoContainer.appendChild(videoCard);
});

document.getElementById('menu-icono').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
  
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
      content.style.marginLeft = '0';
    } else {
      content.style.marginLeft = '200px'; /* Mismo valor que el ancho del menú */
    }
  });