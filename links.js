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

    let linksList = document.getElementById("linksList");

    if (newTitle && newURL) {
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

    if (linksList.childElementCount === 0) {
        linksList.style.display = "none";
    } else {
        linksList.style.display = "flex";
    }
}

function cancelForm() {
    document.getElementById("title").value = "";
    document.getElementById("url").value = "";
    document.getElementById("linkForm").style.display = "none";

    let linksList = document.getElementById("linksList");
    if (linksList.childElementCount === 0) {
        linksList.style.display = "none";
    } else {
        linksList.style.display = "flex";
    }
}