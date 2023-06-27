const fs = require("fs");

// DOSYA EKLEME

fs.writeFile('employees.json', '{"name": "Employee1 name","salaray": 2000}', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("JSON DOSYA BASARILI BIR SEKILDE OLUSTURULDU")
}); 

// DOSYA OKUMA

fs.readFile("employees.json", "utf8", (err, data)=>{
    if (err) console.log(err);
    console.log(data);
    console.log("DOSYA OKUNDU");
});

// VERİ EKLEME

fs.appendFile('employees.json', '\n{"name": "Employee2 name","salaray": 4000}', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("JSON DOSYASINA VERI EKLENDI")
});

// DOSYA SILME

fs.unlink('employees.json', (err, data) => {
        if (err) console.log(err);
        console.log("DOSYA SILINDI")
    }); 