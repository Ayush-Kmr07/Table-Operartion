const searchFun = ()=>{
    let filter = document.getElementById('input').value.toLowerCase();
    let table = document.getElementById('table')
    

    let tr = table.getElementsByTagName('tr');

    for(var i=0; i<tr.length;i++){
         let td = tr[i].getElementsByTagName('td')[1];
         
         
        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toLowerCase().indexOf(filter) > -1){
                tr[i].style.display ="" ;
            }
            else{
                tr[i].style.display ="none";
            }
         }
         
    }

};




function descSortTable(k) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    
    while (switching) {
      
      switching = false;
      rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) {
       
        shouldSwitch = false;
       
        x = rows[i].getElementsByTagName("TD")[k];
        y = rows[i + 1].getElementsByTagName("TD")[k];
        
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
         
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function ascSortTable(k) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
   
    while (switching) {
     
      switching = false;
      rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) {
        
        shouldSwitch = false;
       
        x = rows[i].getElementsByTagName("TD")[k];
        y = rows[i + 1].getElementsByTagName("TD")[k];
       
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
         
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

