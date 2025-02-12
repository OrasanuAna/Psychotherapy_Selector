// Referințe la elemente
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const messageDiv = document.getElementById("message");

// Funcție pentru afișarea mesajelor
function updateMessage() {
  let message = "";

  // Verifică combinația completă (toate checkbox-urile bifate)
  if (
    checkbox1.checked &&
    checkbox2.checked &&
    checkbox3.checked &&
    checkbox4.checked
  ) {
    message =
      "Pachet Combinat The Tree of Life, Pachet Combinat The Looking Glass";
  }
  // Verifică combinațiile de câte trei opțiuni
  else if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
    message =
      "Pachet Simplu Psihoterapie, Pachet Simplu Dezvoltare Personală, Pachet Simplu Consultanță Educațională";
  } else if (checkbox1.checked && checkbox2.checked && checkbox4.checked) {
    message = "Pachet Combinat Life of Pi, Pachet Combinat The Little Prince";
  } else if (checkbox1.checked && checkbox3.checked && checkbox4.checked) {
    message =
      "Pachet Combinat The Tree of Life, Pachet Combinat The Alchemist, Pachet Combinat Life of Pi";
  } else if (checkbox2.checked && checkbox3.checked && checkbox4.checked) {
    message =
      "Pachet Combinat The Looking Glass, Pachet Combinat The Little Prince, Pachet Combinat The Alchemist";
  }

  // Verifică combinațiile de câte două opțiuni
  else if (checkbox1.checked && checkbox2.checked) {
    message = "Pachet Simplu Psihoterapie, Pachet Simplu Dezvoltare Personală";
  } else if (checkbox1.checked && checkbox3.checked) {
    message =
      "Pachet Simplu Dezvoltare Personală, Pachet Simplu Consultanță Educațională";
  } else if (checkbox1.checked && checkbox4.checked) {
    message = "Pachet Combinat Life of Pi";
  } else if (checkbox2.checked && checkbox3.checked) {
    message =
      "Dezvoltare Personală și Consultanță Educațională: Pachet Combinat Life of Pi";
  } else if (checkbox2.checked && checkbox4.checked) {
    message = "Pachet Combinat The Little Prince";
  } else if (checkbox3.checked && checkbox4.checked) {
    message = "Pachet Combinat The Alchemist";
  }

  // Verifică opțiunile individuale
  else if (checkbox1.checked) {
    message = "Psihoterapie";
  } else if (checkbox2.checked) {
    message = "Dezvoltare Personală";
  } else if (checkbox3.checked) {
    message = "Consultanță Educațională selectată!";
  } else if (checkbox4.checked) {
    message = "Consiliere Vocațională activată!";
  }

  // Dacă niciun checkbox nu este bifat
  if (message === "") {
    message = "Nicio opțiune selectată.";
  }

  // Actualizează mesajul în div
  messageDiv.textContent = message;
}

// Adaugă evenimente pentru fiecare checkbox
checkbox1.addEventListener("change", updateMessage);
checkbox2.addEventListener("change", updateMessage);
checkbox3.addEventListener("change", updateMessage);
checkbox4.addEventListener("change", updateMessage);
