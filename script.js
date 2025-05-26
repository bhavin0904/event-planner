function generatePlan() {
  const theme = document.getElementById('theme').value;
  const people = document.getElementById('people').value;
  const budget = document.getElementById('budget').value;

  const output = document.getElementById('output');
  output.innerHTML = `
    <h3>Event Plan</h3>
    <p><strong>Theme:</strong> ${theme}</p>
    <p><strong>Guests:</strong> ${people}</p>
    <p><strong>Budget:</strong> $${budget}</p>
    <ul>
      <li><strong>Venue:</strong> Community Hall or Backyard</li>
      <li><strong>Food:</strong> Pizza, finger foods, lemonade</li>
      <li><strong>Decor:</strong> DIY streamers and balloons</li>
      <li><strong>To-do:</strong> Invite guests, order food, prep decorations</li>
    </ul>
  `;
}
