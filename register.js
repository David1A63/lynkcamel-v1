const register = document.getElementById('register');
const inputs = document.querySelectorAll('# register input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    fecha: /^\d{4}-\d{2}-\d{2}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
    password2: /^.{4,12}$/, // 4 a 12 digitos.
	
}

const campos = {
	nombre: false,
    apellido: false,
    fecha: false,
	correo: false,
	password: false,
    password2: false,

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.nombre, e.target, 'name');
		break;
        case "lastname":
			validarCampo(expresiones.apellido, e.target, 'lastname');
		break;
        case "birth":
			validarCampo(expresiones.fecha, e.target, 'birth');
		break;
        case "emailInput":
			validarCampo(expresiones.correo, e.target, 'emailInput');
		break;
		case "passwordInput":
			validarCampo(expresiones.password, e.target, 'passwordInput');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById('mb-3').classList.remove('mb-3');
        document.getElementById('${campo}').classList.add('mb-3');
		document.querySelector('${campo} i').classList.add('fa-check-circle');
		document.querySelector('${campo} i').classList.remove('fa-times-circle');
        document.querySelector('${campo} .formulario__input-error').classList.remove('mb-3');
		campos[campo] = true;
	} else {
		document.getElementById('${campo}').classList.add('mb-3');
		document.getElementById('${campo}').classList.remove('mb-3');
		document.querySelector('${campo} i').classList.add('fa-times-circle');
		document.querySelector('${campo} i').classList.remove('fa-check-circle');
		document.querySelector('${campo} .formulario__input-error').classList.add('mb-3');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('passwordInput');
	const inputPassword2 = document.getElementById('password-confirm');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById('ppassword-confirm').classList.add('register__grupo-incorrecto');
		document.getElementById('password-confirm').classList.remove('register__grupo-correcto');
		document.querySelector('password-confirm i').classList.add('fa-times-circle');
		document.querySelector('password-confirm i').classList.remove('fa-check-circle');
		document.querySelector('password-confirm .formulario__input-error').classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById('password-confirm').classList.remove('register__grupo-incorrecto');
		document.getElementById('password-confirm').classList.add('register__grupo-correcto');
		document.querySelector('password-confirm i').classList.remove('fa-times-circle');
		document.querySelector('password-confirm i').classList.add('fa-check-circle');
		document.querySelector('password-confirm .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);

});
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.fecha && campos.correo && campos.correo && campos.password ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
