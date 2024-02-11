const buttonHeight = 50;
const buttonWidth = 150;
const blkscreen = document.getElementById('cover');

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
	const songbutton = document.getElementById('songBtn');
	const button = document.getElementById('noBtn');
	const button2 = document.getElementById('yesBtn');
	const hostage = document.getElementById('hostage');
	const gun = document.getElementById('gun');
	const audio1 = new Audio("cockgun.mp3");
	const audio2 = new Audio("gunshot.mp3");
	const audio3 = new Audio("iwouldntmind.mp3");
	const audio4 = new Audio("theend.mp3");
	const blkscreen = document.getElementById('cover');
	const noEndtxt = document.getElementById('theEnd');
	let clickCount = 0;

	songbutton.addEventListener('click', () => {
		audio3.play();
	})

    button.addEventListener('click', () => {
        clickCount++;

		if (clickCount === 1) {
			alert('why');
		}
		else if (clickCount === 2) {
			alert('stop');
		}
		else if (clickCount === 3) {
			alert("don't do that");
		}
		else if (clickCount === 4) {
			alert('im warning you');
		}
		else if (clickCount === 5) {
			alert('DUDE');
		}
		else if (clickCount === 6) {
			alert('STOP')
		}
		else if (clickCount === 7) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 8) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 9) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 10) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 11) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 12) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 13) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 14) {
			button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
			button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
		}
		else if (clickCount === 15) {
			button.style.left = 920 + 'px';
			button.style.top = 400 + 'px';
			alert('?????');
		}
		else if (clickCount === 16) {
			button2.style.width = 40 + 'px';
			button2.style.height = 30 + 'px';
		}
		else if (clickCount === 17) {
			button2.style.width = 50 + 'px';
			button2.style.height = 40 + 'px';
		}
		else if (clickCount === 18) {
			button2.style.width = 60 + 'px';
			button2.style.height = 50 + 'px';
		}
		else if (clickCount === 19) {
			button2.style.width = 70 + 'px';
			button2.style.height = 60 + 'px';
		}
		else if (clickCount === 20) {
			button2.style.width = 80 + 'px';
			button2.style.height = 70 + 'px';
		}
		else if (clickCount === 21) {
			button2.style.width = 90 + 'px';
			button2.style.height = 80 + 'px';
			button.style.left = 930 + 'px';
		}
		else if (clickCount === 22) {
			button2.style.width = 100 + 'px';
			button2.style.height = 90 + 'px';
			button.style.left = 940 + 'px';
		}
		else if (clickCount === 23) {
			button2.style.width = 110 + 'px';
			button2.style.height = 100 + 'px';
			button.style.left = 950 + 'px';
		}
		else if (clickCount === 24) {
			button2.style.width = 130 + 'px';
			button2.style.height = 120 + 'px';
			button.style.left = 970 + 'px';
		}
		else if (clickCount === 25) {
			button2.style.width = 150 + 'px';
			button2.style.height = 140 + 'px';
			button.style.left = 990 + 'px';
		}
		else if (clickCount === 26) {
			button2.style.width = 200 + 'px';
			button2.style.height = 190 + 'px';
			button.style.left = 1040 + 'px';
		}
		else if (clickCount === 27) {
			button2.style.width = 300 + 'px';
			button2.style.height = 290 + 'px';
			button.style.left = 1140 + 'px';;
		}
		else if (clickCount === 28) {
			button2.style.width = 500 + 'px';
			button2.style.height = 490 + 'px';
			button.style.left = 1340 + 'px';
		}
		else if (clickCount === 29) {
			button2.style.width = 800 + 'px';
			button2.style.height = 550 + 'px';
			button.style.left = 1640 + 'px';
		}
		else if (clickCount === 30) {
			button.style.left = 940 + 'px';
			button.style.top = 400 + 'px';
			button2.style.width = 40 + 'px';
			button2.style.height = 23 + 'px';
			button2.style.left = 830 + 'px';
			button2.style.top = 400 + 'px';
			alert('wtf');
		}
		else if (clickCount === 31) {
			button.style.top = 3000 + 'px';
			alert("let's see you try and find it this time hehe")
		}
		else if (clickCount === 32) {
			button.style.top = 400 + 'px';
			alert('this is absurd.')
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
		else if (clickCount === 33) {
			alert("i didn't want to do this...");
		}
		else if (clickCount === 34) {
			alert("but you leave me with no choice...");
		}
		else if (clickCount === 35) {
			hostage.style.opacity = 1;
			gun.style.opacity = 1;
			alert("say. yes.");
		}
		else if (clickCount === 36) {
			alert("don't make me do this.");
			audio1.play();
		}
		else if (clickCount === 37) {
			alert("DON'T TEST ME");
		}
		else if (clickCount === 38) {
			alert("AHHHHHHHHHH");
		}
		else if (clickCount === 39) {
			alert("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
		}
		else if (clickCount === 40) {
			alert("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
			audio2.play();
			audio3.pause();
			blkscreen.style.opacity = 1;
			blkscreen.style.zIndex = 5;
			noEndtxt.style.opacity = 1;
			button2.style.zIndex = 6;
			button2.style.left = 900 + 'px';
			audio4.play();
		}
		


    });
});

