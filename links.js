document.getElementById("showForm").addEventListener("click", showForm);
document.getElementById("addItem").addEventListener("click", addItem);

function showForm() {
    var linkForm = document.getElementById("linkForm");
    linkForm.style.display = "flex";
}

function addItem() {
    var newTitle = document.getElementById("title").value;
    var newURL = document.getElementById("url").value;

    if (newTitle && newURL) {
        var linksList = document.getElementById("linksList");

        var li = document.createElement("li");
        li.className = "item";

        var newLink = document.createElement("a");
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
