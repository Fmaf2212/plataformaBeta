﻿const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario #password2');
/*
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
*/
const campos = {
	password: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password":			
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value || inputPassword1.value == '') {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');//icono incorrecto
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');//icono correcto
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password`).classList.add('formulario__grupo-correcto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);	
});




function mostrarContrasena() {
	var tipo = document.getElementById("password");
	var ojito1 = document.getElementById("ojito1");
	if (tipo.type == "password") {
		tipo.type = "text";
		ojito1.style.filter = "drop-shadow(0px 0px 10px blue)"

	} else {
		tipo.type = "password";
		ojito1.style.filter = "none"
	}
}
function mostrarContrasena2() {
	var tipo = document.getElementById("password2");
	var ojito2 = document.getElementById("ojito2");
	if (tipo.type == "password") {
		tipo.type = "text";
		ojito2.style.filter = "drop-shadow(0px 0px 10px blue)"
	} else {
		tipo.type = "password";
		ojito2.style.filter = "none"
	}
}

const btnOjitos1 = document.getElementById('btnOjitos1');
btnOjitos1.addEventListener('click', toggleShowPasswordPreRegistro);

function toggleShowPasswordPreRegistro() {
	const passwordField = document.getElementById("password");
	const eyeIcon = document.getElementById("eyeIcon");

	if (passwordField.type === "password") {
		passwordField.type = "text";
		// Cambia al icono de "ojo tachado"
		eyeIcon.innerHTML = `
            <rect id="Icons" x="-960" y="-256" width="1280" height="800" style="fill: none"></rect>
            <g id="Icons1">
                <g id="eye-slash">
                    <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"></path>
                    <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" style="fill-rule: nonzero"></path>
                    <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 -0.001,0.099 -0.002,0.148l-8.163,-8.163Z" style="fill-rule: nonzero"></path>
                </g>
            </g>
        `;
	} else {
		passwordField.type = "password";
		// Cambia al icono de "ojo abierto"
		eyeIcon.innerHTML = `
            <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
            <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
        `;
	}
}

const btnOjitos2 = document.getElementById('btnOjitos2');
btnOjitos2.addEventListener('click', toggleShowPasswordPreRegistro2);

function toggleShowPasswordPreRegistro2() {
	const passwordField2 = document.getElementById("password2");
	const eyeIcon2 = document.getElementById("eyeIcon2");

	if (passwordField2.type === "password") {
		passwordField2.type = "text";
		// Cambia al icono de "ojo tachado"
		eyeIcon2.innerHTML = `
	        <rect id="Icons" x="-960" y="-256" width="1280" height="800" style="fill: none"></rect>
	        <g id="Icons1">
	            <g id="eye-slash">
	                <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"></path>
	                <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" style="fill-rule: nonzero"></path>
	                <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 -0.001,0.099 -0.002,0.148l-8.163,-8.163Z" style="fill-rule: nonzero"></path>
	            </g>
	        </g>
	    `;
	} else {
		passwordField2.type = "password";
		eyeIcon2.innerHTML = `
	        <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
	        <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
	    `;
	}
}

