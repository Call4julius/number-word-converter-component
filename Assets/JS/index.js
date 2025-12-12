const btn = document.querySelector("button");
const entry = document.querySelector(".entry");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  entry.classList.add("hidden");
  result.classList.remove("hidden", "d-flex");
});
