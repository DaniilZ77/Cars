let burger=document.querySelector(".burger");
let navbar=document.querySelector(".navbar");
let nav=document.querySelector(".nav");
let close=document.querySelector(".close");
let body=document.querySelector("body");
let form_wrapper=document.querySelector(".form-wrapper");
let form_container=document.querySelector(".form-container");
burger.onclick=function() {
	navbar.classList.toggle("active");
	body.classList.toggle("block");
	window.scroll({
		left: 0,
		top: 0
	});
}
close.onclick=function() {
	navbar.classList.toggle("active");
	body.classList.toggle("block");
}
let request=document.createElement("li");
let width=document.createElement("span");
width.classList="full-screen";
request.innerHTML="<a href=\"#\">REQUEST A QUOTE</a>";
request.classList="nav-item";
if (body.clientWidth<=768) {
	nav.append(request);
	form_wrapper.prepend(width);
}
window.onresize=function() {
	if (body.clientWidth<=768) {
		nav.append(request);
		form_wrapper.prepend(width);
		navbar.style.transitionProperty="all";
		form_container.style.transitionProperty="all";
	}
	else {
		navbar.style.transitionProperty="none";
		form_container.style.transitionProperty="none";
		request.remove();
		if (document.querySelector(".full-screen")) {
			if (width.classList.contains("active")) {
				width.classList.remove("active");
			}
			width.remove();
		}
		if (body.classList.contains("block")) {
			body.classList.remove("block");
		}
		if (navbar.classList.contains("active")) {
			navbar.classList.remove("active");
		}
		if (form_container.classList.contains("active")) {
			form_container.classList.remove("active");
		}
	}
}
request.onclick=function() {
	form_container.classList.add("active");
	width.classList.add("active");
}
width.onclick=function() {
	form_container.classList.remove("active");
	width.classList.remove("active");
}