var colour = "white"; // "random" can be replaced with any valid colour ie: "red"...
var sparkles = 500;// increase of decrease for number of sparkles falling

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

colours = new Array('#ff0000', '#00ff00', '#ffffff', '#ff00ff', '#ffa500', '#ffff00', '#00ff00', '#ffffff', 'ff00ff')

n = 10;
y = 0;
x = 0;
n6 = (document.getElementById && !document.all);
ns = (document.layers);
ie = (document.all);
d = (ns || ie) ? 'document.' : 'document.getElementById("';
a = (ns || n6) ? '' : 'all.';
n6r = (n6) ? '")' : '';
s = (ns) ? '' : '.style';

if (ns) {
	for (i = 0; i < n; i++)
		document.write('<layer name="dots' + i + '" top=0 left=0 width=' + i / 2 + ' height=' + i / 2 + ' bgcolor=#ff0000></layer>');
}

if (ie)
	document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

if (ie || n6) {
	for (i = 0; i < n; i++)
		document.write('<div id="dots' + i + '" style="position:absolute;top:0px;left:0px;width:' + i / 2 + 'px;height:' + i / 2 + 'px;background:#ff0000;font-size:' + i / 2 + '"></div>');
}

if (ie)
	document.write('</div></div>');
(ns || n6) ? window.captureEvents(Event.MOUSEMOVE) : 0;

function Mouse(evnt) {

	y = (ns || n6) ? evnt.pageY + 4 - window.pageYOffset : event.y + 4;
	x = (ns || n6) ? evnt.pageX + 1 : event.x + 1;
}

(ns) ? window.onMouseMove = Mouse : document.onmousemove = Mouse;

function animate() {

	o = (ns || n6) ? window.pageYOffset : 0;

	if (ie) con.style.top = document.body.scrollTop + 'px';

	for (i = 0; i < n; i++) {

		var temp1 = eval(d + a + "dots" + i + n6r + s);

		randcolours = colours[Math.floor(Math.random() * colours.length)];

		(ns) ? temp1.bgColor = randcolours : temp1.background = randcolours;

		if (i < n - 1) {

			var temp2 = eval(d + a + "dots" + (i + 1) + n6r + s);
			temp1.top = parseInt(temp2.top) + 'px';
			temp1.left = parseInt(temp2.left) + 'px';

		}
		else {

			temp1.top = y + o + 'px';
			temp1.left = x + 'px';
		}
	}

	setTimeout("animate()", 10);
}

animate();

