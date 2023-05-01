const login = document.getElementById('login');
const inputs = document.querySelectorAll('# login input');

const expresiones ={
    email:/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){ 

        document.getElementById(`mb-3`).classList.remove('mb-3')
        document.getElementById(`mb-3`).classList.add('mb-3')

    }else {
        document.getElementById(`mb-3`).classList.add('mb-3')
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);

});

formulario.addEventListener( 'submit', (e) => {
    e.preventDefault();
});