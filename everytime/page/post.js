const collapsed = document.getElementById("write-collapsed");
const expanded = document.getElementById("write-expanded");

console.log("찾은 상자:", collapsed);

if (collapsed) {
  collapsed.addEventListener("click", function () {
    collapsed.style.display = "none";
    expanded.style.display = "block";
  });
}
