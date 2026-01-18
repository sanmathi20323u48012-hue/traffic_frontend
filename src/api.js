async function loadData() {
  const response = await fetch(
    "https://YOUR-BACKEND-URL.onrender.com/api/accidents/hourly"
  );
  const data = await response.json();
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}
