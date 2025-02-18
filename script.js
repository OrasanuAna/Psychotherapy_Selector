// Referencing elements
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const cardContainer = document.getElementById("card-container");

// Function to generate cards based on selected checkboxes
function generateCards() {
  cardContainer.innerHTML = ""; // Clear previous content

  const checkedCheckboxes = Array.from(checkboxes).filter((cb) => cb.checked);
  const selectedIds = checkedCheckboxes.map((cb) => cb.id);

  // If no checkboxes are selected, show a message
  if (selectedIds.length === 0) {
    const message = document.createElement("p");
    message.textContent =
      "Please select at least one option to see available packages.";
    message.classList.add("no-results-message"); // Add styling class
    cardContainer.appendChild(message);
    return; // Stop function execution
  }

  let foundResults = false; // Track if any cards are generated

  // Determine output based on combinations
  if (selectedIds.length === 4) {
    foundResults = true;

    createCard(
      "The Tree of Life",
      "https://fig-tree-institute.com/the-tree-of-life/",
      "A holistic approach combining therapy, personal growth, education, and career counseling.",
      getBackgroundImage("tree_of_life")
    );
    createCard(
      "The Looking Glass",
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
      foundResults = true;

      createCard(
        "Personal Development",
        "https://fig-tree-institute.com/personal-development/",
        "Boost confidence, goal-setting, and personal growth.",
        getBackgroundImage("personal_development")
      );
      createCard(
        "Educational Counseling",
        "https://fig-tree-institute.com/educational-consulting/",
        "Guidance for career choices and education plans.",
        getBackgroundImage("educational_consulting")
      );
      createCard(
        "Psychotherapy",
        "https://fig-tree-institute.com/services-psychotherapy/",
        "Therapy sessions to improve emotional well-being and mental health.",
        getBackgroundImage("psychotherapy")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox4")
    ) {
      foundResults = true;

      createCard(
        "Life of Pi",
        "https://fig-tree-institute.com/life-of-pi/",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("life_of_pi")
      );
      createCard(
        "The Little Prince",
        "https://fig-tree-institute.com/the-little-prince/",
        "Rediscover sensitivity and imagination.",
        getBackgroundImage("little_prince")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox3") &&
      selectedIds.includes("checkbox4")
    ) {
      foundResults = true;

      createCard(
        "The Tree of Life",
        "https://fig-tree-institute.com/the-tree-of-life/ ",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("tree_of_life")
      );
      createCard(
        "The Alchemist",
        "https://fig-tree-institute.com/the-alchemist/",
        "A unique mix of therapy and career guidance.",
        getBackgroundImage("the_alchemist")
      );
      createCard(
        "Life of Pi",
        "https://fig-tree-institute.com/life-of-pi/",
        "Rediscover sensitivity and imagination.",
        getBackgroundImage("life_of_pi")
      );
    } else if (
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox3") &&
      selectedIds.includes("checkbox4")
    ) {
      foundResults = true;

      createCard(
        "The Looking Glass",
        "https://fig-tree-institute.com/the-looking-glass/",
        "Comprehensive transformation through therapy and personal growth.",
        getBackgroundImage("looking_glass")
      );
      createCard(
        "The Little Prince",
        "https://fig-tree-institute.com/the-little-prince/",
        "Find a new perspective through self-discovery.",
        getBackgroundImage("little_prince")
      );
      createCard(
        "The Alchemist",
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
      foundResults = true;

      createCard(
        "Psychotherapy",
        "https://fig-tree-institute.com/services-psychotherapy/",
        "Focused therapy sessions for mental well-being.",
        getBackgroundImage("psychotherapy")
      );
      createCard(
        "Personal Development",
        "https://fig-tree-institute.com/personal-development/",
        "Enhance confidence and personal growth.",
        getBackgroundImage("personal_development")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox3")
    ) {
      foundResults = true;

      createCard(
        "Psychotherapy",
        "https://fig-tree-institute.com/services-psychotherapy/",
        "Focused therapy sessions for mental well-being.",
        getBackgroundImage("psychotherapy")
      );
      createCard(
        "Educational Counseling",
        "https://fig-tree-institute.com/educational-consulting/",
        "Career and education guidance.",
        getBackgroundImage("educational_consulting")
      );
    } else if (
      selectedIds.includes("checkbox1") &&
      selectedIds.includes("checkbox4")
    ) {
      foundResults = true;

      createCard(
        "Life of Pi",
        "https://fig-tree-institute.com/life-of-pi/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("life_of_pi")
      );
    } else if (
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox3")
    ) {
      foundResults = true;

      createCard(
        "Dezvoltare Personala",
        "https://fig-tree-institute.com/personal-development/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("personal_development")
      );

      createCard(
        "Consultantă Educațională",
        "https://fig-tree-institute.com/educational-consulting/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("educational_consulting")
      );
    } else if (
      selectedIds.includes("checkbox2") &&
      selectedIds.includes("checkbox4")
    ) {
      foundResults = true;

      createCard(
        "The Little Prince",
        "https://fig-tree-institute.com/the-little-prince/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("little_prince")
      );
    } else if (
      selectedIds.includes("checkbox3") &&
      selectedIds.includes("checkbox4")
    ) {
      foundResults = true;

      createCard(
        "The Alchemist",
        "https://fig-tree-institute.com/the-alchemist/",
        "A unique mix of therapy and career counseling.",
        getBackgroundImage("the_alchemist")
      );
    }
  }
  // If no results were found, display a message
  if (!foundResults) {
    const message = document.createElement("p");
    message.textContent =
      "No matching results for your selection. Try a different combination.";
    message.classList.add("no-results-message"); // Add styling class
    cardContainer.appendChild(message);
  }
}

function createCard(title, link, details, bgImage) {
  // Create the card container
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.position = "relative"; // Ensures proper positioning
  card.style.backgroundImage = `url('${bgImage}')`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.backgroundRepeat = "no-repeat";
  card.style.overflow = "hidden"; // Prevents content overflow

  // Create background overlay
  const backgroundOverlay = document.createElement("div");
  backgroundOverlay.classList.add("background-overlay");
  backgroundOverlay.style.position = "absolute";
  backgroundOverlay.style.top = "0";
  backgroundOverlay.style.left = "0";
  backgroundOverlay.style.width = "100%";
  backgroundOverlay.style.height = "100%";
  backgroundOverlay.style.background = "rgba(0, 0, 0, 0.4)"; // Dark overlay (adjust opacity as needed)
  backgroundOverlay.style.zIndex = "0"; // Keeps it behind text

  // Create text overlay (content area)
  const textOverlay = document.createElement("div");
  textOverlay.classList.add("text-overlay");
  textOverlay.style.position = "relative";
  textOverlay.style.zIndex = "1"; // Place text above the overlay
  textOverlay.style.display = "flex";
  textOverlay.style.flexDirection = "column";
  textOverlay.style.justifyContent = "center";
  textOverlay.style.alignItems = "center";
  textOverlay.style.padding = "20px";
  textOverlay.style.color = "white"; // Ensures text is visible

  // Create card content container
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // Title
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  cardTitle.style.marginBottom = "10px";

  // Description
  const description = document.createElement("p");
  description.textContent = details;

  // Create Buttons Container
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px"; // Space between buttons

  // Read More Button
  const readMoreButton = document.createElement("button");
  readMoreButton.classList.add("button_primary");

  readMoreButton.textContent = "Explore";

  readMoreButton.style.fontWeight = "bold";

  readMoreButton.addEventListener("click", () => {
    window.top.location.href = link; // Redirect to the package page
  });

  // Book a Call Button
  const bookCallButton = document.createElement("button");
  bookCallButton.classList.add("book_secondary");
  bookCallButton.textContent = "Book a Call";

  bookCallButton.addEventListener("click", () => {
    window.top.location.href = "https://fig-tree-institute.com/book-a-call/"; // Redirect to the booking page
  });

  // Append buttons to button container
  buttonContainer.appendChild(readMoreButton);
  buttonContainer.appendChild(bookCallButton);

  // Append elements
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(description);
  cardContent.appendChild(buttonContainer);
  textOverlay.appendChild(cardContent);

  // Append everything to the card
  card.appendChild(backgroundOverlay); // Background overlay behind everything
  card.appendChild(textOverlay); // Text overlay above the background
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

// Trigger message on page load
document.addEventListener("DOMContentLoaded", generateCards);
