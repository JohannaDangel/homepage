window.addEventListener("load", init);


function init() {
    const PROFILE_PHOTO = document.getElementById("profile-photo"),
        PROFILE_TEXT = document.getElementById("profile-text"),
        HEADER = document.getElementById("header-scroll");
    var sticky = HEADER.offsetTop;

    document.getElementById("wrapper").addEventListener("scroll", function(e) {
        if (HEADER.getBoundingClientRect().top <= 0) {
            HEADER.classList.add("sticky-header");
        } else {
            HEADER.classList.remove("sticky-header");
        }
    });

    window.addEventListener('resize', setLayoutClasses);
    setLayoutClasses();

    function setLayoutClasses() {
        resetLayoutClasses([PROFILE_PHOTO, PROFILE_TEXT]);
        let width = document.documentElement.clientWidth,
            colWidthPhoto = 2,
            colWidthText = 10;
        if (width < 770) {
            colWidthPhoto = 12;
            colWidthText = 12;
        } 
        PROFILE_PHOTO.classList.add("col-" + colWidthPhoto);
        PROFILE_TEXT.classList.add("col-" + colWidthText);
    }


    function resetLayoutClasses(elementsArray) {
        for (let el of elementsArray) {
            for (let i = 1; i <= 12; i++) {
                el.classList.remove("col-" + i);
                el.classList.remove("col-lg-" + i);
                el.classList.remove("col-sm-" + i);
            }
        }
    }
}