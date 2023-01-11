var apilink="https://63beb7e0585bedcb36b4dedf.mockapi.io/partnersNight";


var datachanger = {

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
    if(htmlEncode($("#pass").val())=="1111"){
        return show('Page2','Page1');
    }
  }


  function goqr(){




    let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false });
  Instascan.Camera.getCameras().then(cameras => {
    scanner.camera = cameras[cameras.length - 1];
    scanner.start();
  }).catch(e => console.error(e));

  scanner.addListener('scan', content => {
    console.log(content);



    console.log(content);



    $(document).ready(function () {

     $.getJSON(apilink, 
         function (data) {
             
             $.each(data, function (key, value) {
                 if(content==value.id){
                 value.present = true;

                 
                 datachanger.name=value.name;
                 datachanger.present=value.present;
                 datachanger.id=value.id;

                 pname= value.name;
                 
                 console.log(pname);
                 document.getElementById("welcome1").innerHTML = pname;
                
                 }
         });
         axios.put(apilink+`${datachanger.id}`, datachanger);
   });
 });
 console.log(datachanger);
 




     show('Page5','Page3');
    



     scanner.stop();



  });
   




    return show('Page3','Page2');

   
  }


  function listsee(){
    for (let i = 0; i < 100; i++) {
        $('#table :first').detach();
    }
   
    
    $(document).ready(function () {
   
        $.getJSON(apilink, 
            function (data) {
          var student = '';
          console.log(data);
          student+=" <tr>  <th>Atendance </th>  <th>Atendance</th> </tr>";
          count++;
          $.each(data, function (key, value) {
 
            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            
    
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



