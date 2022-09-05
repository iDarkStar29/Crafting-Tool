let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');




btnGet.addEventListener('click', () => {


});
// auto-table by variable
let text = "";

for (let i = 0; i < 26; i++) {
  text += "<tr><td>" + perkName[i] + "</td><td>" + perkEffect[i] + "</td><td>" + perkPercent[i] + "</td></tr>";
}
document.getElementById("myTable").innerHTML = text;