window.onload = function () {
	if (document.getElementById) {
		var i, rats, rlef, rdow;
		for (var i = 0; i < sparkles; i++) {
			var rats = createDiv(3, 3);
			rats.style.visibility = "hidden";
			rats.style.zIndex = "999";
			document.body.appendChild(tiny[i] = rats);
			starv[i] = 0;
			tinyv[i] = 0;
			var rats = createDiv(5, 5);
			rats.style.backgroundColor = "transparent";
			rats.style.visibility = "hidden";
			rats.style.zIndex = "999";
			var rlef = createDiv(1, 5);
			var rdow = createDiv(5, 1);
			rats.appendChild(rlef);
			rats.appendChild(rdow);
			rlef.style.top = "2px";
			rlef.style.left = "0px";
			rdow.style.top = "0px";
			rdow.style.left = "2px";
			document.body.appendChild(star[i] = rats);
		}
		set_width();
		sparkle();
	}
}

function sparkle() {
	var c;
	if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
		ox = x;
		oy = y;
		for (c = 0; c < sparkles; c++) if (!starv[c]) {
			star[c].style.left = (starx[c] = x) + "px";
			star[c].style.top = (stary[c] = y + 1) + "px";
			star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
			star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;
			star[c].style.visibility = "visible";
			starv[c] = 50;
			break;
		}
	}
	for (c = 0; c < sparkles; c++) {
		if (starv[c]) update_star(c);
		if (tinyv[c]) update_tiny(c);
	}
	setTimeout("sparkle()", 40);
}

function update_star(i) {
	if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
	if (starv[i]) {
		stary[i] += 1 + Math.random() * 3;
		starx[i] += (i % 5 - 2) / 5;
		if (stary[i] < shigh + sdown) {
			star[i].style.top = stary[i] + "px";
			star[i].style.left = starx[i] + "px";
		}
		else {
			star[i].style.visibility = "hidden";
			starv[i] = 0;
			return;
		}
	}
	else {
		tinyv[i] = 50;
		tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
		tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
		tiny[i].style.width = "2px";
		tiny[i].style.height = "2px";
		tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
		star[i].style.visibility = "hidden";
		tiny[i].style.visibility = "visible"
	}
}

function update_tiny(i) {
	if (--tinyv[i] == 25) {
		tiny[i].style.width = "1px";
		tiny[i].style.height = "1px";
	}
	if (tinyv[i]) {
		tinyy[i] += 1 + Math.random() * 3;
		tinyx[i] += (i % 5 - 2) / 5;
		if (tinyy[i] < shigh + sdown) {
			tiny[i].style.top = tinyy[i] + "px";
			tiny[i].style.left = tinyx[i] + "px";
		}
		else {
			tiny[i].style.visibility = "hidden";
			tinyv[i] = 0;
			return;
		}
	}
	else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
	if (e) {
		y = e.pageY;
		x = e.pageX;
	}
	else {
		set_scroll();
		y = event.y + sdown;
		x = event.x + sleft;
	}
}

window.onscroll = set_scroll;
function set_scroll() {
	if (typeof (self.pageYOffset) == 'number') {
		sdown = self.pageYOffset;
		sleft = self.pageXOffset;
	}
	else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		sdown = document.body.scrollTop;
		sleft = document.body.scrollLeft;
	}
	else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		sleft = document.documentElement.scrollLeft;
		sdown = document.documentElement.scrollTop;
	}
	else {
		sdown = 0;
		sleft = 0;
	}
}

window.onresize = set_width;
function set_width() {
	var sw_min = 999999;
	var sh_min = 999999;
	if (document.documentElement && document.documentElement.clientWidth) {
		if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
		if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
	}
	if (typeof (self.innerWidth) == 'number' && self.innerWidth) {
		if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
		if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
	}
	if (document.body.clientWidth) {
		if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
		if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
	}
	if (sw_min == 999999 || sh_min == 999999) {
		sw_min = 800;
		sh_min = 600;
	}
	swide = sw_min;
	shigh = sh_min;
}

function createDiv(height, width) {
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.height = height + "px";
	div.style.width = width + "px";
	div.style.overflow = "hidden";
	return (div);
}

function newColour() {
	var c = new Array();
	c[0] = 255;
	c[1] = Math.floor(Math.random() * 256);
	c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
	c.sort(function () { return (0.5 - Math.random()); });
	return ("rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")");
}
// ]]>

