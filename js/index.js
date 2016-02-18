window.onload=function(){
	var canvas=document.querySelector('#canvas');
	var ctx=canvas.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(20,20.5);
	ctx.lineTo(580,20.5);

	var y=0;
	for (var i = 0; i < 14; i++) {
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
	ctx.arc(460.5,140.5,3,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(300.5,300.5,3,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(140.5,140.5,3,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(460.5,460.5,3,0,Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(140.5,460.5,3,0,Math.PI*2);
	ctx.fill();
}