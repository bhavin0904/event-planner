function generatePlan() {
  const theme = document.getElementById('theme').value.trim().toLowerCase();
  const people = parseInt(document.getElementById('people').value);
  const budget = parseFloat(document.getElementById('budget').value);
  const output = document.getElementById('output');

  if (!theme || isNaN(people) || people <= 0 || isNaN(budget) || budget <= 0) {
    output.innerHTML = "<p style='color:red;'>Please enter valid theme, number of people, and budget.</p>";
    return;
  }

  let venue, food, decor, venueImg, foodImg, decorImg;

  if (budget < 100) {
    venue = "Backyard or Living Room";
    food = "Homemade snacks";
    decor = "DIY decorations";
    venueImg = "https://via.placeholder.com/150?text=Backyard";
    foodImg = "https://via.placeholder.com/150?text=Snacks";
    decorImg = "https://via.placeholder.com/150?text=DIY+Decor";
  } else if (budget <= 500) {
    venue = "Community Center or Park";
    food = "Pizza and drinks";
    decor = "Colorful balloons and banners";
    venueImg = "https://via.placeholder.com/150?text=Community+Center";
    foodImg = "https://via.placeholder.com/150?text=Pizza";
    decorImg = "https://via.placeholder.com/150?text=Balloons";
  } else {
    venue = "Banquet Hall";
    food = "Catered meal";
    decor = "Professional setup";
    venueImg = "https://via.placeholder.com/150?text=Banquet+Hall";
    foodImg = "https://via.placeholder.com/150?text=Catering";
    decorImg = "https://via.placeholder.com/150?text=Elegant+Decor";
  }

  let specialNote = "";
  if (theme.includes("birthday")) specialNote = "🎂 Don’t forget the birthday cake!";
  else if (theme.includes("wedding")) specialNote = "💍 Add a guestbook and flowers.";
  else if (theme.includes("beach")) specialNote = "🌴 Bring sunscreen and beach games.";

  output.innerHTML = `
    <h3>Event Plan</h3>
    <p><strong>Theme:</strong> ${theme}</p>
    <p><strong>Guests:</strong> ${people}</p>
    <p><strong>Budget:</strong> $${budget.toFixed(2)}</p>
    <div class="images">
      <div><img src="${venueImg}" alt="Venue"><p><strong>Venue:</strong> ${venue}</p></div>
      <div><img src="${foodImg}" alt="Food"><p><strong>Food:</strong> ${food}</p></div>
      <div><img src="${decorImg}" alt="Decor"><p><strong>Decor:</strong> ${decor}</p></div>
    </div>
    <p style="color: green;"><em>${specialNote}</em></p>
  `;
}

