const namaDiterima = {
    "081259874501": "Elita",
    "089652524331": "Adam",
    "082140579321": "Sita",
    "087811486292": "Nabella",
    "085710976825":	"Hendrik",
    "085755144168": "Anindya",
    "082216404065": "Nada",
    "085894327576": "Joanna",
    "08563290269": "Inaya",
    "085646175126": "Naylla",
    "081233372940": "Zulfa",
    "081233901513": "Sharin",
    "082257951392": "Rafi",
    "082141029038":	"Tirta",
    "085748369452":	"Faiz",
    "081336658694":	"Dananjaya",
    "088235947537":	"Hikmal",
    "081332792012": "Farrel",
    "082131803387": "Kevin",
    "0881036242959": "Ervina",
    "082335256844": "Mirza",
    "085785074894": "Refitria",
    "082132184093": "Talitha",
    "089685431382": "Deff Qanca",
    "081357034227": "Vito",
    "081296312821": "Erlita",
    "082338642330": "Azza",
    "085806104453": "Zulfia",
    "081221129515": "Safa",
    "081259199805": "Jeffry",
    "082229036377": "Rafi",
    "081234275397": "Izza",
    "081333613267": "Rossa",
    "08113059206": "Athar",
    "082232021620": "Abimanyu",
    "088996147976": "Aqila",
    "087755099005": "Aqilla",
    "0895367166526": "Farah",
    "081234421978": "Felicia",
    "082140337287": "Lovyna",
    "081330400904": "Refia",
    "085790268398": "Elsa",
    "081233920404": "Putri",
    "087856653994": "Nadia",
    "081292770321": "Adelia",
    "082139294588": "Chlorinda",
    "085852677736": "Aulia",
    "085737091514": "Balqis",
    "089606333388": "Anastasya",
    "081239688700": "Raihana",
    "089620105355": "Nabilah",
    "082213175445": "Silvany",
    "0895700224796": "Najwa",
    "08113516664": "Syarifah",
    "087814992362": "Laili",
    "081559896062": "Diandra",
    "085707771993": "Atikah",
    "081330118778": "Lisyifail",
    "085748014580": "Nasywa"
};

document.getElementById("cekNamaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const namaInput = document.getElementById("namaInput").value;
    const resultElement = document.getElementById("result");
    const whatsappBox = document.getElementById("whatsappBox");

    if (namaDiterima[namaInput]) {
        resultElement.textContent = `Congrats, ${namaDiterima[namaInput]}! You are qualified for the next stage!`;
        resultElement.style.color = "#4CAF50";
        whatsappBox.classList.remove("hidden"); // Show WhatsApp box
    } else {
        resultElement.textContent = `Sorry, you are not qualified for the next stage.`;
        resultElement.style.color = "#ff7c82";
        whatsappBox.classList.add("hidden"); // Hide WhatsApp box
    }
});
   