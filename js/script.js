// Input user name
function replaceName () {
    let name = prompt("Hallo, siapalah nama anda?", "")
    var boxNamaUser = document.getElementById("name")
    boxNamaUser.innerHTML = name  
}

// replaceName();
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
    var dataTanggalSekarang = new Date();
    console.log(dataKelamin,'dataKelamin')

    var boxNama = document.getElementById("dataNama");
    var boxTanggal = document.getElementById("dataTanggal");
    var boxKelamin = document.getElementById("dataKelamin");
    var boxPesan = document.getElementById("dataPesan")
    var boxTanggalSekarang = document.getElementById("dataTanggalSekarang")


    
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
    boxTanggalSekarang.innerHTML = dataTanggalSekarang
}
