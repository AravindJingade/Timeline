
var coll = document.getElementsByClassName("collapsible");
console.log('col -->', coll);
var i;

for (i = 0; i < coll.length; i++) {
    console.log("getting");
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function searchBar() {
    var input = document.getElementById("searchbarID");
    var filter = input.value.toLowerCase();
    console.log(filter);
    var nodes = document.getElementsByClassName('cards');

    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            nodes[i].style.display = "block";
        } else {
            nodes[i].style.display = "none";
        }
    }
}
