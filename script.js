// Referințe la elemente
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const cardContainer = document.getElementById("card-container");

// Funcție pentru generarea cardurilor
function generateCards() {
  // Ștergem conținutul anterior al containerului
  cardContainer.innerHTML = "";

  // Obținem starea checkbox-urilor
  const checkedCheckboxes = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  // Logica pentru cazuri

  // Cazul 4: Toate checkbox-urile bifate
  if (checkedCheckboxes.length === 4) {
    createCard(
      "Pachet Combinat The Tree of Life",
      "Detalii",
      "https://fig-tree-institute.com/the-tree-of-life/"
    );
    createCard(
      "Pachet Combinat The Looking Glass",
      "Detalii",
      "https://fig-tree-institute.com/the-looking-glass/"
    );
  }
  // Combinatii de 3 checkbox-uri
  else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox1") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox3") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox4")
  ) {
    createCard(
      "Pachet Combinat The Tree of Life",
      "Detalii",
      "https://fig-tree-institute.com/the-tree-of-life/"
    );
    createCard(
      "Pachet Combinat The Alchemist",
      "Detalii",
      "https://fig-tree-institute.com/the-alchemist/"
    );
    createCard(
      "Pachet Combinat Life of Pi",
      "Detalii",
      "https://fig-tree-institute.com/life-of-pi/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox2") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox3") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox4")
  ) {
    createCard(
      "Pachet Combinat The Looking Glass",
      "Detalii",
      "https://fig-tree-institute.com/the-looking-glass/"
    );
    createCard(
      "Pachet Combinat The Little Prince",
      "Detalii",
      "https://fig-tree-institute.com/the-little-prince/"
    );
    createCard(
      "Pachet Combinat The Alchemist",
      "Detalii",
      "https://fig-tree-institute.com/the-alchemist/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox1") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox2") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox3")
  ) {
    createCard(
      "Pachet Simplu Psihoterapie",
      "Detalii",
      "https://fig-tree-institute.com/services-psychotherapy/"
    );
    createCard(
      "Pachet Simplu Dezvoltare Personală",
      "Detalii",
      "https://fig-tree-institute.com/personal-development/"
    );
    createCard(
      "Pachet Simplu Consultanță Educațională",
      "Detalii",
      "https://fig-tree-institute.com/educational-consulting/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox1") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox2") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox4")
  ) {
    createCard(
      "Pachet Combinat Life of Pi",
      "Detalii",
      "https://fig-tree-institute.com/life-of-pi/"
    );
    createCard(
      "Pachet Combinat The Little Prince",
      "Detalii",
      "https://fig-tree-institute.com/the-little-prince/"
    );
  }
  // Combinatii de 2 checkbox-uri
  else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox1") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox2")
  ) {
    createCard(
      "Pachet Simplu Psihoterapie",
      "Detalii",
      "https://fig-tree-institute.com/services-psychotherapy/"
    );
    createCard(
      "Pachet Simplu Dezvoltare Personală",
      "Detalii",
      "https://fig-tree-institute.com/personal-development/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox1") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox3")
  ) {
    createCard(
      "Pachet Simplu Psihoterapie",
      "Detalii",
      "https://fig-tree-institute.com/services-psychotherapy/"
    );
    createCard(
      "Pachet Simplu Consultanță Educațională",
      "Detalii",
      "https://fig-tree-institute.com/educational-consulting/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox1") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox4")
  ) {
    createCard(
      "Pachet Combinat Life of Pi",
      "Detalii",
      "https://fig-tree-institute.com/life-of-pi/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox2") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox3")
  ) {
    createCard(
      "Pachet Simplu Dezvoltare Personală",
      "Detalii",
      "https://fig-tree-institute.com/personal-development/"
    );
    createCard(
      "Pachet Simplu Consultanță Educațională",
      "Detalii",
      "https://fig-tree-institute.com/educational-consulting/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox2") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox4")
  ) {
    createCard(
      "Pachet Combinat The Little Prince",
      "Detalii",
      "https://fig-tree-institute.com/the-little-prince/"
    );
  } else if (
    checkedCheckboxes.some((cb) => cb.id === "checkbox3") &&
    checkedCheckboxes.some((cb) => cb.id === "checkbox4")
  ) {
    createCard(
      "Pachet Combinat The Alchemist",
      "Detalii",
      "https://fig-tree-institute.com/the-alchemist/"
    );
  }
  // Cazul 1: Un singur checkbox bifat
  else if (checkedCheckboxes.length === 1) {
    const singlePage = getPageForCheckbox(checkedCheckboxes[0].id);
    createCard(checkedCheckboxes[0].value, "Detalii", singlePage);
  }
}

// Funcție pentru a obține pagina HTML asociată unui checkbox
function getPageForCheckbox(id) {
  switch (id) {
    case "checkbox1":
      return "https://fig-tree-institute.com/services-psychotherapy/";
    case "checkbox2":
      return "https://fig-tree-institute.com/personal-development/";
    case "checkbox3":
      return "https://fig-tree-institute.com/educational-consulting/";
    case "checkbox4":
      return "https://fig-tree-institute.com/vocational-counseling/";
    default:
      return "#";
  }
}

// Funcție pentru crearea unui card
function createCard(title, buttonText, link) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;

  const button = document.createElement("button");
  button.textContent = buttonText;

  // Setează linkul ca un atribut de date
  button.dataset.link = link;

  // Adaugă eveniment pentru redirecționare
  button.addEventListener("click", () => {
    window.location.href = button.dataset.link;
  });

  card.appendChild(cardTitle);
  card.appendChild(button);
  cardContainer.appendChild(card);
}

// Adaugă evenimente pentru checkbox-uri
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", generateCards)
);
