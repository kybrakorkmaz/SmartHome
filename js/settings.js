/**** Global Variables ***/
var txtlr="";
var txtrb="";
var txtdr="";
var txtbr="";
var txtbtr="";
var txtktn="";
var txtra="";
/*** Button Submition ***/
function submition(){
  var lr = document.getElementById("livingroom");
  var y=document.getElementById("roominput").value;
  var rb = document.getElementById("roomb");
  var dr = document.getElementById("diningroom");
  var br = document.getElementById("bedroom");
  var btr = document.getElementById("bathroom");
  var ktn = document.getElementById("kitchen");
  var ra = document.getElementById("rooma");
  if(lr.checked == true){
    txtlr=" Livingroom,";
  }
  if(rb.checked == true){
    txtrb=" Room B,";
  }
  if(dr.checked == true){
    txtdr=" Diningroom,";
  }
  if(br.checked == true){
    txtbr=" Bedroom,";
  }
  if(btr.checked == true){
    txtbtr=" Bathroom,";
  }
  if(ktn.checked == true){
    txtktn=" Kitchen,";
  }
  if(ra.checked == true){
    txtra=" Room A,";
  }
  document.getElementById("message").innerHTML = txtlr+ txtrb+ txtdr+ txtbr+txtktn+txtra+txtbtr+" changed to " + y;
  /** Clear global Varibles**/
  txtlr="";
  txtrb="";
  txtdr="";
  txtbr="";
  txtbtr="";
  txtktn="";
  txtra="";
}
/** Turn on button ***/
function turnOn(){
  var lr = document.getElementById("livingroom");
  var rb = document.getElementById("roomb");
  var dr = document.getElementById("diningroom");
  var br = document.getElementById("bedroom");
  var btr = document.getElementById("bathroom");
  var ktn = document.getElementById("kitchen");
  var ra = document.getElementById("rooma");
  if(lr.checked == true){
    txtlr=" Livingroom,";
  }
  if(rb.checked == true){
    txtrb=" Room B,";
  }
  if(dr.checked == true){
    txtdr=" Diningroom,";
  }
  if(br.checked == true){
    txtbr=" Bedroom,";
  }
  if(btr.checked == true){
    txtbtr=" Bathroom,";
  }
  if(ktn.checked == true){
    txtktn=" Kitchen,";
  }
  if(ra.checked == true){
    txtra=" Room A,";
  }

  alert(txtlr+ txtrb+ txtdr+ txtbr+txtktn+txtra+txtbtr+"turned on!");
}
/** Turn off button **/
function turnOff(){
  var lr = document.getElementById("livingroom");
  var rb = document.getElementById("roomb");
  var dr = document.getElementById("diningroom");
  var br = document.getElementById("bedroom");
  var btr = document.getElementById("bathroom");
  var ktn = document.getElementById("kitchen");
  var ra = document.getElementById("rooma");
  if(lr.checked == true){
    txtlr=" Livingroom,";
  }
  if(rb.checked == true){
    txtrb=" Room B,";
  }
  if(dr.checked == true){
    txtdr=" Diningroom,";
  }
  if(br.checked == true){
    txtbr=" Bedroom,";
  }
  if(btr.checked == true){
    txtbtr=" Bathroom,";
  }
  if(ktn.checked == true){
    txtktn=" Kitchen,";
  }
  if(ra.checked == true){
    txtra=" Room A,";
  }

  alert(txtlr+ txtrb+ txtdr+ txtbr+txtktn+txtra+txtbtr+" turned off!");
}
