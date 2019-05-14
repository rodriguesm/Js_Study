var botaoBuscar = document.querySelector("#busca-pacientes");

botaoBuscar.addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener("load", function(){
		
		var resposta = xhr.responseText;
		if (xhr.status ==200){
			
			var pacientes = JSON.parse(resposta);
			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});			
		} else {
			console.log(xhr.status)
			var mensagemErro = document.querySelector("#erro-ajax");
			mensagemErro.classList.remove("invisivel");
		}
		

	});
	
	xhr.send();
});