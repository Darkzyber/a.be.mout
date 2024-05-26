let centerDesktop = 40;
let elementsArray = document.querySelectorAll(".section");
    // console.log(elementsArray);
    window.addEventListener('scroll', fadeIn );
    function fadeIn() {
        for (var i = 0; i < elementsArray.length; i++) {
            var element = elementsArray[i]
            var View = element.getBoundingClientRect().top - window.innerHeight + centerDesktop;
            if (View < 0) {
                element.classList.add("Views");
            } else {
                element.classList.remove("Views");
            }
        }
    }
    fadeIn();

