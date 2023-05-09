const body = document.querySelector("body");
body.innerHTML = `
<div> 
   <h1>Hello Everyone</h1>
</div>
`;
const h1Tag = document.querySelector("body h1");
h1Tag.style.position = "absolute";
h1Tag.style.top = "50%";
h1Tag.style.left = "50%";
h1Tag.style.transform = "translate(-50% , -50%)";
h1Tag.style.fontSize = "50px";

colors = ["red", "pink", "brown", "blue", "green", "yellow"];
let i = 0;
function changeColor() {
  if (i == colors.length) i = 0;
  body.style.backgroundColor = colors[i];
  i++;
}
setInterval(changeColor, 1000);
