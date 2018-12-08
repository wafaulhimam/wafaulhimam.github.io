function cobacek() {
    var nilai = document.forms["form"]["nilai"].value;
    if (nilai >= 90) {document.getElementById("hasil").innerHTML = "Selamat !!!! Kamu dapat A"
}
else if (nilai >= 80) {document.getElementById("hasil").innerHTML = "Selamat !!!! Kamu dapat B"
}
else if (nilai >= 70) {document.getElementById("hasil").innerHTML = "Selamat !!!! Kamu dapat C"
}
else if (nilai >= 60) {document.getElementById("hasil").innerHTML = "Selamat !!!! Kamu dapat D"
}
else if (nilai < 60) {document.getElementById("hasil").innerHTML = "Kamu dapat nilai E, silakan belajar lebih giat lagi"
}

}

//Jika input nilai yang dimasukkan 
    //lebih dari sama dengan 85
    //tulis "Kamu dapat A"

//Jika input nilai yang dimasukkan 
    //lebih dari sama dengan 70
    //tulis "Kamu dapat B"

//Jika input nilai yang dimasukkan 
    //lebih dari sama dengan 60
    //tulis "Kamu dapat C"


//Jika input nilai yang dimasukkan 
    //lebih dari sama dengan 50
    //tulis "Kamu dapat D"


//Jika input nilai yang dimasukkan 
    //tidak ada yang sesuai diatas
    //tulis "Kamu tidak lulus, silahkan mengulang mata kuliah ini !!!"