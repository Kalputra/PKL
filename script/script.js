// Selamat datang
        window.onload = function() {
            if (!localStorage.getItem("sudahMasuk")) {
                alert("Selamat datang di website testing pkl!");
                localStorage.setItem("sudahMasuk", true);
            }
        }

//formbutton
function formbutton() {

    alert("Okee data nya masuk");
}


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

//oke oke

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


//form
let users = JSON.parse(localStorage.getItem('users')) || [];
let editingIndex = null;

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telp = document.getElementById('telp').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';

    if (!nama || !email || !telp || !gender) {
        alert('Isi terlebih dahulu !');
        return;
    }

    const userData = { nama, email, telp, gender };

    if (editingIndex !== null) {
        users[editingIndex] = userData;
        editingIndex = null;
    } else {
        users.push(userData);
    }

    localStorage.setItem('users', JSON.stringify(users));
    this.reset();
    renderTable();
});

function renderTable() {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.nama}</td>
            <td>${user.email}</td>
            <td>${user.telp}</td>
            <td>${user.gender}</td>
        `;
        tbody.appendChild(row);
    });
}


renderTable();

