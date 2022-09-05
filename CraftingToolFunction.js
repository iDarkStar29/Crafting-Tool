let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');




btnGet.addEventListener('click', () => {


});
// auto-table by array
<script>
let text = "";

for (let i = 0; i < 26; i++) {
  text += 
"<tr>" + 
"<td>" +
"<button  id=\'myBtn" +    i + "\'>" +
"Select" +
"</td>" +
"<td      id=\'perkName" + i + "\'>" +
perkName[i] + 
"</td>" +
"<td id=\'perkEffect" +    i + "\'>" +
perkEffect[i] + 
"</td>" +
"<td id=\'perkPercent" +   i + "\'>" +
perkPercent[i] + 
"</td>" +
"</tr>";
document.getElementById("myTable").innerHTML = 
"<tr>" +
"<th style=\'background-color: black\'></th>" +
"<th>Perk</th>" +
"<th>Effect</th>" +
"<th>Craft%</th>" +
"</tr>" +
text;
  }
</script>
