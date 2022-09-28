async function dataProvinsi() {
    const response = await fetch("https://ibnux.github.io/data-indonesia/provinsi.json")
    const data = await response.json()
    return data
}

async function dataKabupaten(provinceId) {
    const response = await fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${provinceId}.json`)
    const data = await response.json()
    return data
}

async function dataKecamatan(regencyId) {
    const response = await fetch(`https://ibnux.github.io/data-indonesia/kecamatan/${regencyId}.json`)
    const data = await response.json()
    return data
}

async function dataResult(key){
    const response = await fetch(`https://kodepos.vercel.app/search?q=${key}`);
    const data = await response.json()
    return data;
}

const selectedProvinsi = document.getElementById("provinsi")
const selectedKabupaten = document.getElementById("kabupaten")
const selectedKecamatan = document.getElementById("kecamatan")
const resultElement = document.getElementById("container")

async function Provinsi(){
    const option = await dataProvinsi()
    option.forEach( e => {
        const addOption = document.createElement("option")
        addOption.value = e.id, addOption.text = e.nama
        selectedProvinsi.appendChild(addOption)
    });
}

async function Kabupaten(){
    selectedKabupaten.innerHTML = ""
    const option = await dataKabupaten(selectedProvinsi.value)
    const options = document.createElement("option")
    options.text = "Pilih Kabupaten/Kota"
    selectedKabupaten.appendChild(options)
    option.forEach( e => {
        const addOption = document.createElement("option")
        addOption.value = e.id, addOption.text = e.nama
        selectedKabupaten.appendChild(addOption)
    });
}

async function Kecamatan(){
    selectedKecamatan.innerHTML = ""
    const option = await dataKecamatan(selectedKabupaten.value)
    const options = document.createElement("option")
    options.text = "Pilih Kecamatan"
    selectedKecamatan.appendChild(options)
    option.forEach( e => {
        const addOption = document.createElement("option")
        addOption.value = e.id, addOption.text = e.nama
        selectedKecamatan.appendChild(addOption)
    });
}
async function Result(){
    const temp = selectedKecamatan.options[selectedKecamatan.selectedIndex].text
    const result = await dataResult(selectedKecamatan.options[selectedKecamatan.selectedIndex].text)
    resultElement.innerHTML = ""
    if (result.data.length <= 0) {
        resultElement.innerHTML = "Data tidak ditemukan";
      } else {
        for(i = 0; i < result.data.length; i++){
            if(temp == (result.data[i].subdistrict)){
                resultElement.innerHTML += `
            <div class="item">
            <table>
                <tr>
                    <td>Provinsi</td>
                    <td>:</td>
                    <td>${result.data[i].province}</td>
                </tr>
                <tr>
                    <td>Kabupaten</td>
                    <td>:</td>
                    <td>${result.data[i].city}</td>
                </tr>
                <tr>
                    <td>Kecamatan</td>
                    <td>:</td>
                    <td>${result.data[i].subdistrict}</td>
                </tr>
                <tr>
                    <td>Kelurahan</td>
                    <td>:</td>
                    <td>${result.data[i].urban}</td>
                </tr>
                <tr>
                    <td>Kode Pos</td>
                    <td>:</td>
                    <td>${result.data[i].postalcode}</td>
                </tr>
            </table>
        </div>
            `
            }  
        }
    }
}

Provinsi()