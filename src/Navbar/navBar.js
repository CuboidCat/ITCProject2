function toggleMenu() {
    const links = document.getElementById("mobileLinks");
    links.classList.toggle('hidden');

    setTimeout(function(){
        for (const child of links.children) {
            if (!links.classList.contains('hidden')) {
                child.classList.replace("opacity-0", "opacity-100");
                console.log("Test");
            }
            else {
                child.classList.replace("opacity-100", "opacity-0")
            }
        }
    }, 0);

}



const button = document.getElementById("mobileNavButton");
button.addEventListener('click', toggleMenu);