function toggleMenu() {
    const links = document.getElementById("mobileLinks");
    links.classList.toggle('hidden');
}



const button = document.getElementById("mobileNavButton");
button.addEventListener('click', toggleMenu);