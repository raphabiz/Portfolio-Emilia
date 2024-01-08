const buttonNavElts = document.querySelectorAll('.nav-bullet');

buttonNavElts.forEach(function(buttonNavElt, index) {
    buttonNavElt.addEventListener('click', function() {
        buttonNavElts.forEach(function(btn) {
            btn.style.backgroundColor = 'transparent';
            btn.style.transform = 'rotate(0deg)';
            btn.style.transition = 'background-color 0.3s, transform 0.5s';
        });

        this.style.backgroundColor = '#F64C72';
        this.style.transform = 'rotate(-45deg) scale(1.4)';
        this.style.transition = 'background-color 0.3s, transform 0.5s';
        sessionStorage.setItem(`button_${index}`, '#F64C72');
    });
});



console.log('hello');

// document.getElementById("logo").addEventListener("click", function() {
//     this.classList.toggle("rotate");
// });

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    let menuList = document.querySelector('.nav-top ul');
    let navElt = document.querySelector('.nav-top');

    //Enregistrement de l'état du menu dans le local storage
    const storedMenuState = JSON.parse(localStorage.getItem('menuState'));

    if (storedMenuState) {
        checkbox.checked = storedMenuState.checked;
        menuList.style.display = storedMenuState.checked ? 'block' : 'none';
        navElt.style.backgroundColor = storedMenuState.checked ? 'white' : 'transparent';

        buttonNavElts.forEach(function(buttonNavElt, index) {
            buttonNavElt.style.backgroundColor = storedMenuState.backgroundColors[index] || 'transparent';
        });
    }




    buttonNavElts.forEach(function(buttonNavElt, index) {
        const savedColor = sessionStorage.getItem('button_${index}');
        buttonNavElt.style.backgroundColor = savedColor || 'transparent';
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menuList.classList.add('visible');

            menuList.style.display = 'block';
            navElt.style.backgroundColor = 'white'; 

        } else {
            // Si elle n'est pas cochée, masquer la liste ul
            menuList.style.display = 'none';
            navElt.style.backgroundColor = 'transparent'; 
            menuList.style.display('none');

        }
    });

    menuList.addEventListener('click', function () {
       // ajout de la classe visible
        menuList.classList.toggle('visible');
    });
});





