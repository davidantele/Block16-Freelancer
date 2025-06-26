/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */
// ====== //
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
// ====== //
function createRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}
// ====== //
const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  createRandomFreelancer
);
// ====== //
function getAverageRate(freelancers) {
  const total = freelancers.reduce((sum, f) => sum + f.rate, 0);
  return (total / freelancers.length).toFixed(2);
}
const averageRate = getAverageRate(freelancers);
// ====== //
function FreelancerRows() {
  const tbody = document.createElement("tbody");
  freelancers.forEach((f) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${f.name}</td>
      <td>${f.occupation}</td>
      <td>$${f.rate}</td>
    `;
    tbody.appendChild(row);
  });
  return tbody;
}
// ====== //
function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <p>The average rate is $${averageRate}</p>
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>OCCUPATION</th>
          <th>RATE</th>
        </tr>
      </thead>
      <tbody id="freelancerRows"></tbody>
    </table>
  `;
  // ====== //
  app.querySelector("#freelancerRows").replaceWith(FreelancerRows());
}

document.addEventListener("DOMContentLoaded", renderApp);
