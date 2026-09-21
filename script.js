document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================== */

    const opening = document.getElementById("opening");
    const openButton = document.getElementById("openButton");

    const mainContent = document.getElementById("mainContent");

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");



    /* =========================================
       OPEN WEBSITE
    ========================================== */

    openButton.addEventListener("click", function () {

        document.body.classList.add("website-open");

        opening.classList.add("hide");

        /*
         * Musik dijalankan setelah user menekan
         * tombol sehingga lebih aman dari aturan
         * autoplay browser.
         */

        music.volume = 0.55;

        music.play()
            .then(function () {

                musicButton.classList.add("playing");

                musicButton.innerHTML = "♫";

                musicButton.setAttribute(
                    "aria-label",
                    "Matikan musik"
                );

            })
            .catch(function () {

                musicButton.classList.remove("playing");

            });


        /*
         * Setelah animasi opening selesai,
         * opening tidak lagi mengganggu halaman.
         */

        setTimeout(function () {

            opening.style.display = "none";

        }, 1000);

    });



    /* =========================================
       MUSIC
    ========================================== */

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {

                    musicButton.classList.add("playing");

                    musicButton.innerHTML = "♫";

                    musicButton.setAttribute(
                        "aria-label",
                        "Matikan musik"
                    );

                })
                .catch(function () {

                    console.log(
                        "Musik tidak dapat diputar."
                    );

                });

        } else {

            music.pause();

            musicButton.classList.remove("playing");

            musicButton.innerHTML = "♪";

            musicButton.setAttribute(
                "aria-label",
                "Putar musik"
            );

        }

    });



    /* =========================================
       GALLERY LIGHTBOX
    ========================================== */

    const zoomableImages =
        document.querySelectorAll(".zoomable");


    zoomableImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("show");

            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow = "hidden";

        });

    });



    /* =========================================
       CLOSE LIGHTBOX
    ========================================== */

    function closeImage() {

        lightbox.classList.remove("show");

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    closeLightbox.addEventListener(
        "click",
        closeImage
    );


    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                closeImage();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeImage();

            }

        }
    );

});