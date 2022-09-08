let text = "";
let button = "";
for (let i = 0; i < 26; i++)
{
  {
    text += 
"<tr>" + 
"<td>" +
"<button  style=\'height: 100%; width: 100%;\'" +
            "id=\'myBtn" +      i + "\'>" +
"Select" +
"</td>" +
"<td" +
"         style=\'width: 200px\'" +
"            id=\'perkName" +   i + "\'>" +
perkName[i] + 
"</td>" +
"<td      id=\'perkEffect" +    i + "\'>" +
perkEffect[i] + 
"</td>" +
"<td" +
"      style=\'width: 60px\'" +
"         id=\'perkPercent" +   i + "\'>" +
perkPercent[i] + 
"</td>" +
"</tr>";
  };

  {
    button += 
"document.getElementById(\"myBtn" + i + "\").addEventlistener(\"click\", function() {" + 
"first(" + i + ")}" + 
"});";
  };

document.getElementById("myTable").innerHTML = 
"<tr>" +
"<th>Click Box to Select</th>" +
"<th>Perk</th>" +
"<th>Effect</th>" +
"<th>Craft%</th>" +
"</tr>" +
text;
};
// THE TABLE IS ABOVE
/*
function first(p1) {
  let a = perkName[p1];
  document.getElementById('selectOne').innerHTML = a;
}
*/
/*
"function first(p1)  {" + 
"a = perkName[p1];" +
"document.getElementById(\'selectOne\').innerHTML = a;";
document.getElementById('theFunction').innerHTML = txt;
}
*/


/*
 document.getElementById("myBtn1").addEventListener("click", function() {first(1);});
 
 function first(p1) {
  a = perkName[p1];
  document.getElementById('selectOne').innerHTML = a;
}
 */
