function generatePlan() {
  const theme = document.getElementById('theme').value.trim().toLowerCase();
  const people = parseInt(document.getElementById('people').value);
  const budget = parseFloat(document.getElementById('budget').value);
  const output = document.getElementById('output');

  if (!theme || isNaN(people) || people <= 0 || isNaN(budget) || budget <= 0) {
    output.innerHTML = "<p style='color:red;'>Please enter valid theme, number of people, and budget.</p>";
    return;
  }

  // Suggest items based on budget
  let venue, food, decor;

  if (budget < 100) {
    venue = "Backyard or Living Room";
    food = "Homemade snacks, lemonade, chips";
    decor = "DIY decorations, streamers, balloons";
  } else if (budget <= 500) {
    venue = "Community Center or Park";
    food = "Pizza, finger foods, soft drinks";
    decor = "Themed banners, tablecloths, lights";
  } else {
    venue = "Banquet Hall or Event Space";
    food = "Catered meal with dessert & drinks";
    decor = "Professional decor, floral arrangements, lighting";
  }

  // Optional: Add theme-based highlight
  let specialNote = "";
  if (theme.includes("birthday")) {
    specialNote = "🎂 Include a birthday cake and party games!";
  } else if (theme.includes("wedding")) {
    specialNote = "💍 Add a guestbook and flower arrangements.";
  } else if (theme.includes("beach")) {
    specialNote = "🌴 Consider beach balls and sunscreen favors.";
  }

  output.innerHTML = `
    <h3>Event Plan</h3>
    <p><strong>Theme:</strong> ${theme}</p>
    <p><strong>Guests:</strong> ${people}</p>
    <p><strong>Budget:</strong> $${budget.toFixed(2)}</p>
    <ul>
      <li><strong>Venue:</strong> ${venue}</li>
      <li><strong>Food:</strong> ${food}</li>
      <li><strong>Decor:</strong> ${decor}</li>
      <li><strong>To-do:</strong> Send invites, book venue, confirm food & decor</li>
    </ul>
    <p style="color: green;"><em>${specialNote}</em></p>
  `;
}
