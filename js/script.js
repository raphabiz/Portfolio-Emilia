// function toggleMenu() {
//     var menu = document.querySelector('.menu');
//     var menuIcon = document.querySelector('.menu-icon');

//     menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
//     menuIcon.style.display = (menuIcon.style.display === 'block') ? 'none' : 'block';
// }


// const menuElement = document.querySelector(".menu-icon");

// menuElement.addEventListener("click", function() {
//     this.classList.toggle("cross");
// });

// console.log('hello');

document.getElementById("logo").addEventListener("click", function() {
    this.classList.toggle("rotate");
});

document.addEventListener('DOMContentLoaded', function () {

    const checkbox = document.getElementById('check');

    let menuList = document.querySelector('.nav-top ul');
    let navElt = document.querySelector('.nav-top');

    // Ajoutez un écouteur d'événements au changement de l'état de la checkbox
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menuList.classList.add('visible');

            menuList.style.display = 'block';
            navElt.style.backgroundColor = 'white'; // Utilisez 'white' pour définir la couleur de fond en blanc

        } else {
            // Si elle n'est pas cochée, masquez la liste ul
            menuList.style.display = 'none';
            navElt.style.backgroundColor = 'transparent'; // Utilisez 'transparent' pour rétablir la couleur de fond par défaut
            menuList.style.display('none');

        }
    });

    menuList.addEventListener('click', function () {
        // Ajoutez la classe visible pour l'effet de remontée
        menuList.classList.toggle('visible');
    });
});
