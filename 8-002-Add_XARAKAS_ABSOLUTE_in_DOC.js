// script ----- add XARAKA ---  invoked as ' addXaraka2(top pixels) '
	
	var addBoxes2 = function(i,x,y) {                  
		var para = document.createElement("div");
		var ident = y+i;
		var styling  = " width:19px; ";
			styling += " height:13px; ";
			styling += " background-color:aqua; ";     //  aqua
			styling += " float:left; ";
			styling += " border-right:solid 1px black; ";
			styling += " padding:0px; ";
			styling += " padding-top:2px; ";
			styling += " margin:0px; ";
			styling += " font-size: 10px; ";
			styling += " text-align:center; ";
		
		para.setAttribute('id', ident);
		para.setAttribute('style',styling );		
		
		document.getElementById(x).appendChild(para);

		var tex = document.createTextNode(i*20);
		document.getElementById(ident).appendChild(tex);
	}
	
	var addXaraka2 = function(i){         // xarakFunction
		var para = document.createElement("div");
		var styling  = " position:absolute; ";          // absolute
			styling += " left:0px; ";
			styling += " top:" + i + "px; ";
			styling += " border:0px solid black; ";
			styling += " margin-top:10px; ";
			styling += " padding:0px; ";
			styling += " margin:0px; ";
			styling += " height:15px; ";
			styling += " width:4000px ";
		
		para.setAttribute('id', 'xarak2');
		para.setAttribute('style', styling );
		document.body.appendChild(para);
		
		for (i =1 ; i<78 ; i++){ addBoxes2(i,'xarak2','w'); }
		
	}

    //addXaraka2(450); 
	//alert (document.childNodes[1].childNodes[2].id)

/////////////////////////////////////////