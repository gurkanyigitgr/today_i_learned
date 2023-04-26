const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

const factsList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

factsList.innerHTML = "";

// Load data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://zduqsjkbseuphozrmljq.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdXFzamtic2V1cGhvenJtbGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4MzkyNTAsImV4cCI6MTk4NzQxNTI1MH0.CVQoGkAAz_mH3mxIqWi7BK5nzIQfid_z9xRAPkndRJw",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdXFzamtic2V1cGhvenJtbGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4MzkyNTAsImV4cCI6MTk4NzQxNTI1MH0.CVQoGkAAz_mH3mxIqWi7BK5nzIQfid_z9xRAPkndRJw",
      },
    }
  );

  const data = await res.json();

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
  <li class="fact">
              <p>
                ${fact.text}
                <a
                  class="source"
                  href="${fact.source}"
                  target="_blank"
                  >(Source)</a>
              </p>
              <span class="tag" style="color: ${
                CATEGORIES.find((cat) => cat.name === fact.category).color
              }">${fact.category}</span>
  `
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
