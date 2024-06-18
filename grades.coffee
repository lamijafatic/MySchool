 document.getElementById('new_input').addEventListener('button', function() {
     
      var name = document.getElementById('name1').value;

      
      localStorage.setItem('name1', name1);
       var name1 = localStorage.getItem('name1');
       document.getElementById('name1').innerHTML =name1;
    });
   