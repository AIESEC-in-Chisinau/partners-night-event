var datachanger = {
    companianame: '',
    name: '',
    present: '',
    id: '',
    }
    var count=0;
    var pname='';
    var pcom='';
var kindadatabase ='';
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
  }


  function htmlEncode (value){
    return $('<div/>').text(value).html();
  }

  function loginpassed (){
    console.log("looged in");
    if(htmlEncode($("#pass").val())=="111"){
        return show('Page2','Page1');
    }
  }


  function goqr(){

    
    var scanner = new Instascan.Scanner({
        video: document.getElementById("preview"),
        scanPeriod: 5,
        mirror: false
      });
      scanner.addListener("scan", function (content) {
       console.log(content);



       $(document).ready(function () {
   
        $.getJSON("https://638e3526aefc455fb2b829e2.mockapi.io/presence", 
            function (data) {
                
                $.each(data, function (key, value) {
                    if(content==value.id){
                    value.present = true;

                    datachanger.companianame= value.companianame;
                    datachanger.name=value.name;
                    datachanger.present=value.present;
                    datachanger.id=value.id;

                    pname= value.name;
                    pcom= value.companianame;
                    console.log(pname,pcom);
                    document.getElementById("welcome1").innerHTML = pname;
                    document.getElementById("welcome2").innerHTML = pcom;
                    }
            });
            axios.put(`https://638e3526aefc455fb2b829e2.mockapi.io/presence/${datachanger.id}`, datachanger);
      });
    });
    console.log(datachanger);
    
   



        show('Page5','Page3');
       
 


        scanner.stop();
        
        //window.location.href=content;
      });
      Instascan.Camera.getCameras()
        .then(function (cameras) {
          if (cameras.length > 0) {
            scanner.start(cameras[0]);
            $('[name="options"]').on("change", function () {
              if ($(this).val() == 1) {
                if (cameras[0] != "") {
                  scanner.start(cameras[0]);
                } else {
                  alert("No Front camera found!");
                }
              } else if ($(this).val() == 2) {
                if (cameras[1] != "") {
                  scanner.start(cameras[1]);
                } else {
                  alert("No Back camera found!");
                }
              }
            });
          } else {
            console.error("No cameras found.");
            alert("No cameras found.");
          }
        })
        .catch(function (e) {
          console.error(e);
          alert(e);
        });
    return show('Page3','Page2');

   
  }


  function listsee(){
    for (let i = 0; i < 100; i++) {
        $('#table :first').detach();
    }
   
    
    $(document).ready(function () {
   
        $.getJSON("https://638e3526aefc455fb2b829e2.mockapi.io/presence", 
            function (data) {
          var student = '';
          console.log(data);
          student+=" <tr> <th>Company Name</th>  <th>Atendance Name</th>  <th>Atendance</th> </tr>";
          count++;
          $.each(data, function (key, value) {
 
            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' +
              value.companianame + '</td>';
    
            student += '<td>' +
              value.name + '</td>';
    
            student += '<td>' +
              value.present + '</td>';
    
              idd= value.id;
            student += '</tr>';
            
          });

          $('#table').append(student);
         
       
    
        });
      });
      return show('Page4','Page2');
      
  }



