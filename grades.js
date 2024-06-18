var zvezda1=document.getElementById("prva_zvezda");
var zvezda2=document.getElementById("druga_zvezda");
var zvezda3=document.getElementById("treca_zvezda");
var zvezda4=document.getElementById("cetvrta_zvezda");
var zvezda5=document.getElementById("peta_zvezda");




var aDom = document.getElementById("avg_grades");
var aDom1 = document.getElementById("avg_grades1");
var aDom2= document.getElementById("avg_grades2");
var aDom3 = document.getElementById("avg_grades3");
var aDom4 = document.getElementById("avg_grades4");
var aDom5 = document.getElementById("avg_grades5");
var aDom6 = document.getElementById("avg_grades6");
var aDom7 = document.getElementById("avg_grades7");
var aDom8 = document.getElementById("avg_grades8");
var aDom9 = document.getElementById("avg_grades9");
var aDom10 = document.getElementById("avg_grades10");
var aDom11 = document.getElementById("avg_grades11");
var aDom12 = document.getElementById("avg_grades12");
var aDom13 = document.getElementById("avg_grades13");
var aDom14 = document.getElementById("avg_grades14");



var iDom = document.getElementById("yourgrades");
var iDom1 = document.getElementById("yourgrades1");
var iDom2 = document.getElementById("yourgrades2");
var iDom3 = document.getElementById("yourgrades3");
var iDom4 = document.getElementById("yourgrades4");
var iDom5 = document.getElementById("yourgrades5");
var iDom6 = document.getElementById("yourgrades6");
var iDom7 = document.getElementById("yourgrades7");
var iDom8 = document.getElementById("yourgrades8");
var iDom9 = document.getElementById("yourgrades9");
var iDom10 = document.getElementById("yourgrades10");
var iDom11 = document.getElementById("yourgrades11");
var iDom12 = document.getElementById("yourgrades12");
var iDom13 = document.getElementById("yourgrades13");
var iDom14 = document.getElementById("yourgrades14");




var fDom = document.getElementById("final_grade");
var fDom1 = document.getElementById("final_grade1");
var fDom2= document.getElementById("final_grade2");
var fDom3 = document.getElementById("final_grade3");
var fDom4 = document.getElementById("final_grade4");
var fDom5 = document.getElementById("final_grade5");
var fDom6 = document.getElementById("final_grade6");
var fDom7 = document.getElementById("final_grade7");
var fDom8 = document.getElementById("final_grade8");
var fDom9 = document.getElementById("final_grade9");
var fDom10 = document.getElementById("final_grade10");
var fDom11 = document.getElementById("final_grade11");
var fDom12 = document.getElementById("final_grade12");
var fDom13 = document.getElementById("final_grade13");
var fDom14 = document.getElementById("final_grade14");

var uspjeh=document.getElementById("total_grade_uspjeh");
var prosjek=document.getElementById("total_grade");

function outputData(a,b,c,d,e,f,g,h,i,j,k,l,o,m,n,p,r,s,t,u,v,z,ab,ac,ad,ae,af,ag,ah,ai,x,y){

	
	aDom.innerHTML = a.toFixed(1);
  fDom.innerHTML=b;
  aDom1.innerHTML = c.toFixed(1);
 fDom1.innerHTML = d;
  aDom2.innerHTML = e.toFixed(1);
  fDom2.innerHTML = f;
  aDom3.innerHTML = g.toFixed(1);
 fDom3.innerHTML = h;
  aDom4.innerHTML = i.toFixed(1);
 fDom4.innerHTML = j;
  aDom5.innerHTML = k.toFixed(1);
 fDom5.innerHTML = l;
  aDom6.innerHTML = o.toFixed(1);
 fDom6.innerHTML = m;
  aDom7.innerHTML = n.toFixed(1);
  fDom7.innerHTML = p;
  aDom8.innerHTML = r.toFixed(1);
 fDom8.innerHTML= s;

 aDom9.innerHTML = t.toFixed(1);
 fDom9.innerHTML= u;
 aDom10.innerHTML = v.toFixed(1);
 fDom10.innerHTML= z;
 aDom11.innerHTML = ab.toFixed(1);
 fDom11.innerHTML= ac;
 aDom12.innerHTML = ad.toFixed(1);
 fDom12.innerHTML= ae;
 aDom13.innerHTML = af.toFixed(1);
 fDom13.innerHTML= ag;
 aDom14.innerHTML = ah.toFixed(1);
 fDom14.innerHTML= ai;
 prosjek.innerHTML=x.toFixed(2);
 uspjeh.innerHTML=y;
}
/*function saveGradeAsCookie(_grade,_letter,_grade1,_grade12,_grade3,_grade14,_grade4,_grade5,_grade6,_grade7,_grade8,_grade9,_grade10,_grade11,_grade12,_grade13,_grade14){

  var cookieValue = JSON.stringify({
    grade: _grade,
    letter: _letter,
    grade1: _grade1,
    grade12: _grade12,
    grade3: _grade3,
    grade14: _grade14,
    grade4: _grade4,
    grade5: _grade5,
    grade6: _grade6,
    grade7: _grade7,
    grade8: _grade8,
    grade9: _grade9,
    grade10: _grade10,
    grade11: _grade11,
    grade12: _grade12,
    grade13: _grade13,
    grade14: _grade14
  });

  document.cookie = "myGrades=" + cookieValue + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  console.log("Cookie saved: " + cookieValue);
}*/
	



