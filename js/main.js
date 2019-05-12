window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if (scroll<2000 && scroll>1000) {
    	document.getElementById('s2').style.marginLeft = "0vw";
    	document.getElementById('s3').style.marginLeft = "150vw";
    	document.getElementById('s4').style.marginLeft = "150vw";
    	document.getElementById('intro').style.opacity = "0.6";
    	document.getElementById('ed').style.opacity = "1";
    	document.getElementById('ex').style.opacity = "0.6";
    	document.getElementById('art').style.opacity = "0.6";
    }
    else if (scroll<3000 && scroll>2000) {
    	document.getElementById('s3').style.marginLeft = "0vw";
    	document.getElementById('s2').style.marginLeft = "0vw";
    	document.getElementById('s2').style.marginRight = "150vw";
    	document.getElementById('s4').style.marginLeft = "150vw";
    	document.getElementById('intro').style.opacity = "0.6";
    	document.getElementById('ed').style.opacity = "0.6";
    	document.getElementById('ex').style.opacity = "1";
    	document.getElementById('art').style.opacity = "0.6";
    }
    else if (scroll>3000) {
    	document.getElementById('s4').style.marginLeft = "0vw";
    	document.getElementById('s3').style.marginLeft = "0vw";
    	document.getElementById('s3').style.marginRight = "150vw";
    	document.getElementById('intro').style.opacity = "0.6";
    	document.getElementById('ed').style.opacity = "0.6";
    	document.getElementById('ex').style.opacity = "0.6";
    	document.getElementById('art').style.opacity = "1";
    }
    else if (scroll<1000) {
    	document.getElementById('s3').style.marginLeft = "150vw";
    	document.getElementById('s4').style.marginLeft = "150vw";
    	document.getElementById('s2').style.marginLeft = "150vw";
    	document.getElementById('intro').style.opacity = "1";
    	document.getElementById('ed').style.opacity = "0.6";
    	document.getElementById('ex').style.opacity = "0.6";
    	document.getElementById('art').style.opacity = "0.6";
    }
});

document.getElementById('t7arekbut').addEventListener("click", function(event){
	document.getElementById('t7arekbut').style.opacity="1";
	document.getElementById('aiesecbut').style.opacity="0.5";
	document.getElementById('iidbut').style.opacity="0.5";
	document.getElementById('hpbut').style.opacity="0.5";
	document.getElementById('ncbut').style.opacity="0.5";
	document.getElementById('t7arektxt').style.display="block";
	document.getElementById('aiesectxt').style.display="none";
	document.getElementById('iidtxt').style.display="none";
	document.getElementById('hptxt').style.display="none";
	document.getElementById('nctxt').style.display="none";
});
document.getElementById('aiesecbut').addEventListener("click", function(event){
	document.getElementById('t7arekbut').style.opacity="0.5";
	document.getElementById('aiesecbut').style.opacity="1";
	document.getElementById('iidbut').style.opacity="0.5";
	document.getElementById('hpbut').style.opacity="0.5";
	document.getElementById('ncbut').style.opacity="0.5";
	document.getElementById('t7arektxt').style.display="none";
	document.getElementById('aiesectxt').style.display="block";
	document.getElementById('iidtxt').style.display="none";
	document.getElementById('hptxt').style.display="none";
	document.getElementById('nctxt').style.display="none";
});
document.getElementById('iidbut').addEventListener("click", function(event){
	document.getElementById('t7arekbut').style.opacity="0.5";
	document.getElementById('aiesecbut').style.opacity="0.5";
	document.getElementById('iidbut').style.opacity="1";
	document.getElementById('hpbut').style.opacity="0.5";
	document.getElementById('ncbut').style.opacity="0.5";
	document.getElementById('t7arektxt').style.display="none";
	document.getElementById('aiesectxt').style.display="none";
	document.getElementById('iidtxt').style.display="block";
	document.getElementById('hptxt').style.display="none";
	document.getElementById('nctxt').style.display="none";
});
document.getElementById('hpbut').addEventListener("click", function(event){
	document.getElementById('t7arekbut').style.opacity="0.5";
	document.getElementById('aiesecbut').style.opacity="0.5";
	document.getElementById('iidbut').style.opacity="0.5";
	document.getElementById('hpbut').style.opacity="1";
	document.getElementById('ncbut').style.opacity="0.5";
	document.getElementById('t7arektxt').style.display="none";
	document.getElementById('aiesectxt').style.display="none";
	document.getElementById('iidtxt').style.display="none";
	document.getElementById('hptxt').style.display="block";
	document.getElementById('nctxt').style.display="none";
});
document.getElementById('ncbut').addEventListener("click", function(event){
	document.getElementById('t7arekbut').style.opacity="0.5";
	document.getElementById('aiesecbut').style.opacity="0.5";
	document.getElementById('iidbut').style.opacity="0.5";
	document.getElementById('hpbut').style.opacity="0.5";
	document.getElementById('ncbut').style.opacity="1";
	document.getElementById('t7arektxt').style.display="none";
	document.getElementById('aiesectxt').style.display="none";
	document.getElementById('iidtxt').style.display="none";
	document.getElementById('hptxt').style.display="none";
	document.getElementById('nctxt').style.display="block";
});