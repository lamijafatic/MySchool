var brojac=8;
var dugmic=document.getElementById("novired");
if(brojac>=8)
{


dugmic.style.display="none";

}

function edit_row(no)//Uređivanje jednog reda tabele
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
 var cetvrtak_=document.getElementById("cetvrtak"+no);
 var petak_=document.getElementById("petak"+no);
 var subota_=document.getElementById("subota"+no);
 var nedjelja_=document.getElementById("nedjelja"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
 var cetvrtak_data=cetvrtak_.innerHTML;
 var petak_data=petak_.innerHTML;
 var subota_data=subota_.innerHTML;
 var nedjelja_data=nedjelja_.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
 cetvrtak_.innerHTML="<input type='text' id='cetvrtak_text"+no+"' value='"+cetvrtak_data+"'>";
 petak_.innerHTML="<input type='text' id='petak_text"+no+"' value='"+petak_data+"'>";
 subota_.innerHTML="<input type='text' id='subota_text"+no+"' value='"+subota_data+"'>";
 nedjelja_.innerHTML="<input type='text' id='nedjelja_text"+no+"' value='"+nedjelja_data+"'>";
}

function save_row(no)
{
   
    if(brojac>=8)
    {
    
    
    dugmic.style.display="none";
    
    }
 var name_val=document.getElementById("name_text"+no).value;
 localStorage.setItem("uneseni"+no,name_val);
 var country_val=document.getElementById("country_text"+no).value;
 localStorage.setItem("uneseni2"+no,country_val);
 var age_val=document.getElementById("age_text"+no).value;
 localStorage.setItem("uneseni3"+no,age_val);
 var cetvrtak_val=document.getElementById("cetvrtak_text"+no).value;
 localStorage.setItem("uneseni4"+no,cetvrtak_val);
 var petak_val=document.getElementById("petak_text"+no).value;
 localStorage.setItem("uneseni5"+no,petak_val);
 var subota_val=document.getElementById("subota_text"+no).value;
 localStorage.setItem("uneseni6"+no,subota_val);
 var nedjelja_val=document.getElementById("nedjelja_text"+no).value;
 localStorage.setItem("uneseni7"+no,nedjelja_val);
 var outputElements = document.getElementById("name_row"+no);
 var outputElements1 = document.getElementById("country_row"+no);
 var outputElements2 = document.getElementById("age_row"+no);
 var outputElements3 = document.getElementById("cetvrtak"+no);
 var outputElements4 = document.getElementById("petak"+no);
 var outputElements5 = document.getElementById("subota"+no);
 var outputElements6 = document.getElementById("nedjelja"+no);
 var savedName = localStorage.getItem("uneseni"+no);
 var savedName1 = localStorage.getItem("uneseni2"+no);
 var savedName2 = localStorage.getItem("uneseni3"+no);
 var savedName3 = localStorage.getItem("uneseni4"+no);
 var savedName4 = localStorage.getItem("uneseni5"+no);
 var savedName5 = localStorage.getItem("uneseni6"+no);
 var savedName6 = localStorage.getItem("uneseni7"+no);
 if (savedName !== null) {
  outputElements.innerText = savedName;
 }
 if (savedName1 !== null) {
    outputElements1.innerText = savedName1;
   }
   if (savedName2 !== null) {
    outputElements2.innerText = savedName2;
   }
   if (savedName3 !== null) {
    outputElements3.innerText = savedName3;
   }
   if (savedName4 !== null) {
    outputElements4.innerText = savedName4;
   }
   if (savedName5 !== null) {
    outputElements5.innerText = savedName5;
   }
   if (savedName6 !== null) {
    outputElements6.innerText = savedName6;
   }

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML=""; //brisanje reda
 brojac--;
 dugmic.style.display="flex";

 localStorage.removeItem("uneseni"+no);

}

function add_row()
{
   
    
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
 var new_cetvrtak=document.getElementById("new_cetvrtak").value;
 var new_petak=document.getElementById("new_petak").value;
 var new_subota=document.getElementById("new_subota").value;
 var new_nedjelja=document.getElementById("new_nedjelja").value;
brojac++;
if(brojac>=8)
    {
    
    
    dugmic.style.display="none";
    
    }
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1; //novi unijeti red
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='novi'>"+brojac+".</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td id='cetvrtak"+table_len+"'>"+new_cetvrtak+"</td><td id='petak"+table_len+"'>"+new_petak+"</td><td id='subota"+table_len+"'>"+new_subota+"</td><td id='nedjelja"+table_len+"'>"+new_nedjelja+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";                          
 document.getElementById("new_age").value="";
 document.getElementById("new_cetvrtak").value="";
 document.getElementById("new_petak").value="";
 document.getElementById("new_subota").value="";
 document.getElementById("new_nedjelja").value="";

 
}
 // Prikazivanje spremljenih redova prilikom refresh-a stranice


function prikaziVrijednost(){ 
  
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani=document.getElementById("name_row"+i);
     var spaseni=localStorage.getItem("uneseni"+i);
     if(spaseni!==0)
     prikazani.innerText=spaseni;
    }
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani1=document.getElementById("country_row"+i);
     var spaseni1=localStorage.getItem("uneseni2"+i);
     if(spaseni1!==0)
     prikazani1.innerText=spaseni1;
    }
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani2=document.getElementById("age_row"+i);
     var spaseni2=localStorage.getItem("uneseni3"+i);
     if(spaseni2!==0)
     prikazani2.innerText=spaseni2;
    }
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani3=document.getElementById("cetvrtak"+i);
     var spaseni3=localStorage.getItem("uneseni4"+i);
     if(spaseni3!==0)
     prikazani3.innerText=spaseni3;
    }
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani4=document.getElementById("petak"+i);
     var spaseni4=localStorage.getItem("uneseni5"+i);
     if(spaseni4!==0)
     prikazani4.innerText=spaseni4;
    }
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani5=document.getElementById("subota"+i);
     var spaseni5=localStorage.getItem("uneseni6"+i);
     if(spaseni5!==0)
     prikazani5.innerText=spaseni5;
    }
    for(var i=1;i<=brojac;i++)
    {
    
    var prikazani6=document.getElementById("nedjelja"+i);
     var spaseni6=localStorage.getItem("uneseni7"+i);
     if(spaseni6!==0)
     prikazani6.innerText=spaseni6;
    }
    }
    prikaziVrijednost();
/*function prikazi(){
var prvi_ispis=document.getElementById("name_row1");
  
prvi_ispis.innerHTML=localStorage.getItem("uneseni_prvi");
if(prvi_ispis.innerHTML==""){
prvi_ispis.innerHTML="";

}
}
 function sacuvaj(){

    var prvi_unos=document.getElementById("name_text1").value;
 
    localStorage.setItem("uneseni_prvi",prvi_unos);
    prikazi();

}
function spasi_red1() {
 
    const input = inputElements;        
    const output = outputElements;
    output.innerText = input.value;
    /*input.value = '';
  
  sacuvaj();
}
savePopupBtn.addEventListener('click', sacuvaj);*/