function calculateGrade(allGrades,allGrades1,allGrades2,allGrades3,allGrades4,allGrades5,allGrades6,allGrades7,allGrades8,allGrades9,allGrades10,allGrades11,allGrades12,allGrades13,allGrades14){

	

	var finalGrades = ["Excellent","Verygood","Good","Satisfactory","Bad"];
	var finalGrade;
  var finalGrade1;
  var finalGrade2;
  var finalGrade3;
  var finalGrade4;
  var finalGrade5;
  var finalGrade6;
  var finalGrade7;
  var finalGrade8;
  var avgGrade = 0;
  var totalGrade = 0;
  var finalGrade1;
  var avgGrade1 = 0;
  var totalGrade1 = 0;
  var finalGrade2;
  var avgGrade2 = 0;
  var totalGrade2 = 0;
  var finalGrade3;
  var avgGrade3 = 0;
  var totalGrade3 = 0;
  var finalGrade4;
  var avgGrade4= 0;
  var totalGrade4 = 0;
  var finalGrade5;
  var avgGrade5 = 0;
  var totalGrade5 = 0;
  var finalGrade6;
  var avgGrade6 = 0;
  var totalGrade6 = 0;
  var finalGrade7;
  var avgGrade7= 0;
  var totalGrade7 = 0;
  var finalGrade8;
  var avgGrade8 = 0;
  var totalGrade8 = 0;
  var finalGrade9;
  var avgGrade9= 0;
  var totalGrade9 = 0;
  var finalGrade10;
  var avgGrade10 = 0;
  var totalGrade10 = 0;
  var finalGrade11;
  var avgGrade11 = 0;
  var totalGrade11 = 0;
  var finalGrade12;
  var avgGrade12 = 0;
  var totalGrade12 = 0;
  var finalGrade13;
  var avgGrade13 = 0;
  var totalGrade13 = 0;
  var finalGrade14;
  var avgGrade14= 0;
  var totalGrade14= 0;


	for(var i = 0; i < allGrades.length; i++){ //računanje prosjeka
		totalGrade += parseInt(allGrades[i]);  //ocjena za jedan predmet
		avgGrade = totalGrade / allGrades.length;
	}
  for(var i = 0; i < allGrades1.length; i++){
		totalGrade1 += parseInt(allGrades1[i]);
		avgGrade1 = totalGrade1 / allGrades1.length;
	}
  for(var i = 0; i < allGrades2.length; i++){
		totalGrade2 += parseInt(allGrades2[i]);
		avgGrade2 = totalGrade2 / allGrades2.length;
	}
  for(var i = 0; i < allGrades3.length; i++){
		totalGrade3 += parseInt(allGrades3[i]);
		avgGrade3 = totalGrade3 / allGrades3.length;
	}
  for(var i = 0; i < allGrades4.length; i++){
		totalGrade4 += parseInt(allGrades4[i]);
		avgGrade4 = totalGrade4 / allGrades4.length;
	}
  for(var i = 0; i < allGrades5.length; i++){
		totalGrade5 += parseInt(allGrades5[i]);
		avgGrade5 = totalGrade5 / allGrades5.length;
	}
  for(var i = 0; i < allGrades6.length; i++){
		totalGrade6 += parseInt(allGrades6[i]);
		avgGrade6 = totalGrade6 / allGrades6.length;
	}
  for(var i = 0; i < allGrades7.length; i++){
		totalGrade7 += parseInt(allGrades7[i]);
		avgGrade7 = totalGrade7 / allGrades7.length;
	}
  for(var i = 0; i < allGrades8.length; i++){
		totalGrade8 += parseInt(allGrades8[i]);
		avgGrade8 = totalGrade8 / allGrades8.length;
	}
  for(var i = 0; i < allGrades9.length; i++){
		totalGrade9 += parseInt(allGrades9[i]);
		avgGrade9 = totalGrade9 / allGrades9.length;
	}
  for(var i = 0; i < allGrades10.length; i++){
		totalGrade10 += parseInt(allGrades10[i]);
		avgGrade10 = totalGrade10 / allGrades10.length;
	}
  for(var i = 0; i < allGrades11.length; i++){
		totalGrade11 += parseInt(allGrades11[i]);
		avgGrade11 = totalGrade11 / allGrades11.length;
	}
  for(var i = 0; i < allGrades12.length; i++){
		totalGrade12 += parseInt(allGrades12[i]);
		avgGrade12 = totalGrade12 / allGrades12.length;
	}
  for(var i = 0; i < allGrades13.length; i++){
		totalGrade13+= parseInt(allGrades13[i]);
		avgGrade13 = totalGrade13 / allGrades13.length;
	}
  for(var i = 0; i < allGrades14.length; i++){
		totalGrade14 += parseInt(allGrades14[i]);
		avgGrade14 = totalGrade14 / allGrades14.length;
	}

	if(avgGrade >= 4.5 && avgGrade <=5.0){ //uspjeh iz pojedinačnog
		finalGrade = finalGrades[0];   // predmeta
		fDom.className = "green";
   
	} else if(avgGrade >= 3.5 && avgGrade <4.5 ) {
		finalGrade = finalGrades[1];
		fDom.className = "teal";
	} else if(avgGrade >=2.5 && avgGrade < 3.5) {
		finalGrade = finalGrades[2];
		fDom.className = "blue";
	} else if(avgGrade >=1.5 && avgGrade < 2.5) {
		finalGrade = finalGrades[3];
		fDom.className = "orange";
	} else if(avgGrade<1.5){
		finalGrade = finalGrades[4];
		fDom.className = "red";
	} else{
  finalGrade="";
  fDom.className="red";
  avgGrade=0;
  
}

if(avgGrade1 >= 4.5 && avgGrade1 <=5.0){
 finalGrade1 = finalGrades[0];
  fDom1.className = "green";
} else if(avgGrade1 >= 3.5 && avgGrade1 <4.5 ) {
 finalGrade1 = finalGrades[1];
  fDom1.className = "teal";
} else if(avgGrade1 >=2.5 && avgGrade1 < 3.5) {
 finalGrade1 = finalGrades[2];
  fDom1.className = "blue";
} else if(avgGrade1 >=1.5 && avgGrade1 < 2.5) {
 finalGrade1 = finalGrades[3];
  fDom1.className = "orange";
} else if(avgGrade1<1.5){
 finalGrade1 = finalGrades[4];
  fDom1.className = "red";
} else{
finalGrade1="";
fDom1.className="red";
avgGrade1=0;
}

if(avgGrade2 >= 4.5 && avgGrade2 <=5.0){
  finalGrade2 = finalGrades[0];
  fDom2.className = "green";
} else if(avgGrade2 >= 3.5 && avgGrade2 <4.5 ) {
  finalGrade2 = finalGrades[1];
  fDom2.className = "teal";
} else if(avgGrade2 >=2.5 && avgGrade2 < 3.5) {
  finalGrade2 = finalGrades[2];
  fDom2.className = "blue";
} else if(avgGrade2 >=1.5 && avgGrade2 < 2.5) {
  finalGrade2 = finalGrades[3];
  fDom2.className = "orange";
} else if(avgGrade2<1.5){
  finalGrade2 = finalGrades[4];
  fDom2.className = "red";
} else{
finalGrade2="";
fDom2.className="red";
avgGrade2=0;
}

if(avgGrade3 >= 4.5 && avgGrade3 <=5.0){
  finalGrade3 = finalGrades[0];
  fDom3.className = "green";
} else if(avgGrade3 >= 3.5 && avgGrade3 <4.5 ) {
  finalGrade3 = finalGrades[1];
  fDom3.className = "teal";
} else if(avgGrade3 >=2.5 && avgGrade3 < 3.5) {
  finalGrade3 = finalGrades[2];
  fDom3.className = "blue";
} else if(avgGrade3 >=1.5 && avgGrade3 < 2.5) {
  finalGrade3 = finalGrades[3];
  fDom3.className = "orange";
} else if(avgGrade3<1.5){
  finalGrade3 = finalGrades[4];
  fDom3.className = "red";
} else{
  finalGrade3="";
fDom3.className="red";
avgGrade3=0;
}

if(avgGrade4 >= 4.5 && avgGrade4 <=5.0){
  finalGrade4 = finalGrades[0];
  fDom4.className = "green";
} else if(avgGrade4 >= 3.5 && avgGrade4 <4.5 ) {
  finalGrade4 = finalGrades[1];
  fDom4.className = "teal";
} else if(avgGrade4 >=2.5 && avgGrade4 < 3.5) {
  finalGrade4 = finalGrades[2];
  fDom4.className = "blue";
} else if(avgGrade4 >=1.5 && avgGrade4< 2.5) {
  finalGrade4 = finalGrades[3];
  fDom4.className = "orange";
} else if(avgGrade4<1.5){
  finalGrade4 = finalGrades[4];
  fDom4.className = "red";
} else{
finalGrade4="";
fDom4.className="red";
avgGrade4=0;
}

if(avgGrade5 >= 4.5 && avgGrade5 <=5.0){
  finalGrade5 = finalGrades[0];
  fDom5.className = "green";
} else if(avgGrade5 >= 3.5 && avgGrade5 <4.5 ) {
  finalGrade5 = finalGrades[1];
  fDom5.className = "teal";
} else if(avgGrade5 >=2.5 && avgGrade5 < 3.5) {
  finalGrade5 = finalGrades[2];
  fDom5.className = "blue";
} else if(avgGrade5 >=1.5 && avgGrade5 < 2.5) {
  finalGrade5 = finalGrades[3];
  fDom5.className = "orange";
} else if(avgGrade5<1.5){
  finalGrade5 = finalGrades[4];
  fDom5.className = "red";
} else{
finalGrade5="";
fDom5.className="red";
avgGrade5=0;
}

if(avgGrade6 >= 4.5 && avgGrade6 <=5.0){
  finalGrade6 = finalGrades[0];
  fDom6.className = "green";
} else if(avgGrade6 >= 3.5 && avgGrade6 <4.5 ) {
  finalGrade6 = finalGrades[1];
  fDom6.className = "teal";
} else if(avgGrade6 >=2.5 && avgGrade6 < 3.5) {
  finalGrade6 = finalGrades[2];
  fDom6.className = "blue";
} else if(avgGrade6 >=1.5 && avgGrade6 < 2.5) {
  finalGrade6 = finalGrades[3];
  fDom6.className = "orange";
} else if(avgGrade6<1.5){
  finalGrade6 = finalGrades[4];
  fDom6.className = "red";
} else{
finalGrade6="";
fDom6.className="red";
avgGrade6=0;
}

if(avgGrade7 >= 4.5 && avgGrade7 <=5.0){
  finalGrade7 = finalGrades[0];
  fDom7.className = "green";
} else if(avgGrade7 >= 3.5 && avgGrade7 <4.5 ) {
  finalGrade7 = finalGrades[1];
  fDom7.className = "teal";
} else if(avgGrade7 >=2.5 && avgGrade7 < 3.5) {
  finalGrade7 = finalGrades[2];
  fDom7.className = "blue";
} else if(avgGrade7 >=1.5 && avgGrade7 < 2.5) {
  finalGrade7 = finalGrades[3];
  fDom7.className = "orange";
} else if(avgGrade7<1.5){
  finalGrade7 = finalGrades[4];
  fDom7.className = "red";
} else{
finalGrade7="";
fDom7.className="red";
avgGrade7=0;
}

if(avgGrade8 >= 4.5 && avgGrade8 <=5.0){
 finalGrade8 = finalGrades[0];
  fDom8.className = "green";
} else if(avgGrade8 >= 3.5 && avgGrade8 <4.5 ) {
 finalGrade8 = finalGrades[1];
  fDom8.className = "teal";
} else if(avgGrade8 >=2.5 && avgGrade8< 3.5) {
 finalGrade8 = finalGrades[2];
  fDom8.className = "blue";
} else if(avgGrade8 >=1.5 && avgGrade8 < 2.5) {
 finalGrade8 = finalGrades[3];
  fDom8.className = "orange";
} else if(avgGrade8<1.5){
 finalGrade8 = finalGrades[4];
  fDom8.className = "red";
} else{
finalGrade8="";
fDom8.className="red";
avgGrade8=0;
}
if(avgGrade9 >= 4.5 && avgGrade9 <=5.0){
  finalGrade9 = finalGrades[0];
  fDom9.className = "green";
 
} else if(avgGrade9 >= 3.5 && avgGrade9 <4.5 ) {
  finalGrade9 = finalGrades[1];
  fDom9.className = "teal";
} else if(avgGrade9 >=2.5 && avgGrade9 < 3.5) {
  finalGrade9 = finalGrades[2];
  fDom9.className = "blue";
} else if(avgGrade9 >=1.5 && avgGrade9 < 2.5) {
  finalGrade9 = finalGrades[3];
  fDom9.className = "orange";
} else if(avgGrade9<1.5){
  finalGrade9 = finalGrades[4];
  fDom9.className = "red";
} else{
finalGrade9="";
fDom9.className="red";
avgGrade9=0;

}
if(avgGrade10 >= 4.5 && avgGrade10 <=5.0){
  finalGrade10 = finalGrades[0];
  fDom10.className = "green";
 
} else if(avgGrade10 >= 3.5 && avgGrade10 <4.5 ) {
  finalGrade10 = finalGrades[1];
  fDom10.className = "teal";
} else if(avgGrade10 >=2.5 && avgGrade10 < 3.5) {
  finalGrade10 = finalGrades[2];
  fDom10.className = "blue";
} else if(avgGrade10 >=1.5 && avgGrade10 < 2.5) {
  finalGrade10 = finalGrades[3];
  fDom10.className = "orange";
} else if(avgGrade10<1.5){
  finalGrade10 = finalGrades[4];
  fDom10.className = "red";
} else{
finalGrade10="";
fDom10.className="red";
avgGrade10=0;

}
if(avgGrade11 >= 4.5 && avgGrade11 <=5.0){
  finalGrade11 = finalGrades[0];
  fDom11.className = "green";
 
} else if(avgGrade11 >= 3.5 && avgGrade11 <4.5 ) {
  finalGrade11 = finalGrades[1];
  fDom11.className = "teal";
} else if(avgGrade11 >=2.5 && avgGrade11 < 3.5) {
  finalGrade11 = finalGrades[2];
  fDom11.className = "blue";
} else if(avgGrade11 >=1.5 && avgGrade11 < 2.5) {
  finalGrade11 = finalGrades[3];
  fDom11.className = "orange";
} else if(avgGrade11<1.5){
  finalGrade11 = finalGrades[4];
  fDom11.className = "red";
} else{
finalGrade11="";
fDom11.className="red";
avgGrade11=0;

}
if(avgGrade12 >= 4.5 && avgGrade12 <=5.0){
  finalGrade12 = finalGrades[0];
  fDom12.className = "green";
 
} else if(avgGrade12 >= 3.5 && avgGrade12 <4.5 ) {
  finalGrade12 = finalGrades[1];
  fDom12.className = "teal";
} else if(avgGrade12 >=2.5 && avgGrade12 < 3.5) {
  finalGrade12 = finalGrades[2];
  fDom12.className = "blue";
} else if(avgGrade12 >=1.5 && avgGrade12 < 2.5) {
  finalGrade12 = finalGrades[3];
  fDom12.className = "orange";
} else if(avgGrade12<1.5){
  finalGrade12 = finalGrades[4];
  fDom12.className = "red";
} else{
finalGrade12="";
fDom12.className="red";
avgGrade12=0;

}
if(avgGrade13 >= 4.5 && avgGrade13 <=5.0){
  finalGrade13 = finalGrades[0];
  fDom13.className = "green";
 
} else if(avgGrade13 >= 3.5 && avgGrade13 <4.5 ) {
  finalGrade13 = finalGrades[1];
  fDom13.className = "teal";
} else if(avgGrade13 >=2.5 && avgGrade13 < 3.5) {
  finalGrade13 = finalGrades[2];
  fDom13.className = "blue";
} else if(avgGrade13 >=1.5 && avgGrade13 < 2.5) {
  finalGrade13 = finalGrades[3];
  fDom13.className = "orange";
} else if(avgGrade13<1.5){
  finalGrade13 = finalGrades[4];
  fDom13.className = "red";
} else{
finalGrade13="";
fDom13.className="red";
avgGrade13=0;

}
if(avgGrade14 >= 4.5 && avgGrade14 <=5.0){
  finalGrade14 = finalGrades[0];
  fDom14.className = "green";
 
} else if(avgGrade14 >= 3.5 && avgGrade14 <4.5 ) {
  finalGrade14 = finalGrades[1];
  fDom14.className = "teal";
} else if(avgGrade14 >=2.5 && avgGrade14 < 3.5) {
  finalGrade14 = finalGrades[2];
  fDom14.className = "blue";
} else if(avgGrade14 >=1.5 && avgGrade14 < 2.5) {
  finalGrade14 = finalGrades[3];
  fDom14.className = "orange";
} else if(avgGrade14<1.5){
  finalGrade14 = finalGrades[4];
  fDom14.className = "red";
} else{
finalGrade14="";
fDom14.className="red";
avgGrade14=0;

}

var uspjesi=["Excellent","Verygood","Good","Satisfactory","Bad","Unesi ocjene!"];
    var procenat_ukupni=0;
    var zbir=0;
    var slovo=uspjesi[5];
    var brojac=15;
    
 zbir=avgGrade+avgGrade1+avgGrade2+avgGrade3+avgGrade4+avgGrade5+avgGrade6+avgGrade7+avgGrade8+avgGrade9+avgGrade10+avgGrade11+avgGrade12+avgGrade13+avgGrade14;
    //zbir ocjena iz pojedinačnog predmeta
        var occjene = document.querySelectorAll('.ocjene_po');
        for (let i = 0; i < occjene.length; i++) {
          const uneseni = occjene[i];
          if (uneseni.value == "") {
          brojac--;//brojac ukupnog broja predmeta
        }
         }
      procenat_ukupni = zbir / brojac;//prosjek
     
      if(procenat_ukupni >= 4.5 && procenat_ukupni <=5.0){
        slovo = uspjesi[0];
        uspjeh.className = "green";
zvezda1.style.display="inline";
zvezda2.style.display="inline";
zvezda3.style.display="inline";
zvezda4.style.display="inline";
zvezda5.style.display="inline";
       
      } else if(procenat_ukupni>= 3.5 && procenat_ukupni <4.5 ) {
        slovo = uspjesi[1];
        uspjeh.className = "teal";
        zvezda1.style.display="inline";
zvezda2.style.display="inline";
zvezda3.style.display="inline";
zvezda4.style.display="inline";
        zvezda5.style.display="none";
      } else if(procenat_ukupni >=2.5 && procenat_ukupni < 3.5) {
        slovo = uspjesi[2];
        zvezda1.style.display="inline";
        zvezda2.style.display="inline";
        zvezda3.style.display="inline";
        uspjeh.className = "blue";
        zvezda5.style.display="none";
        zvezda4.style.display="none";
      } else if(procenat_ukupni >=1.5 && procenat_ukupni < 2.5) {
       slovo = uspjesi[3];
       uspjeh.className = "orange";
       zvezda1.style.display="inline";
       zvezda2.style.display="inline";
       zvezda5.style.display="none";
       zvezda4.style.display="none";
       zvezda3.style.display="none";
      } else if(procenat_ukupni<1.5){
        slovo = uspjesi[4];
        uspjeh.className = "red";
        zvezda1.style.display="inline";
        zvezda5.style.display="none";
       zvezda4.style.display="none";
       zvezda3.style.display="none";
       zvezda2.style.display="none";
       
      } else if(isNaN(procenat_ukupni))
      {  
        slovo="undefined";
      }
      else{
      slovo=uspjesi[4];
    
     /*uspjeh.className="red"*/;
    }
  
  
	outputData(avgGrade,finalGrade,avgGrade1,finalGrade1,avgGrade2,finalGrade2,avgGrade3,finalGrade3,avgGrade4,finalGrade4,avgGrade5,finalGrade5,avgGrade6,finalGrade6,avgGrade7,finalGrade7,avgGrade8,finalGrade8,avgGrade9,finalGrade9,avgGrade10,finalGrade10,avgGrade11,finalGrade11,avgGrade12,finalGrade12,avgGrade13,finalGrade13,avgGrade14,finalGrade14,procenat_ukupni,slovo);
	/*saveGradeAsCookie(avgGrade, finalGrade,avgGrade1,avgGrade2,avgGrade3,avgGrade4,avgGrade5,avgGrade6,avgGrade7,avgGrade8,finalGrade1,finalGrade2,finalGrade3,finalGrade4,finalGrade5,finalGrade6,finalGrade7,finalGrade8);*/

}

function parseData(input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15){

	var grades1 = input1.split(",");
  var grades2 = input2.split(",");
  var grades3 = input3.split(",");
  var grades4 = input4.split(",");
  var grades5 = input5.split(",");
  var grades6 = input6.split(",");
  var grades7 = input7.split(",");
  var grades8 = input8.split(",");
  var grades9 = input9.split(",");
  var grades10 = input10.split(",");
  var grades11 = input11.split(",");
  var grades12 = input12.split(",");
  var grades13 = input13.split(",");
  var grades14 = input14.split(",");
  var grades15 = input15.split(",");

	calculateGrade(grades1,grades2,grades3,grades4,grades5,grades6,grades7,grades8,grades9,grades10,grades11,grades12,grades13,grades14,grades15);

}

function submit(){
  parseData(iDom.value,iDom1.value,iDom2.value,iDom3.value,iDom4.value,iDom5.value,iDom6.value,iDom7.value,iDom8.value,iDom9.value,iDom10.value,iDom11.value,iDom12.value,iDom13.value,iDom14.value);

  setTimeout(submit, 100);

}

function sacuvaj()
{
  var prvi_unos=document.getElementById("evtTxt").value;
 
  localStorage.setItem("uneseni_prvi",prvi_unos);
  prikazi();
}
function sacuvaj2()
{
  var drugi_unos=document.getElementById("evtTxt2").value;
  localStorage.setItem("uneseni_drugi",drugi_unos);
  prikazi2();
}
function sacuvaj3()
{
  var treci_unos=document.getElementById("evtTxt3").value;
  localStorage.setItem("uneseni_treci",treci_unos);
  prikazi3();
}
function sacuvaj4()
{
  var cetvrti_unos=document.getElementById("evtTxt4").value;
  localStorage.setItem("uneseni_cetvrti",cetvrti_unos);
  prikazi4();
}
function sacuvaj5()
{
  var peti_unos=document.getElementById("evtTxt5").value;
  localStorage.setItem("uneseni_peti",peti_unos);
  prikazi5();
}
function sacuvaj6()
{
  var sesti_unos=document.getElementById("evtTxt6").value;
  localStorage.setItem("uneseni_sesti",sesti_unos);
  prikazi6();
}
function sacuvaj7()
{
  var sedmi_unos=document.getElementById("evtTxt7").value;
  localStorage.setItem("uneseni_sedmi",sedmi_unos);
  prikazi7();
}
function sacuvaj8()
{
  var osmi_unos=document.getElementById("evtTxt8").value;
  localStorage.setItem("uneseni_osmi",osmi_unos);
  prikazi8();
}
function sacuvaj9()
{
  var deveti_unos=document.getElementById("evtTxt9").value;
  localStorage.setItem("uneseni_deveti",deveti_unos);
  prikazi9();
}
function sacuvaj10()
{
  var deseti_unos=document.getElementById("evtTxt10").value;
  localStorage.setItem("uneseni_deseti",deseti_unos);
  prikazi10();
}
function sacuvaj11()
{
  var jedanaesti_unos=document.getElementById("evtTxt11").value;
  localStorage.setItem("uneseni_jedanaesti",jedanaesti_unos);
  prikazi11();
}
function sacuvaj12()
{
  var dvanaesti_unos=document.getElementById("evtTxt12").value;
  localStorage.setItem("uneseni_dvanaesti",dvanaesti_unos);
  prikazi12();
}
function sacuvaj13()
{
  var trinaesti_unos=document.getElementById("evtTxt13").value;
  localStorage.setItem("uneseni_trinaesti",trinaesti_unos);
  prikazi13();
}
function sacuvaj14()
{
  var cetrnaesti_unos=document.getElementById("evtTxt14").value;
  localStorage.setItem("uneseni_cetrnaesti",cetrnaesti_unos);
  prikazi14();
}
function sacuvaj15()
{
  var petnaesti_unos=document.getElementById("evtTxt15").value;
  localStorage.setItem("uneseni_petnaesti",petnaesti_unos);
  prikazi15();
}

function prikazi()
{
  var prvi_ispis=document.getElementById("name1");
  
  prvi_ispis.innerHTML=localStorage.getItem("uneseni_prvi");
  if(prvi_ispis.innerHTML==""){
prvi_ispis.innerHTML="Subject name";
prvi_ispis.style.color=" #a1a1a1;";
  }
else{
  prvi_ispis.style.color="black";
}
}
function prikazi2()
{
  var drugi_ispis=document.getElementById("name2");
  drugi_ispis.innerHTML=localStorage.getItem("uneseni_drugi");
  if(drugi_ispis.innerHTML==""){
    drugi_ispis.innerHTML="Subject name";
    drugi_ispis.style.color=" #a1a1a1;";
      }
    else{
      drugi_ispis.style.color="black";
    }
}
function prikazi3()
{
  var treci_ispis=document.getElementById("name3");
  treci_ispis.innerHTML=localStorage.getItem("uneseni_treci");
  if(treci_ispis.innerHTML==""){
    treci_ispis.innerHTML="Subject name";
    treci_ispis.style.color=" #a1a1a1;";
      }
    else{
      treci_ispis.style.color="black";
    }
}
function prikazi4()
{
  var cetvrti_ispis=document.getElementById("name4");
  cetvrti_ispis.innerHTML=localStorage.getItem("uneseni_cetvrti");
  if(cetvrti_ispis.innerHTML==""){
    cetvrti_ispis.innerHTML="Subject name";
    cetvrti_ispis.style.color=" #a1a1a1;";
      }
    else{
      cetvrti_ispis.style.color="black";
    }
}
function prikazi5()
{
  var peti_ispis=document.getElementById("name5");
  peti_ispis.innerHTML=localStorage.getItem("uneseni_peti");
  if(peti_ispis.innerHTML==""){
    peti_ispis.innerHTML="Subject name";
    peti_ispis.style.color=" #a1a1a1;";
      }
    else{
      peti_ispis.style.color="black";
    }

}
function prikazi6()
{
  var sesti_ispis=document.getElementById("name6");
  sesti_ispis.innerHTML=localStorage.getItem("uneseni_sesti");
  if(sesti_ispis.innerHTML==""){
    sesti_ispis.innerHTML="Subject name";
    sesti_ispis.style.color=" #a1a1a1;";
      }
    else{
      sesti_ispis.style.color="black";
    }
}
function prikazi7()
{
  var sedmi_ispis=document.getElementById("name7");
  sedmi_ispis.innerHTML=localStorage.getItem("uneseni_sedmi");
  if(sedmi_ispis.innerHTML==""){
    sedmi_ispis.innerHTML="Subject name";
    sedmi_ispis.style.color=" #a1a1a1;";
      }
    else{
      sedmi_ispis.style.color="black";
    }
}
function prikazi8()
{
  var osmi_ispis=document.getElementById("name8");
  osmi_ispis.innerHTML=localStorage.getItem("uneseni_osmi");
  if(osmi_ispis.innerHTML==""){
    osmi_ispis.innerHTML="Subject name";
    osmi_ispis.style.color=" #a1a1a1;";
      }
    else{
      osmi_ispis.style.color="black";
    }
}
function prikazi9()
{
  var deveti_ispis=document.getElementById("name9");
  deveti_ispis.innerHTML=localStorage.getItem("uneseni_deveti");
  if(deveti_ispis.innerHTML==""){
    deveti_ispis.innerHTML="Subject name";
    deveti_ispis.style.color=" #a1a1a1;";
      }
    else{
      deveti_ispis.style.color="black";
    }
}
function prikazi10()
{
  var deseti_ispis=document.getElementById("name10");
  deseti_ispis.innerHTML=localStorage.getItem("uneseni_deseti");
  if(deseti_ispis.innerHTML==""){
    deseti_ispis.innerHTML="Subject name";
    deseti_ispis.style.color=" #a1a1a1;";
      }
    else{
      deseti_ispis.style.color="black";
    }
}
function prikazi11()
{
  var jedanaesti_ispis=document.getElementById("name11");
  jedanaesti_ispis.innerHTML=localStorage.getItem("uneseni_jedanaesti");
  if(jedanaesti_ispis.innerHTML==""){
    jedanaesti_ispis.innerHTML="Subject name";
    jedanaesti_ispis.style.color=" #a1a1a1;";
      }
    else{
      jedanaesti_ispis.style.color="black";
    }
}
function prikazi12()
{
  var dvanaesti_ispis=document.getElementById("name12");
  dvanaesti_ispis.innerHTML=localStorage.getItem("uneseni_dvanaesti");
  if(dvanaesti_ispis.innerHTML==""){
    dvanaesti_ispis.innerHTML="Subject name";
    dvanaesti_ispis.style.color=" #a1a1a1;";
      }
    else{
      dvanaesti_ispis.style.color="black";
    }
}
function prikazi13()
{
  var trinaesti_ispis=document.getElementById("name13");
  trinaesti_ispis.innerHTML=localStorage.getItem("uneseni_trinaesti");
  if(trinaesti_ispis.innerHTML==""){
    trinaesti_ispis.innerHTML="Subject name";
    trinaesti_ispis.style.color=" #a1a1a1;";
      }
    else{
      trinaesti_ispis.style.color="black";
    }
}
function prikazi14()
{
  var cetrnaesti_ispis=document.getElementById("name14");
  cetrnaesti_ispis.innerHTML=localStorage.getItem("uneseni_cetrnaesti");
  if(cetrnaesti_ispis.innerHTML==""){
    cetrnaesti_ispis.innerHTML="Subject name";
    cetrnaesti_ispis.style.color=" #a1a1a1;";
      }
    else{
      cetrnaesti_ispis.style.color="black";
    }
}
function prikazi15()
{
  var petnaesti_ispis=document.getElementById("name15");
  petnaesti_ispis.innerHTML=localStorage.getItem("uneseni_petnaesti");
  if(petnaesti_ispis.innerHTML==""){
    petnaesti_ispis.innerHTML="Subject name";
    petnaesti_ispis.style.color=" #a1a1a1;";
      }
    else{
      petnaesti_ispis.style.color="black";
    }
}
prikazi();
prikazi2();
prikazi3();
prikazi4();
prikazi5();
prikazi6();
prikazi7();
prikazi8();
prikazi9();
prikazi10();
prikazi11();
prikazi12();
prikazi13();
prikazi14();
prikazi15();

  /*if(iDom.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom.value);
	}
  if(iDom1.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom1.value);
	}
  if(iDom2.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom2.value);
	}
  if(iDom3.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom3.value);
	}
  if(iDom4.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom4.value);
	}
  if(iDom5.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom5.value);
	}
  if(iDom6.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom6.value);
	}
  if(iDom7.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom7.value);
	}
  if(iDom8.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom8.value);
	}/*




/* Below inputs data from a "mygrades.txt" file */

var myInputData = new XMLHttpRequest();
myInputData.open("GET","mytxt.txt");

myInputData.onreadystatechange = function(){
	if(myInputData.readyState == 4){
		if(myInputData.status == 200){
			console.log(myInputData.responseText);
			parseData(myInputData.responseText);
		}
	}
};

myInputData.send();
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

const container = document.getElementById('dodatni');
const container2=document.getElementById('drugi');
const drugicontainer=document.getElementById('noviprosjek');
const drugicontainer2=document.getElementById('noviuspjeh');
// Call addInput() function on button click
function addInput(){
    let input = document.createElement('input');
    input.placeholder = 'Subject name';
    container.appendChild(input);
    input.className="name";
    
}
function addInputSecond(){
  let input = document.createElement('input');
  input.placeholder = 'Grade,grade,..';
  container2.appendChild(input);
  input.className="ocjene_po";
 
 
  
  
}
var inputBoxes = document.querySelectorAll("input[type='text']");
var inputValues = [];

for (var i = 0; i < inputBoxes.length; i++) {
  inputValues.push(inputBoxes[i].value);
}
for (var i = 0; i < inputBoxes.length; i++) {
  document.cookie = "inputValue" + i + "=" + inputValues[i] + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}
for (var i = 0; i < inputBoxes.length; i++) {
  var savedValue = getCookie("inputValue" + i);
  if (savedValue != "") {
    inputBoxes[i].value = savedValue;
  }
}

function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');

  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

function openDiv(){
  let prozor = document.querySelector('#calForm1');
 prozor.style.display = 'block';

}
function openDiv2(){
  let prozor = document.querySelector('#calForm2');
 prozor.style.display = 'block';

}
function openDiv3(){
  let prozor = document.querySelector('#calForm3');
 prozor.style.display = 'block';

}
function openDiv4(){
  let prozor = document.querySelector('#calForm4');
 prozor.style.display = 'block';

}
function openDiv5(){
  let prozor = document.querySelector('#calForm5');
 prozor.style.display = 'block';

}
function openDiv6(){
  let prozor = document.querySelector('#calForm6');
 prozor.style.display = 'block';

}
function openDiv7(){
  let prozor = document.querySelector('#calForm7');
 prozor.style.display = 'block';

}
function openDiv8(){
  let prozor = document.querySelector('#calForm8');
 prozor.style.display = 'block';

}
function openDiv9(){
  let prozor = document.querySelector('#calForm9');
 prozor.style.display = 'block';

}
function openDiv10(){
  let prozor = document.querySelector('#calForm10');
 prozor.style.display = 'block';

}
function openDiv11(){
  let prozor = document.querySelector('#calForm11');
 prozor.style.display = 'block';

}
function openDiv12(){
  let prozor = document.querySelector('#calForm12');
 prozor.style.display = 'block';

}
function openDiv13(){
  let prozor = document.querySelector('#calForm13');
 prozor.style.display = 'block';

}
function openDiv14(){
  let prozor = document.querySelector('#calForm14');
 prozor.style.display = 'block';

}
function openDiv15(){
  let prozor = document.querySelector('#calForm15');
 prozor.style.display = 'block';

}
function closeDiv()
{
  let prozor=document.querySelector('#calForm1');
  prozor.style.display='none';
}
function closeDiv2()
{
  let prozor=document.querySelector('#calForm2');
  prozor.style.display='none';
}
function closeDiv3()
{
  let prozor=document.querySelector('#calForm3');
  prozor.style.display='none';
}
function closeDiv4()
{
  let prozor=document.querySelector('#calForm4');
  prozor.style.display='none';
}
function closeDiv5()
{
  let prozor=document.querySelector('#calForm5');
  prozor.style.display='none';
}
function closeDiv6()
{
  let prozor=document.querySelector('#calForm6');
  prozor.style.display='none';
}
function closeDiv7()
{
  let prozor=document.querySelector('#calForm7');
  prozor.style.display='none';
}
function closeDiv8()
{
  let prozor=document.querySelector('#calForm8');
  prozor.style.display='none';
}
function closeDiv9()
{
  let prozor=document.querySelector('#calForm9');
  prozor.style.display='none';
}
function closeDiv10()
{
  let prozor=document.querySelector('#calForm10');
  prozor.style.display='none';
}
function closeDiv11()
{
  let prozor=document.querySelector('#calForm11');
  prozor.style.display='none';
}
function closeDiv12()
{
  let prozor=document.querySelector('#calForm12');
  prozor.style.display='none';
}
function closeDiv13()
{
  let prozor=document.querySelector('#calForm13');
  prozor.style.display='none';
}
function closeDiv14()
{
  let prozor=document.querySelector('#calForm14');
  prozor.style.display='none';
}
function closeDiv15()
{
  let prozor=document.querySelector('#calForm15');
  prozor.style.display='none';
}
const popup = document.getElementById('calForm1');
const popup2 = document.getElementById('calForm2');
const popup3 = document.getElementById('calForm3');
const popup4 = document.getElementById('calForm4');
const popup5 = document.getElementById('calForm5');
const popup6 = document.getElementById('calForm6');
const popup7 = document.getElementById('calForm7');
const popup8 = document.getElementById('calForm8');
const popup9 = document.getElementById('calForm9');
const popup10 = document.getElementById('calForm10');
const popup11= document.getElementById('calForm11');
const popup12= document.getElementById('calForm12');
const popup13= document.getElementById('calForm13');
const popup14= document.getElementById('calForm14');
const popup15= document.getElementById('calForm15');

const savePopupBtn = document.getElementById('evtSave');
const savePopupBtn2 = document.getElementById('evtSave2');
const savePopupBtn3 = document.getElementById('evtSave3');
const savePopupBtn4 = document.getElementById('evtSave4');
const savePopupBtn5 = document.getElementById('evtSave5');
const savePopupBtn6 = document.getElementById('evtSave6');
const savePopupBtn7 = document.getElementById('evtSave7');
const savePopupBtn8 = document.getElementById('evtSave8');
const savePopupBtn9 = document.getElementById('evtSave9');
const savePopupBtn10 = document.getElementById('evtSave10');
const savePopupBtn11= document.getElementById('evtSave11');
const savePopupBtn12= document.getElementById('evtSave12');
const savePopupBtn13= document.getElementById('evtSave13');
const savePopupBtn14= document.getElementById('evtSave14');
const savePopupBtn15= document.getElementById('evtSave15');

const inputElements = document.querySelector('#evtTxt');
/*let prviJSON=JSON.stringify(inputElements);
localStorage.setItem('inputElements', prviJSON);
let prviaJSON = localStorage.getItem('inputElements');
prviaJSON = JSON.parse(prviaJSON);*/



const inputElements2 = document.querySelector('#evtTxt2');
const inputElements3 = document.querySelector('#evtTxt3');
const inputElements4 = document.querySelector('#evtTxt4');
const inputElements5 = document.querySelector('#evtTxt5');
const inputElements6 = document.querySelector('#evtTxt6');
const inputElements7 = document.querySelector('#evtTxt7');
const inputElements8 = document.querySelector('#evtTxt8');
const inputElements9 = document.querySelector('#evtTxt9');
const inputElements10 = document.querySelector('#evtTxt10');
const inputElements11= document.querySelector('#evtTxt11');
const inputElements12= document.querySelector('#evtTxt12');
const inputElements13= document.querySelector('#evtTxt13');
const inputElements14= document.querySelector('#evtTxt14');
const inputElements15= document.querySelector('#evtTxt15');

const outputElements = document.querySelector('#name1');
const outputElements2 = document.querySelector('#name2');
const outputElements3 = document.querySelector('#name3');
const outputElements4 = document.querySelector('#name4');
const outputElements5 = document.querySelector('#name5');
const outputElements6 = document.querySelector('#name6');
const outputElements7= document.querySelector('#name7');
const outputElements8 = document.querySelector('#name8');
const outputElements9= document.querySelector('#name9');
const outputElements10 = document.querySelector('#name10');
const outputElements11= document.querySelector('#name11');
const outputElements12 = document.querySelector('#name12');
const outputElements13 = document.querySelector('#name13');
const outputElements14 = document.querySelector('#name14');
const outputElements15= document.querySelector('#name15');



// Funkcija za spremanje unosa i zatvaranje popup-a
function savePopup() {
 
    const input = inputElements; //varijabla unosa(text iz textbox-a u formi)
    const output = outputElements; // varijabla ispisa(div)
    output.innerText = input.value;//ispis=text unosa
    output.style.color='black';
  
  popup.style.display = 'none';//zatvori formu
  sacuvaj();// sacuvaj podatak
}

