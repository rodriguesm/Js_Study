
var botaoAdiciona = document.querySelector("#adicionar-paciente");

function obtemPacienteFormulario(formulario){
	
	var paciente = {
		nome: formulario.nome.value,
		peso: formulario.peso.value,
		altura: formulario.altura.value,
		gordura: formulario.gordura.value,
		imc: calculaImc(formulario.peso.value, formulario.altura.value)
	}
	
	return paciente;
}

function montaTd(dado, classe){
	
	var td = document.createElement("td")
	td.classList.add(classe);
	td.textContent = dado;
	return td;
	
}

function criaTr(paciente){
	
	var tr = document.createElement("tr");
	tr.classList.add("paciente");
	
	tr.appendChild(montaTd(paciente.nome, "info-nome"));
	tr.appendChild(montaTd(paciente.peso, "info-peso"));
	tr.appendChild(montaTd(paciente.altura, "info-altura"));
	tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	tr.appendChild(montaTd(paciente.imc, "info-imc"));
	
	return tr;
	
}

function validaPaciente(paciente){
	var erros = [];
	
	if (paciente.nome.length == 0){
		erros.push("Nome do paciente não pode ficar em branco");
	} 
	
	if (paciente.peso.length == 0){
		erros.push("Peso em branco");
	} else if (!validaPeso(paciente.peso)){
		erros.push("Peso inválido");
	}
	
	if (paciente.altura.length == 0){
		erros.push("Altura em branco");
	} else if (!validaAltura(paciente.altura)){
		erros.push("Altura inválida");
	}
	
	if (paciente.gordura.length == 0){
		erros.push("% de gordura em branco");
	}
	
	
	return erros;
	
}

function exibeMensagemDeErro(erros){
	var ul = document.querySelector(".mensagens-erro");
	ul.innerHTML = "";
	
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}


botaoAdiciona.addEventListener("click",function(event){
	
	event.preventDefault();
	var formulario = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteFormulario(formulario);
	var erros = validaPaciente(paciente);
	if (erros.length > 0) {
		exibeMensagemDeErro(erros);
		return;
	}	
	var trPaciente = criaTr(paciente);
	

	var tabelaPaciente = document.querySelector("#tabela-pacientes");
	tabelaPaciente.appendChild(trPaciente);
	
	var limpaErro = document.querySelector(".mensagens-erro");
	limpaErro.innerHTML = "";
	
	formulario.reset();
	
	
});

