async function generatePlan() {
  const theme = document.getElementById('theme').value;
  const people = parseInt(document.getElementById('people').value);
  const budget = parseFloat(document.getElementById('budget').value);
  const output = document.getElementById('output');

  if (!theme || !people || !budget) {
    output.innerHTML = `<p class="text-red-500 font-semibold">Please fill in all fields.</p>`;
    return;
  }

  output.innerHTML = `<p class="text-gray-500">Generating plan with AI...</p>`;

  try {
    const plan = await getAIPlan(theme, people, budget);

    output.innerHTML = `
      <h3 class="text-xl font-bold mb-2">📝 Event Plan</h3>
      <p><strong>Theme:</strong> ${theme}</p>
      <p><strong>Guests:</strong> ${people}</p>
      <p><strong>Budget:</strong> $${budget}</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        ${plan.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  } catch (err) {
    output.innerHTML = `<p class="text-red-500">Error generating plan: ${err.message}</p>`;
  }
}

async function getAIPlan(theme, people, budget) {
  // Simulate an AI response
  const suggestions = [
    `Venue: Book a local venue suitable for ${people} guests (like a park or small hall).`,
    `Food: Cater basic ${theme}-themed meals within budget.`,
    `Entertainment: Add music/DJ or theme games.`,
    `Decor: Use DIY decorations matching ${theme}.`,
    `Tasks: Send invites, order food, arrange seating, prep music.`
  ];
  // Shuffle for variety (mock AI randomness)
  return suggestions.sort(() => 0.5 - Math.random()).slice(0, 5);
}
