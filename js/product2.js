function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}


function toggle1() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/blackcoffee.jpg"]
    var cn = "BLACK COFFEE"
    var cd = "JUST COFFEE"
    var pr = "140"


    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').value = cn;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;


}


function toggle2() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/americano.jpg"]
    var cn = "AMERICANO"
    var cd = "ESPRESSO, HOT WATER"
    var pr = "130"
    


    document.getElementById('coffeename').value = cn;
    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;


}



function toggle3() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/espresso.jpg"]
    var cn = "ESPRESSO"
    var cd = "1oz ESPRESSO"
    var pr = "160"
    


    document.getElementById('coffeename').value = cn;

    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;


}



function toggle4() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/cappucino.jpg"]
    var cn = "CAPPUCINO"
    var cd = "ESPRESSO, STEAMED MILK, FOAM"
    var pr = "150"

   


    document.getElementById('coffeename').value = cn;
    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;


}



function toggle5() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/Latte2.jpg"]
    var cn = "LATTE"
    var cd = "ESPRESSO, STEAMED MILK"
    var pr = "150"
   


    document.getElementById('coffeename').value = cn;

    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;


}




function toggle6() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/mocha.jpg"]
    var cn = "MOCHA"
    var cd = "ESPRESSO, CHOCOLATE, STEAMED MILK"
    var pr = "140"

    


    document.getElementById('coffeename').value = cn;
    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;


}

function toggle7() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/macchiato.jpg"]
    var cn = "MACCHIATO"
    var cd = "ESPRESSO SHOT, FOAM"
    var pr = "130"
    


    document.getElementById('coffeename').value = cn;

    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;

    
}


function toggle8() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/Redeye.jpg"]
    var cn = "RED EYE"
    var cd = "COFFEE, ESPRESSO"
    var pr = "200"
    


    document.getElementById('coffeename').value = cn;

    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;

    
}



function toggle9() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');


    var img = ["/src/cortado.jpg"]
    var cn = "CORTADO"
    var cd = "1oz ESPRESSO, 1oz STEAMED MILK"
    var pr = "180"

    document.getElementById('coffeename').value = cn;
    document.getElementById('coffeeimage').src = img;
    document.getElementById('coffeename').innerHTML = cn;
    document.getElementById('coffeedesc').innerHTML = cd;
    document.getElementById('price').value = pr;

    
}



function autocalc() {

    var p = document.getElementById('price').value;
    var q = document.getElementById('quantity').value;

    var b = p * q;

    document.getElementById('bill').value = b;
}












var script_url = "https://script.google.com/macros/s/AKfycbxiIo38vx6XYAeGgCkSP-Ju44GE6c1c09QKxcE0iSPhgcKTWTHG88Hde_sEkAc5d_0/exec";
  

  // Make an AJAX call to Google Script
  function insert_value() {
    
	$("#re").css("visibility","hidden");
	 document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

    var coffeename=$("#coffeename").val();
	var price= $("#price").val();
    var quantity= $("#quantity").val();
	var bill= $("#bill").val();
    var fullname=$("#fullname").val();
	var emailaddress = $("#emailaddress").val();
    var contact= $("#contact").val();
	var address= $("#address").val();
    var tpayment= $("#tpayment").val();
	var tservice= $("#tservice").val();
	
    var url = script_url+"?callback=ctrlq&coffeename="+coffeename+"&price="+price+"&quantity="+quantity+"&bill="+bill+"&fullname="+fullname+"&emailaddress="+emailaddress+"&contact="+contact+"&address="+address+"&tpayment="+tpayment+"&tservice="+tservice+"&action=insert";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }