window.onload=function(){
	var canvas=document.querySelector('#canvas');
	var ctx=canvas.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(20,20.5);
	ctx.lineTo(580,20.5);

	ctx.strokeStyle="blue";
	ctx.fillStyle="black";
	var y=0;
	for (var i=0;i<14;i++) {
		y+=40;
		ctx.moveTo(20,20.5+y);
		ctx.lineTo(580,20.5+y);
	};
	ctx.stroke();
	ctx.beginPath();

	ctx.moveTo(20.5,20);
	ctx.lineTo(20.5,580);
	var x=0;
	for(var i=0;i<14;i++){
		x+=40;
		ctx.moveTo(20.5+x,20);
		ctx.lineTo(20.5+x,580);
	}
	ctx.stroke();
	ctx.beginPath();

	ctx.beginPath();
	ctx.arc(460.5,140.5,4,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(300.5,300.5,4,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(140.5,140.5,4,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(460.5,460.5,4,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(140.5,460.5,4,0,Math.PI*2);
	ctx.fill();

/*
	var lingrad=ctx.createLinearGradient(20,300,580,300);
	lingrad.addColorStop(0,'red');
	lingrad.addColorStop(0.2,'orange');
	lingrad.addColorStop(0.4,'yellow');
	lingrad.addColorStop(0.6,'green');
	lingrad.addColorStop(0.8,'blue');
	lingrad.addColorStop(1,'purple');



	ctx.lineWidth=4;
	ctx.lineCap='round';
	ctx.strokeStyle=lingrad;
	ctx.fillStyle=lingrad;
	//ctx.fillPath();
	ctx.beginPath();
	ctx.moveTo(20,300);
	ctx.lineTo(580,300);
	ctx.stroke();
*/



	var luozi=function(x,y,color){
		var zx=40*x+20.5;
		var zy=40*y+20.5;
		var black=ctx.createRadialGradient(zx,zy,1,zx,zy,18);
		black.addColorStop(0.1,'#555');
		black.addColorStop(1,'black');
		var white=ctx.createRadialGradient(zx,zy,1,zx,zy,18);
		white.addColorStop(0.1,'#fff');
		white.addColorStop(1,'#ccc');
		ctx.fillStyle=color?black:white;
		ctx.beginPath();
		ctx.arc(zx,zy,18,0,Math.PI*2);
		ctx.fill();
	}


	var qizi={};

	var kaiguan=true;
	canvas.onclick=function(e){
		var x=Math.round((e.offsetX-20.5)/40);
		var y=Math.round((e.offsetY-20.5)/40);

		if(qizi[x+'_'+y]){return;}
		
		luozi(x,y,kaiguan);

		qizi[x+'_'+y]=kaiguan?'black':'white';
		kaiguan=!kaiguan;
		

		localStorage.data=JSON.stringify(qizi);
	}

	if(localStorage.data){
		qizi=JSON.parse(localStorage.data);
		for(var i in qizi){
			var x=i.split('_')[0];
			var y=i.split('_')[1];
			luozi(x,y,qizi[i]=='black');
		}
	}


	canvas.ondblclick=function(ev){
		ev.stopPropagation();
	}
	document.ondblclick=function(){
		localStorage.clear();
		location.reload();
	}


}