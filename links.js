document.getElementById("showForm").addEventListener("click", showForm);
document.getElementById("addItem").addEventListener("click", addItem);
document.getElementById("cancelForm").addEventListener("click", cancelForm);

function showForm() {
    let linkForm = document.getElementById("linkForm");
    linkForm.style.display = "flex";
}

function addItem() {
    let newTitle = document.getElementById("title").value;
    let newURL = document.getElementById("url").value;

    if (newTitle && newURL) {
        let linksList = document.getElementById("linksList");

        let li = document.createElement("li");
        li.className = "item";

        let newLink = document.createElement("a");
        newLink.href = newURL;
        newLink.textContent = newTitle;
        newLink.target = "_blank";

        li.appendChild(newLink);
        linksList.appendChild(li);

        document.getElementById("title").value = "";
        document.getElementById("url").value = "";
        document.getElementById("linkForm").style.display = "none";
    }
}

function cancelForm() {
    document.getElementById("title").value = "";
    document.getElementById("url").value = "";
    document.getElementById("linkForm").style.display = "none";
}