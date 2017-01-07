var data = {
  name : ['dap','sahil','gaurav','komal','karan'],
  sub1 : [11,12,13,14,15],
  sub2 : [21,22,23,24,25],
  sub3 : [31,32,33,34,35],
  sub4 : [41,42,43,44,45],
  sub5 : [51,52,53,54,55]
};

var body = document.getElementsByTagName('body')[0];
(function CreateTable() {

    var tbl = document.createElement('table');
    tbl.id = 'daptable';
    var tbdy = document.createElement('tbody');
    var prop = Object.getOwnPropertyNames(data);

    for(var i=0;i<data["name"].length + 1;i++){
          var tr = document.createElement('tr');
          for (var j = 0; j<Object.keys(data).length ; j++) {
              var td = document.createElement('td');
              if(i===0){
                td.appendChild(document.createTextNode(prop[j]));
              }else{
                if(j === 0){
                  td.appendChild(document.createTextNode(data["name"][i-1]));
                }else{
                  td.appendChild(document.createTextNode(data["sub"+j][i-1]));
                }
              }
                tr.appendChild(td);
          }
          tbdy.appendChild(tr);
    }

   tbl.appendChild(tbdy);
    body.appendChild(tbl);
})();



    function appendColumn() {
    var tbl = document.getElementById('daptable'),i;

    for (i = 0; i < tbl.rows.length; i++) {
        tbl.rows[i].insertCell(tbl.rows[i].cells.length );
      //tbl.rows[i].insertCell(data["name"].lengths);
    }
    //}
    }

    function GetTotal(){
      var tab = document.getElementById('daptable');//
      var arr =[];
      for(var i =1; i<Object.keys(data).length ;i++){
        var  x=0;
        for(var j = 0; j < data["name"].length ; j++){
          //x += parseInt(tab.rows[i].cells[j].innerHTML);
          x+=data["sub"+(j+1)][i-1];
          //  tab.rows[i].cells[5].innerHTML = x; do not delete it
        }
        arr.push(x);

      }

      appendColumn();


      tab.rows[0].cells[6].innerHTML = 'total';
      for(var i =1; i<Object.keys(data).length ;i++){
          tab.rows[i].cells[6].innerHTML = arr[i-1];
      }

    this.disabled = true;
    btn1.disabled = false;



    }

    function GetPerc(){
      var tab = document.getElementById('daptable');
        appendColumn();

        tab.rows[0].cells[7].innerHTML = '%';
        for(var i =1; i<Object.keys(data).length ;i++){
            tab.rows[i].cells[7].innerHTML = parseInt(tab.rows[i].cells[6].innerHTML)/5;
        }
        this.disabled = true;

    }


    var btn = document.createElement("BUTTON");
    btn.id = 'total';
    btn.innerHTML = 'total';
    btn.onclick = GetTotal;
    document.body.appendChild(btn);

    var btn1 = document.createElement("BUTTON");
    btn1.id = 'Perc';
    btn1.innerHTML = 'Perc(%)';
    btn1.onclick = GetPerc;
    btn1.disabled = true;
    document.body.appendChild(btn1);
