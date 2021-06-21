const tree = document.querySelector(".tree");

tree.addEventListener("click", (e) => {
    let branch = e.target.children[0];
    if (branch.style.display === "" || branch.style.display === "block") {
        branch.style.display = "none";
    } else if ((branch.style.display = "none")) {
        branch.style.display = "block";
    }
});