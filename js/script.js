// Input user name
function replaceName () {
    let name = prompt("Hallo, siapalah nama anda?", "")
    var boxNamaUser = document.getElementById("name")
    boxNamaUser.innerHTML = name  
}

replaceName();

// Automatic Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


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


    if (dataNama === "") {
        alert('Please fill out the name')
    }  else if (dataTanggal === "") {
        alert('Please fill out the date')
    }   else if (dataKelamin === "") {
        alert('Please fill out the gender')
    }   else if (dataPesan === "") {
        alert('Please fill out the message')
    }   else {
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
   
}