function savePopup2() {
 
  const input = inputElements2;
  const output = outputElements2;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup2.style.display = 'none';
sacuvaj2();
}
function savePopup3() {
 
  const input = inputElements3;
  const output = outputElements3;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup3.style.display = 'none';
sacuvaj3();
}
function savePopup4() {
 
  const input = inputElements4;
  const output = outputElements4;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup4.style.display = 'none';
sacuvaj4();
}
function savePopup5() {
 
  const input = inputElements5;
  const output = outputElements5;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup5.style.display = 'none';
sacuvaj5();
}
function savePopup6() {
 
  const input = inputElements6;
  const output = outputElements6;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup6.style.display = 'none';
sacuvaj6();
}
function savePopup7() {
 
  const input = inputElements7;
  const output = outputElements7;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup7.style.display = 'none';
sacuvaj7();
}
function savePopup8() {
 
  const input = inputElements8;
  const output = outputElements8;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup8.style.display = 'none';
sacuvaj8();
}
function savePopup9() {
 
  const input = inputElements9;
  const output = outputElements9;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup9.style.display = 'none';
sacuvaj9();
}
function savePopup10() {
 
  const input = inputElements10;
  const output = outputElements10;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup10.style.display = 'none';
sacuvaj10();
}
function savePopup11() {
 
  const input = inputElements11;
  const output = outputElements11;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup11.style.display = 'none';
sacuvaj11();
}
function savePopup12() {
 
  const input = inputElements12;
  const output = outputElements12;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup12.style.display = 'none';
sacuvaj12();
}
function savePopup13() {
 
  const input = inputElements13;
  const output = outputElements13;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup13.style.display = 'none';
sacuvaj13();
}
function savePopup14() {
 
  const input = inputElements14;
  const output = outputElements14;
  output.innerText = input.value;
  /*input.value = '';*/
  output.style.color='black';

popup14.style.display = 'none';
sacuvaj14();
}
function savePopup15() {
 
  const input = inputElements15;
  const output = outputElements15;
  output.innerText = input.value;
 /* input.value = '';*/
  output.style.color='black';

popup15.style.display = 'none';
sacuvaj15();
}


// Povezivanje event listenera na button za spremanje unosa
savePopupBtn.addEventListener('click', savePopup);
savePopupBtn2.addEventListener('click', savePopup2);
savePopupBtn3.addEventListener('click', savePopup3);
savePopupBtn4.addEventListener('click', savePopup4);
savePopupBtn5.addEventListener('click', savePopup5);
savePopupBtn6.addEventListener('click', savePopup6);
savePopupBtn7.addEventListener('click', savePopup7);
savePopupBtn8.addEventListener('click', savePopup8);
savePopupBtn9.addEventListener('click', savePopup9);
savePopupBtn10.addEventListener('click', savePopup10);
savePopupBtn11.addEventListener('click', savePopup11);
savePopupBtn12.addEventListener('click', savePopup12);
savePopupBtn13.addEventListener('click', savePopup13);
savePopupBtn14.addEventListener('click', savePopup14);
savePopupBtn15.addEventListener('click', savePopup15);


      
 function spasi() {
  

  function saveText() { //spasi podatke 
    var textValue = iDom.value;//varijabla unesenog texta
    var textValue1=iDom1.value;
    var textValue2=iDom2.value;
    var textValue3=iDom3.value;
    var textValue4=iDom4.value;
    var textValue5=iDom5.value;
    var textValue6=iDom6.value;
    var textValue7=iDom7.value;
    var textValue8= iDom8.value;
    var textValue9=iDom9.value;
    var textValue10=iDom10.value;
    var textValue11=iDom11.value;
    var textValue12=iDom12.value;
    var textValue13=iDom13.value;
    var textValue14=iDom14.value;
   
    localStorage.setItem("savedText", textValue);//spašavanje u memoriju
    localStorage.setItem("savedText1",textValue1);
    localStorage.setItem("savedText2", textValue2);
    localStorage.setItem("savedText3",textValue3);
    localStorage.setItem("savedText4", textValue4);
    localStorage.setItem("savedText5",textValue5);
    localStorage.setItem("savedText6", textValue6);
    localStorage.setItem("savedText7",textValue7);
    localStorage.setItem("savedText8",textValue8);
    localStorage.setItem("savedText9", textValue9);
    localStorage.setItem("savedText10",textValue10);
    localStorage.setItem("savedText11", textValue11);
    localStorage.setItem("savedText12",textValue12);
    localStorage.setItem("savedText13", textValue13);
    localStorage.setItem("savedText14",textValue14);
    
  }

  var storedText = localStorage.getItem("savedText");
  var storedText1=localStorage.getItem("savedText1");
  var storedText2 = localStorage.getItem("savedText2");
  var storedText3=localStorage.getItem("savedText3");
  var storedText4 = localStorage.getItem("savedText4");
  var storedText5=localStorage.getItem("savedText5");
  var storedText6 = localStorage.getItem("savedText6");
  var storedText7=localStorage.getItem("savedText7");
  var storedText8=localStorage.getItem("savedText8");
  var storedText9= localStorage.getItem("savedText9");
  var storedText10=localStorage.getItem("savedText10");
  var storedText11= localStorage.getItem("savedText11");
  var storedText12=localStorage.getItem("savedText12");
  var storedText13= localStorage.getItem("savedText13");
  var storedText14=localStorage.getItem("savedText14");
  
  if (storedText) {
    iDom.value = storedText;
  }
  if (storedText1) {
    iDom1.value = storedText1;
  }
  if (storedText2) {
    iDom2.value = storedText2;
  }
  if (storedText3) {
    iDom3.value = storedText3;
  }
  if (storedText4) {
    iDom4.value = storedText4;
  }
  if (storedText5) {
    iDom5.value = storedText5;
  }
  if (storedText6) {
    iDom6.value = storedText6;
  }
  if (storedText7) {
    iDom7.value = storedText7;
  }
  if (storedText8) {
    iDom8.value = storedText8;
  }
  if (storedText9) {
    iDom9.value = storedText9;
  }
  if (storedText10) {
    iDom10.value = storedText10;
  }
  if (storedText11) {
    iDom11.value = storedText11;
  }
  if (storedText12) {
    iDom12.value = storedText12;
  }
  if (storedText13) {
    iDom13.value = storedText13;
  }
  if (storedText14) {
    iDom14.value = storedText14;
  }

  iDom.addEventListener("input", saveText);
  iDom1.addEventListener("input", saveText);
  iDom2.addEventListener("input", saveText);
  iDom3.addEventListener("input", saveText);
  iDom4.addEventListener("input", saveText);
  iDom5.addEventListener("input", saveText);
  iDom6.addEventListener("input", saveText);
  iDom7.addEventListener("input", saveText);
  iDom8.addEventListener("input", saveText);
  iDom9.addEventListener("input", saveText);
  iDom10.addEventListener("input", saveText);
  iDom11.addEventListener("input", saveText);
  iDom12.addEventListener("input", saveText);
  iDom13.addEventListener("input", saveText);
  iDom14.addEventListener("input", saveText);
  
  setTimeout(100);
};


/*OBLACIII*/ 








