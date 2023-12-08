var script_url = "https://script.google.com/macros/s/AKfycbxhE0yXmVGb_SxOeCSxy9WMCD3sHXxytHByxT-0eepcN3carv94E_YvF6h5kk5-J8Y/exec";
  

  // Make an AJAX call to Google Script
  function insert_value() {
    
	$("#re").css("visibility","hidden");
	 document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

    var fullname=$("#fullname").val();
	var emailaddress= $("#emailaddress").val();
    var contact= $("#contact").val();
	var concern= $("#concern").val();
   
	
    var url = script_url+"?callback=ctrlq&fullname="+fullname+"&emailaddress="+emailaddress+"&contact="+contact+"&concern="+concern+"&action=insert";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }