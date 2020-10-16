const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
var getNavID = document.getElementById("nav-id");

hamburger.addEventListener('click',()=>{
    
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
	getNavID.style.width="100vw";
	
	
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

var lis= document.getElementById("nav-id").getElementsByTagName('li');

for(var i=0; i<lis.length;i++){
	lis[i].addEventListener('click', hideNavBar, false);
}

function hideNavBar(){
	
	getNavID.style.width="0";
	hamburger.classList.toggle('active',false);
	mobile_menu.classList.toggle('active', false);
	
}