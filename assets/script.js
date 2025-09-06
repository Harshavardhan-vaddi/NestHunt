// Build individual property card
function buildCard(property) {
  // Column
  const col = document.createElement("div");
  col.className = "col-md-4";

  // Card
  const card = document.createElement("div");
  card.className = "card h-100 shadow-sm";
  card.style.border = "1px solid #4e598c"; // YInMn Blue
  card.style.borderRadius = "15px";

  // Image
  const img = document.createElement("img");
  img.src = property.image;
  img.className = "card-img-top";
  img.alt = property.title;
  img.style.height = "220px";
  img.style.objectFit = "cover";
  img.style.borderTopLeftRadius = "15px";
  img.style.borderTopRightRadius = "15px";

  // Card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = property.title;
  title.style.color = "#4e598c";

  const loc = document.createElement("p");
  loc.className = "card-text";
  loc.innerText = `Location: ${property.location}`;
  loc.style.color = "#4e598c";

  const price = document.createElement("p");
  price.className = "card-text";
  price.innerText = `Price: ₹${property.price}`;
  price.style.color = "#4e598c";

  // View Details button
  const btn = document.createElement("a");
  btn.className = "btn mt-2";
  btn.href = `property.html?id=${property.id}`;
  btn.innerText = "View Details";
  btn.style.backgroundColor = "#f9c784"; // Sunset
  btn.style.color = "#4e598c"; // YInMn Blue text
  btn.style.fontWeight = "bold";
  btn.style.transition = "all 0.2s ease";

  btn.onmouseover = () => {
    btn.style.transform = "translateY(-2px)";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    btn.style.backgroundColor = "#ff8c42"; // Pumpkin on hover
    btn.style.color = "#ffffff";
  };
  btn.onmouseout = () => {
    btn.style.transform = "translateY(0)";
    btn.style.boxShadow = "none";
    btn.style.backgroundColor = "#f9c784"; // Sunset
    btn.style.color = "#4e598c";
  };

  // Append elements
  cardBody.appendChild(title);
  cardBody.appendChild(loc);
  cardBody.appendChild(price);
  cardBody.appendChild(btn);

  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
}

// Render properties with filters
function renderProperties(filterLocation = "", maxPrice = null) {
  const grid = document.getElementById("propertiesGrid");
  const noResults = document.getElementById("noResults");

  if (!grid) return;

  grid.innerHTML = "";
  if (noResults) noResults.classList.add("d-none");

  let props = [...properties];

  if (filterLocation) {
    const locLower = filterLocation.toLowerCase();
    props = props.filter((p) => p.location.toLowerCase().includes(locLower));
  }

  if (maxPrice) {
    const num = Number(maxPrice);
    if (!isNaN(num)) props = props.filter((p) => Number(p.price) <= num);
  }

  if (props.length === 0 && noResults) {
    noResults.classList.remove("d-none");
    return;
  }

  props.forEach((p) => grid.appendChild(buildCard(p)));
}

// Initialize if container exists
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("propertiesGrid");
  const form = document.getElementById("searchForm");

  if (grid) {
    renderProperties();
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const loc = document.getElementById("locationInput").value;
      const price = document.getElementById("maxPrice").value;
      renderProperties(loc, price);
    });
  }
});
