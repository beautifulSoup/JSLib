var xmlHttp;

//获得xmlhttp 对象的函数
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
	catch (e)
 {
 //Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
	return xmlHttp;
}


//发送ajax get请求的函数
function AjaxGetFunc(str)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
 	{
 		alert ("Browser does not support HTTP Request")
 		return
 	}
	var url="getuser.php";  //填入地址
	url=url+"?q="+str;    //加上参数
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=function(){ 
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 		{ 
			alert(xmlHttp.responseText);
    		location.reload(true);
 		} 
	};

	 //添加回调函数 
	xmlHttp.open("GET",url,true);  //发送get请求
	xmlHttp.send(null);
}


function AjaxPostFunc(url)
{

	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
 	{
 		alert ("Browser does not support HTTP Request")
 		return
 	}
	var url="getuser.php";  //填入地址
  	xmlHttp.onreadystatechange=function(){
   		if(xmlHttp.readyState==4 && xmlHttp.status==200){
    		alert(xmlHttp.responseText);
    		location.reload(true);
    
   		}
 	};
 	data = "id=10";
 	xmlHttp.open("POST", url, true);
  	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	//Post 方法需要添加文件头。
  	xmlHttp.send(data);
}




