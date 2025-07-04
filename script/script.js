/* Selamat datang */
        window.onload = function() {
            if (!localStorage.getItem("sudahMasuk")) {
                alert("Selamat datang di website gw!");
                localStorage.setItem("sudahMasuk", true);
            }
        }

/* Slide Image*/
const images = [
    "",
    "",
    "",
    "",
    "",
];

let current = 0;

function slide(step) {
    current = (current + step + images.length) % images.length;

    document.getElementById("slider-image").src = images[current];
}
