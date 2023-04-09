async function fonksiyonum() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const veriler = await url.json();

  for (let i = 0; i < veriler.length; i++) {
    const tablom = document.getElementById("tablom");
    const satir = document.createElement("tr");
    const isim = document.createElement("td");
    const eposta = document.createElement("td");
    const adres = document.createElement("td");

    satir.appendChild(isim);
    satir.appendChild(eposta);
    satir.appendChild(adres);
    tablom.appendChild(satir);

    isim.innerHTML = veriler[i].name;
    eposta.innerHTML = veriler[i].email;

    function adresDizi() {
      const street = veriler[i].address.street;
      const suite = veriler[i].address.suite;
      const city = veriler[i].address.city;
      const zipcode = veriler[i].address.zipcode;

      return `${street + " " + suite + " " + city + " " + zipcode}`;
    }

    adres.innerHTML = adresDizi();
  }
}

fonksiyonum();
