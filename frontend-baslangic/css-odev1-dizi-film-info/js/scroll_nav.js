window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    const navBar = document.getElementById("header");
    const links = document.querySelectorAll("#header a");
    const myButton = document.getElementById("myBtn");
    if (document.documentElement.scrollTop>20) {
        myButton.style.display = "block";
        navBar.classList.add("colored-header");
        for (let i = 0; i < links.length; i++) {
            const element = links[i];
            element.classList.add('white-texts');
        }
    }
    else{
        myButton.style.display = "none";
        navBar.classList.remove("colored-header");
        for (let i = 0; i < links.length; i++) {
            const element = links[i];
            element.classList.remove('white-texts');
            
        }
    }
}