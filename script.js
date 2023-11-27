const issueForm = document.getElementById("issue-form");
const issueList = document.getElementById("issue-list");

issueForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const issueElement = document.createElement("div");
  issueElement.className = "issue";
  issueElement.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;
  issueList.appendChild(issueElement);

  issueForm.reset();
});
