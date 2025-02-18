// Referencing elements
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const cardContainer = document.getElementById("card-container");

// Function to generate cards based on selected checkboxes
function generateCards() {
  cardContainer.innerHTML = ""; // Clear previous content

  const checkedCheckboxes = Array.from(checkboxes).filter((cb) => cb.checked);
  const selectedIds = checkedCheckboxes.map((cb) => cb.id);

  if (selectedIds.length === 0) return;

  // Determine output based on combinations
  if (selectedIds.length === 4) {
    createCard(
      "Pachet Combinat The Tree of Life",
      "https://fig-tree-institute.com/the-tree-of-life/",
      "A holistic approach combining therapy, personal growth, education, and career counseling.",
      getBackgroundImage("tree_of_life")
    );
    createCard(
      "Pachet Combinat The Looking Glass",
      "https://fig-tree-institute.com/the-looking-glass/",
      "Explore self-discovery through therapy and personal development.",
      getBackgroundImage("looking_glass")
    );
  } else if (selectedIds.length === 3) {
    if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox3")
    ) {
      createCard(
        "Pachet Simplu Dezvoltare Personală",
        "https://fig-tree-institute.com/personal-development/",
        "Boost confidence, goal-setting, and personal growth.",
        getBackgroundImage("personal_development")
      );
      createCard(
        "Pachet Simplu Consultanță Educațională",
        "https://fig-tree-institute.com/educational-consulting/",
        "Guidance for career choices and education plans.",
        getBackgroundImage("educational_consulting")
      );
      createCard(
        "Pachet Simplu Psihoterapie",
        "https://fig-tree-institute.com/services-psychotherapy/",
        "Therapy sessions to improve emotional well-being and mental health.",
        getBackgroundImage("psychotherapy")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox4")
    ) {
      createCard(
        "Pachet Combinat Life of Pi",
        "https://fig-tree-institute.com/life-of-pi/",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("life_of_pi")
      );
      createCard(
        "Pachet Combinat The Little Prince",
        "https://fig-tree-institute.com/the-little-prince/",
        "Rediscover sensitivity and imagination.",
        getBackgroundImage("little_prince")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox3") &&
      selectedIds.includes("checkbox4")
    ) {
      createCard(
        "Pachet Combinat The Tree of Life",
        "https://fig-tree-institute.com/the-tree-of-life/ ",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("tree_of_life")
      );
      createCard(
        "Pachet Combinat The Alchemist",
        "https://fig-tree-institute.com/the-alchemist/",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("the_alchemist")
      );
      createCard(
        "Pachet Combinat Life of Pi",
        "https://fig-tree-institute.com/life-of-pi/",
        "Rediscover sensitivity and imagination.",
        getBackgroundImage("life_of_pi")
      );
    } else if (
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox3") &&
      selectedIds.includes("checkbox4")
    ) {
      createCard(
        "Pachet Combinat The Looking Glass",
        "https://fig-tree-institute.com/the-looking-glass/",
        "Comprehensive transformation through therapy and personal growth.",
        getBackgroundImage("looking_glass")
      );
      createCard(
        "Pachet Combinat The Little Prince",
        "https://fig-tree-institute.com/the-little-prince/",
        "Find a new perspective through self-discovery.",
        getBackgroundImage("little_prince")
      );
      createCard(
        "Pachet Combinat The Alchemist",
        "https://fig-tree-institute.com/the-alchemist/",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("the_alchemist")
      );
    }
  } else if (selectedIds.length === 2) {
    if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox2")
    ) {
      createCard(
        "Pachet Simplu Psihoterapie",
        "https://fig-tree-institute.com/services-psychotherapy/",
        "Focused therapy sessions for mental well-being.",
        getBackgroundImage("psychotherapy")
      );
      createCard(
        "Pachet Simplu Dezvoltare Personală",
        "https://fig-tree-institute.com/personal-development/",
        "Enhance confidence and personal growth.",
        getBackgroundImage("personal_development")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox3")
    ) {
      createCard(
        "Pachet Simplu Psihoterapie",
        "https://fig-tree-institute.com/services-psychotherapy/",
        "Focused therapy sessions for mental well-being.",
        getBackgroundImage("psychotherapy")
      );
      createCard(
        "Pachet Simplu Consultanță Educațională",
        "https://fig-tree-institute.com/educational-consulting/",
        "Career and education guidance.",
        getBackgroundImage("educational_consulting")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox4")
    ) {
      createCard(
        "Pachet Combinat Life of Pi",
        "https://fig-tree-institute.com/life-of-pi/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("life_of_pi")
      );
    } else if (
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox3")
    ) {
      createCard(
        "Pachet Simplu Dezvoltare Personala",
        "https://fig-tree-institute.com/personal-development/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("personal_development")
      );

      createCard(
        "Pachet Simplu Consultantă Educațională",
        "https://fig-tree-institute.com/educational-consulting/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("educational_consulting")
      );
    } else if (
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox4")
    ) {
      createCard(
        "Pachet Combinat The Little Prince",
        "https://fig-tree-institute.com/the-little-prince/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("little_prince")
      );
    } else if (
      selectedIds.includes("checkbox3") &&
      selectedIds.includes("checkbox4")
    ) {
      createCard(
        "Pachet Combinat The Alchemist",
        "https://fig-tree-institute.com/the-alchemist/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("the_alchemist")
      );
    }
  }
}

// Function to create a card
function createCard(title, link, details, bgImage) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url('${bgImage}')`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.backgroundRepeat = "no-repeat";

  const textOverlay = document.createElement("div");
  textOverlay.classList.add("text-overlay");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;

  const description = document.createElement("p");
  description.textContent = details;

  const button = document.createElement("button");
  button.textContent = "Detalii";
  button.style.marginTop = "15px";
  button.addEventListener("click", () => {
    showModal(title, details, link);
  });

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(description);
  cardContent.appendChild(button);
  textOverlay.appendChild(cardContent);
  card.appendChild(textOverlay);
  cardContainer.appendChild(card);
}

// Function to get unique background images for each package
function getBackgroundImage(packageName) {
  const images = {
    psychotherapy:
      "https://fig-tree-institute.com/wp-content/uploads/elementor/thumbs/pexels-olenkabohovyk-18468852-r17fv877d327eeftwiocj39rutro7km68xnmi52ple.jpg",
    personal_development:
      "https://fig-tree-institute.com/wp-content/uploads/2020/04/pexels-valeria-ushakova-603898-3094224.jpg",
    educational_consulting:
      "https://fig-tree-institute.com/wp-content/uploads/elementor/thumbs/rut-miit-hpRGrfOIybc-unsplash-r1n1o9qostmbpwfpuwkmzddta73uo4mtllove17aqa.jpg",
    vocational_counseling:
      "https://fig-tree-institute.com/wp-content/uploads/2020/04/pexels-ivan-samkov-7703268.jpg",
    life_of_pi:
      "https://fig-tree-institute.com/wp-content/uploads/2025/02/pexels-thachtran-756856-1-1.jpg",
    little_prince:
      "https://fig-tree-institute.com/wp-content/uploads/elementor/thumbs/pexels-valeriia-harbuz-2161259-20061261-r1i97jejzkc1qoyrhn9rqmg4qz5khteeb8fqhoy8eq.jpg",
    tree_of_life:
      "https://fig-tree-institute.com/wp-content/uploads/2025/02/pexels-tobiasbjorkli-2360670-2.jpg",
    the_alchemist:
      "https://fig-tree-institute.com/wp-content/uploads/elementor/thumbs/pexels-andrew-2859169-r1i99e53gsven09tny4a5nluxc0mobrc8er7kc7a4y.jpg",
    looking_glass:
      "https://fig-tree-institute.com/wp-content/uploads/2025/02/pexels-helloaesthe-7766097-1-1.jpg",
  };
  return (
    images[packageName] || "https://source.unsplash.com/400x468/?mindfulness"
  );
}

// Function to show modal
function showModal(title, details, link) {
  let modal = document.getElementById("infoModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "infoModal";
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-btn">&times;</button>
        <h2 id="modalTitle"></h2>
        <p id="modalDetails"></p>
        <button id="readMore">Citește mai mult</button>
        <button id="bookCall">Programează un apel</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.querySelector(".close-btn").addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  modal.querySelector("#modalTitle").textContent = title;
  modal.querySelector("#modalDetails").textContent = details;
  modal.querySelector("#readMore").onclick = () =>
    (window.top.location.href = link);
  modal.querySelector("#bookCall").onclick = () =>
    (window.top.location.href = "https://fig-tree-institute.com/book-a-call/");

  modal.style.display = "block";
}

// Attach event listeners to checkboxes
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", generateCards)
);
