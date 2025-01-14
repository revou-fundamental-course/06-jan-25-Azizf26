function replaceName () {
    let name = prompt ("Hallo, siapalah nama anda?", "")
    document.getElementById("name").innerHTML = name    
}

// document.getElementById('tombol-ganti').addEventListener("click", function(){ 
//     replaceName ();
// })

// function validationForm(e) {
//     // e.preventDefault();
//     console.log(e, 'event form')


//     console.log(nameInput, 'nameInput')
//     // document.getElementById("dataNama").innerHTML = nameInput

//     // var formData = new FormData(form);
//     // // output as an object
//     // console.log(Object.fromEntries(formData));
// }

const buttonKirim = document.getElementById("kirim")

if (buttonKirim) {
    buttonKirim?.addEventListener("submit", function(e) {
        console.log('kepanggil')
        e.preventDefault();
        let nameInput = document.getElementsByName("nama")
    
        console.log(nameInput, 'nameInput value')
    
        // var formData = new FormData(form);
        // // output as an object
        // console.log(Object.fromEntries(formData));
    
    });

}