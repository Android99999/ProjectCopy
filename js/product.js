
  
  var script_url = "https://script.google.com/macros/s/AKfycbzJWtBYS37jUIKii7lVFfnx_Ne_WUHoH0Z2ygu-V8NhLBd5DzuKULvCCGGlkNJEMVQ/exec";
  




  // Make an AJAX call to Google Script
  function insert_value() {
    
	$("#re").css("visibility","hidden");
	 document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

  var id1=	$("#id").val();
	var name= $("#name").val();
  var address= $("#address").val();
	var age= $("#age").val();
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&address="+address+"&age="+age+"&action=insert";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }

  
 






  
  
  function update_value(){
        $("#re").css("visibility","hidden");
         document.getElementById("loader").style.visibility = "visible";
        
        
        var id1= $("#id").val();
        var name= $("#name").val();
        var address= $("#address").val();
        var age= $("#age").val();
        
        
        
        var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&address="+address+"&age="+age+"&action=update";
      
    
        var request = jQuery.ajax({
          crossDomain: true,
          url: url ,
          method: "GET",
          dataType: "jsonp"
        });
    
        
      }
    
      







     
      
      
      function delete_value(){
        $("#re").css("visibility","hidden");
         document.getElementById("loader").style.visibility = "visible";
        $('#mySpinner').addClass('spinner');
        var id1=$("#id").val();
        var name= $("#name").val();
        
        
        
        var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=delete";
      
    
        var request = jQuery.ajax({
          crossDomain: true,
          url: url ,
          method: "GET",
          dataType: "jsonp"
        });
    
      }
    





      
    


      
      
      // print the returned data
      function ctrlq(e) {
      
        
        $("#re").html(e.result);
        $("#re").css("visibility","visible");
        read_value();
        
      }
      
      
    









      
    function read_value() {
    
    $("#re").css("visibility","hidden");
       
       document.getElementById("loader").style.visibility = "visible";
     var url = script_url+"?action=read";
    

    $.getJSON(url, function (json) {
    
        // Set the variables from the results array
       
       
      
    
            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
    
    
            var header = table.createTHead();
            var row = header.insertRow(0);     
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
        
            cell1.innerHTML = "<b>ID</b>";
            cell2.innerHTML = "<b>Name</b>";
            cell3.innerHTML = "<b>Address</b>";
            cell4.innerHTML = "<b>Age</b>";
            
            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < json.records.length; i++) {
    
                tr = table.insertRow(-1);
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].id;
                    tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].name;
                    tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].address;
                    tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].age;
                }
          
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            document.getElementById("loader").style.visibility = "hidden";
            $("#re").css("visibility","visible");
        });
        }
      
      