//accion al darle click al aavatar
document.addEventListener('DOMContentLoaded', function() {
    var avatar = document.getElementById('avatar');
    var dropdownMenu = document.getElementById('dropdown-menu');

    avatar.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!avatar.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});



//accion al aside, (mostrar/ocultar)
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var sidebar = document.getElementById('sidebar');

    sidebar.style.display = 'block';

    menuIcon.addEventListener('click', function() {
        if (sidebar.style.display === 'block' || sidebar.style.display === '') {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.style.display = 'none';
        }
    });
});
