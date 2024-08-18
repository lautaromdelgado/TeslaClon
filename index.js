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

    sidebar.style.display = 'block';

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
        title: 'APRENDE A PROGRAMAR EN 10MIN',
        channel: 'Channel Name 1',
        views: '1M views'
    },
    {
        thumbnail: 'img/img-video4.webp',
        title: 'Video Title 2',
        channel: 'Channel Name 2',
        views: '500K views'
    },
    {
        thumbnail: 'img/img-video9.webp',
        title: 'Video Title 3',
        channel: 'Channel Name 3',
        views: '250K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
        title: 'Video Title 4',
        channel: 'Channel Name 4',
        views: '100K views'
    },
    {
        thumbnail: 'img/img-video8.webp',
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
            <div class="video-title">${video.title}</div>
            <div class="video-channel">${video.channel}</div>
            <div class="video-views">${video.views}</div>
        </div>
    `;

    videoContainer.appendChild(videoCard);
});