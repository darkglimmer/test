function parseQuery(query){
    for(var i=0;i<query.length;i++){
      if(query[i]=='&'&&i==(query.length-1)){
        query[i]=":\"\"";
      }
      else{
        if(query[i]=='='){
          query[i]=":\"";
        }
        else if(query[i]=='&'){
          query[i]="\",";
        }
      }
    }
    document.write("{");
    for(var j=0;j<query.length;j++){
      document.write(query[i]);
    }
    document.write("}");
  }
   var jerry = parseQuery("name=jerry&age=1");
   var tom = parseQuery("name=tom&age=12&gender&");





// function parseQuery(query){
//   var a=query.split("&");
//   for(var i in a){
//     if(a[i]=="="){
//       a[i]=":'";
//       document.write(a[i]);
//       }
//     else{
//        document.write(a[i]);
//     }
//   }
//   document.write("<br>")
// }
//  var jerry = parseQuery("name = jerry & age = 1");
//  jerry;
//  var tom = parseQuery("name = tom & age = 12 & gender &");
//  tom;
    