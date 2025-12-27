let content = {};

fetch("content.json")
  .then(res => res.json())
  .then(data => {
    content = data;
    setLanguage("en");
  });

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (content[lang][key]) {
      el.textContent = content[lang][key];
    }
  });
}

/* Modal logic */
function openModal(img) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

