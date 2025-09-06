// Get property id from URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = parseInt(urlParams.get("id"));

// Get containers
const detailsDiv = document.getElementById("propertyDetails");
const notFoundDiv = document.getElementById("notFound");

// Find property from data.js
const property = properties.find((p) => p.id === propertyId);

if (property) {
  const html = `
    <div class="col-md-10">
      <div class="card shadow-lg" style="border:1px solid #4e598c; border-radius:15px;">
        <img src="${property.image}" class="card-img-top" alt="${property.title}" style="border-top-left-radius:15px; border-top-right-radius:15px; height:400px; object-fit:cover;">
        <div class="card-body">
          <h2 class="card-title mb-3" style="color:#4e598c;">${property.title}</h2>
          <p style="color:#4e598c;"><strong>Location:</strong> ${property.location}</p>
          <p style="color:#4e598c;"><strong>Price:</strong> ₹${property.price} / month</p>
          <p style="color:#4e598c;"><strong>Description:</strong> ${property.description}</p>
          <p style="color:#4e598c;"><strong>Bedrooms:</strong> ${property.bedrooms}</p>
          <p style="color:#4e598c;"><strong>Bathrooms:</strong> ${property.bathrooms}</p>
          <p style="color:#4e598c;"><strong>Size:</strong> ${property.size} sq.ft</p>
          <p style="color:#4e598c;"><strong>Ratings:</strong> ⭐ ${property.rating} / 5</p>
          <button class="btn mt-2 fw-bold" style="background-color:#f9c784; color:#4e598c; transition:all 0.2s ease;">Enquire Now</button>
        </div>
      </div>
    </div>
  `;
  detailsDiv.innerHTML = html;

  // Button hover effect
  const btn = detailsDiv.querySelector("button");
  btn.onmouseover = () => {
    btn.style.backgroundColor = "#ff8c42"; // Pumpkin
    btn.style.color = "#ffffff";
    btn.style.transform = "translateY(-2px)";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  };
  btn.onmouseout = () => {
    btn.style.backgroundColor = "#f9c784"; // Sunset
    btn.style.color = "#4e598c";
    btn.style.transform = "translateY(0)";
    btn.style.boxShadow = "none";
  };
} else {
  notFoundDiv.style.backgroundColor = "#ff8c42"; // Pumpkin
  notFoundDiv.style.color = "#ffffff";
  notFoundDiv.classList.remove("d-none");
}
