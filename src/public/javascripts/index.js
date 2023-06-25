const semesterBtn = document.getElementsByClassName("semester-button");

for (const fag of semesterBtn) {
  fag.addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = content.scrollHeight + "px");
  });
}

const fagGrids = document.getElementsByClassName("fag-grid");

const setFag = async () => {
  for (let i = 0; i < fagGrids.length; i++) {
    const fagGrid = fagGrids[i];

    const res = await fetch("admin/adminDashboard/alleFag", {
      method: "GET",
    });

    const data = await res.json();

    for (const fag of data) {
      const smster = fag.semester;
      const id = fagGrid.getAttribute("id");
      if (smster === id) {
        const nyFag = setFagDiv(
          fag.emne,
          fag.beskrivelse,
          fag.karakter,
          fag.link,
          fag.emnetype
        );
        console.log("Ny fag satt: ", nyFag);
        fagGrid.appendChild(nyFag);
      }
    }
  }
};

setFag();

function setFagDiv(emne, beskrivelse, karakter, link, emnetype) {
  const linkAttr = {
    class: "les-mer",
    href: link,
    target: "_blank",
  };

  const fag = document.createElement("div");
  fag.setAttribute("class", "fag-container");

  const navn = document.createElement("h2");
  navn.setAttribute("class", "fag-navn");
  navn.innerText = emne;

  const beskriv = document.createElement("p");
  beskriv.setAttribute("class", "fag-beskrivelse");
  beskriv.innerText = beskrivelse;

  const kara = document.createElement("h4");
  kara.setAttribute("class", "fag-karakter");
  kara.innerText = `Karakter: ${karakter}`;

  const info = document.createElement("div");
  info.setAttribute("class", "fag-info");

  const lnk = document.createElement("a");
  lnk.href = link;
  setAttributes(lnk, linkAttr);
  lnk.innerText = "Les mer";

  const emnetyp = document.createElement("abbr");
  emnetyp.setAttribute(
    "title",
    `${emnetype === "O" ? "Obligatorisk emne" : "Ekstra/Valgfritt"}`
  );
  emnetyp.innerText = emnetype;

  info.append(lnk, emnetyp);

  fag.append(navn, beskriv, kara, info);
  return fag;
}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}
