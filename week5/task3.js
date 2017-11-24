function parseQuery(query){
  query+="\"";
  if(query[query.length]=="&"){
    a=query.substring(0,query.length-1);
    b=a+":\"\"";
  }
  else{
    b=query;
  }
  s=b.replace(/=/g, ":\"");
  ss=(s.replace(/&/g,"\"&")).split("&"); 
  document.write(ss);
  document.write("<br>");
}




var jerry = parseQuery("name=jerry&age=1");
var tom = parseQuery("name=tom&age=12&gender&");