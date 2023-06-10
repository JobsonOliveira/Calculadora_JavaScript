			let NumAtual = [];
			let NumAnterior = [];
			NumAtual = document.querySelector("#caractere_atual");
			NumAnterior = document.querySelector("#caractere_anterio");
			let arrayNumAtual = []
			let operacao = ""
			
			/*--ADICIONAR OS CARACTERES NA TELA--*/
			function addCaractere(caractere){
				//VERIFICA SE JÁ TEM UM PONTO NO NUMERO DIGITADO E SE JÁ FOI DIGITADO ALGUM NÚMERO ANTES DELE
				if(((caractere == '.') && (arrayNumAtual.length == 0)) || ((caractere == '.') && (arrayNumAtual.includes('.')))){
					return;
				}else{
					if((NumAnterior != '') && (NumAnterior.includes(operacao))){
						alert(NumAtual);
						arrayNumAtual += caractere;
						NumAtual.innerText = arrayNumAtual;						
					}else{
						alert(NumAtual);
						NumAnterior.innerText += ` ${operacao}`;	
						arrayNumAtual += caractere;
						NumAtual.innerText = arrayNumAtual;
					}			
				}
			}
			
			//ADICIONAR OS OPERADORES
			function addOperacao(operador){
				//SE O NENHU NÚMERO FOI DIGITADO OU SE JÁ FOI DIGITADO O MESMO OPERADOR
				if((arrayNumAtual == "") || (operacao.includes(operador))){
					return;
				}
				//SE FOI DIGITADO UM NÚMERO A NÃO DIGITADO O OPERADOR
				else{
					NumAnterior.innerText = arrayNumAtual;
					NumAtual.innerText = operador;
					arrayNumAtual = ""
					operacao = operador;
				}
			}
			
			//APAGAR O ULTIMO CARACTERE		
			let btnApagar = document.querySelector("#deletar").addEventListener('click', () => {
				alert('js');
			});