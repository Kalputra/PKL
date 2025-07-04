/* Selamat datang */
        window.onload = function() {
            if (!localStorage.getItem("sudahMasuk")) {
                alert("Selamat datang di website gw!");
                localStorage.setItem("sudahmasuk", true);
            }
        }

