//formbutton
const form = document.getElementById('contact');

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telp = document.getElementById('telp').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!nama || !email || !telp || !gender) {
        alert("Harap Isi Semua Data!");
        return;
    }

    const dataUser = {
        nama: nama,
        email: email,
        telp: telp,
        gender: gender
    };

    localStorage.setItem(dataUser,JSON.stringify(dataUser));

    alert("Data Berhasil disimpan di localStorage!");
    form.reset();

}); 

//active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });
};

// Smooth Scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


