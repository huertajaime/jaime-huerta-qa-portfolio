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

fetch("content.json")
  .then(res => {
    console.log("STATUS:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("CONTENT LOADED:", data);
    content = data;
    setLanguage("en");
  })
  .catch(err => console.error("FETCH ERROR:", err));


