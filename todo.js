let daftarTugas = JSON.parse(localStorage.getItem("tugas")) || [];

function simpanTugas() {
    localStorage.setItem("tugas", JSON.stringify(daftarTugas));
}

function tambahtugas() {
    let inputEl = document.getElementById("inputtugas");
    let teksTugas = inputEl.value;

    if (teksTugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    daftarTugas.push(teksTugas);
    simpanTugas();
    inputEl.value = "";

    tampilkanTugas();
}

function tampilkanTugas() {
    let listEl = document.getElementById("listtugas");
    listEl.innerHTML = "";

    for (let i = 0; i < daftarTugas.length; i++) {
        listEl.innerHTML += "<li>" + daftarTugas[i] + " <button onclick='hapusTugas(" + i + ")'>Hapus</button></li>";
    }
}

function hapusTugas(index) {
    daftarTugas.splice(index, 1);
    simpanTugas();
    tampilkanTugas();
}

tampilkanTugas();