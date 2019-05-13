
var titulo= document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];
	
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");

	var alturaValida = validaAltura(altura);
	var pesoValido = validaPeso(peso)

	if (!alturaValida){
		tdAltura.textContent = "Altura Inválida!";	
	}

	if (!pesoValido){
		tdPeso.textContent = "Peso Inválido";
	}

	if (pesoValido && alturaValida){
		tdImc.textContent = calculaImc(peso,altura)
	} else {
		tdImc.textContent = "Altura e/ou Peso inválidos!";
		paciente.classList.add("paciente-invalido");
	}

}

function calculaImc (peso, altura){
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if (peso > 0 && peso <=500){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if (altura > 0 && altura < 3){
		return true;
	} else {
		return false;
	}
}