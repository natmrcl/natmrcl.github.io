function validasi(){
    var nama = document.getElementById("nama").value;
    var asal = document.getElementById("asal").value;
    var alamat = document.getElementById("alamat").value;
    var kodepos = document.getElementById("kodepos").value;
    var provinsi = document.getElementById("provinsi").value;
    var telp = document.getElementById("telp").value;
    var email = document.getElementById("email").value;
    var sponsor = document.getElementById("sponsor").value;
    var namaper = document.getElementById("namaper").value;
    var alamatper = document.getElementById("alamatper").value;
    var kontak = document.getElementById("kontak").value;
    var telpper = document.getElementById("telpper").value;
    var emailper = document.getElementById("emailper").value;

    if(nama != "" && asal != "" && alamat != "" && kodepos != "" && provinsi != "" && telp != ""
    && email != "" && sponsor != "" && namaper != "" && alamatper != "" && kontak != "" 
    && telpper && emailper != "" != ""){
        alert("Pendaftaran Berhasil")
    } else {
        alert("Anda harus mengisi data dengan lengkap!")
    }
}


