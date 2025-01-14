// Input user name
function replaceName () {
    let name = prompt("Hallo, siapalah nama anda?", "")
    var boxNamaUser = document.getElementById("name")
    boxNamaUser.innerHTML = name  
}

replaceName();

// Run change user name
document.getElementById('tombol-ganti').addEventListener("click", function(){ 
    replaceName();
})


// Submit contact form
function getValue () {
    var dataNama = document.forms[0].nama.value;
    var dataTanggal = document.forms[0].tanggal.value
    var dataKelamin = document.forms[0].kelamin.value
    var dataPesan = document.forms[0].pesan.value

    console.log(dataKelamin,'dataKelamin')

    const boxNama = document.getElementById("dataNama");
    const boxTanggal = document.getElementById("dataTanggal");
    const boxKelamin = document.getElementById("dataKelamin");
    const boxPesan = document.getElementById("dataPesan")

    boxNama.innerHTML = dataNama
    boxTanggal.innerHTML = dataTanggal

    if (dataKelamin === "perempuan") {
        boxKelamin.innerHTML = "Perempuan tulen"
    } else if (dataKelamin === "laki") {
        boxKelamin.innerHTML = "Laki-laki"
    } else {
        boxKelamin.innerHTML = ""
    }

    boxPesan.innerHTML = dataPesan
}
