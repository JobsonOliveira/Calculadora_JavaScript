let NumAtual = document.querySelector("#caractere_atual");
let NumAnterior = document.querySelector("#caractere_anterio");
let arrayNumAtual = []
let arrayNumAnterior = []
let arrayTodaOperacao = []
let operacao = ""

/*--ADICIONAR OS CARACTERES NA TELA--*/
function addCaractere(caractere){
	//VERIFICA SE JÁ TEM UM PONTO NO NUMERO DIGITADO E SE JÁ FOI DIGITADO ALGUM NÚMERO ANTES DELE
	if(((caractere == '.') && (arrayNumAtual.length == 0)) || ((caractere == '.') && (arrayNumAtual.includes('.')))){
		return;
				}
	//ADICIONAR OS CARACTERES
	else{
			//QUALDO NÃO TIVER SIDO DIGITADO UM OPERADOR
			if((operacao != '+') && (operacao != '-') && (operacao != '*') && (operacao != '/')){
				arrayNumAtual += caractere;
				NumAtual.innerText = arrayNumAtual;
				arrayTodaOperacao += arrayNumAtual;
			}
			//QUANDO NÃO TIVER SIDO DIGITADO UM OPERDOR (FAZ O OPERADOR SUBIR)
			else{
				if(arrayTodaOperacao.includes(operacao)){
					arrayNumAtual += `${caractere}`;
					NumAtual.innerText = arrayNumAtual;
				}else{
					NumAnterior.innerText += ` ${operacao}`;
					arrayNumAtual = caractere;
					NumAtual.innerText = arrayNumAtual;
					arrayTodaOperacao += ` ${operacao} ${caractere}`;
				}
			}
		}			
}


//ADICIONAR OS OPERADORES
function addOperacao(operador){
	//SE O NENHU NÚMERO FOI DIGITADO OU SE JÁ FOI DIGITADO O MESMO OPERADOR
	if((arrayNumAtual == "") || (operacao.includes('+')) || (operacao.includes('-')) || (operacao.includes('*')) || (operacao.includes('/'))){
		return;
	}
	//SE FOI DIGITADO UM NÚMERO A NÃO DIGITADO O OPERADOR
	else{
		arrayNumAnterior = arrayNumAtual;
		arrayNumAtual = "";
		NumAnterior.innerText = arrayNumAnterior;
		NumAtual.innerText = operador;
		operacao = operador;
	}
}

//APAGAR O ULTIMO CARACTERE		
let btnApagar = document.querySelector("#deletar");
btnApagar.addEventListener('click', () => {
	//SE FOR PARA APAGAE O OPERADOR
	arrayNumAtual = arrayNumAtual.slice(0, -1);
	NumAtual.innerText = NumAtual.innerText.slice(0, -1);;
});

//APAGAR TUDO
let btnDelAll = document.querySelector('#apagarTudo');
btnDelAll.addEventListener('click', () =>{
	arrayNumAtual = ''
	arrayNumAnterior = ''
	operacao = ''
	NumAtual.innerText = ''
	NumAnterior.innerText = ''
	arrayTodaOperacao = ''
});
//APRESENTAR OS RESULTADOS
let btnSoma = document.querySelector('#somar');
btnSoma.addEventListener('click', () => {
	var numero1 = parseFloat(arrayNumAnterior);
	var numero2 = parseFloat(arrayNumAtual);
	
	switch (operacao) {
		case '+':
			NumAnterior.innerText = ""
			arrayNumAnterior = ""
			arrayNumAtual = numero1 + numero2;
			NumAtual.innerText = arrayNumAtual;
			arrayTodaOperacao = ''
			operacao = ''
			numero1 = ''
			numero2 = ''
			break;
		case '-':
			
			NumAnterior.innerText = ""
			arrayNumAnterior = ""
			arrayNumAtual = numero1 - numero2;
			NumAtual.innerText = arrayNumAtual;
			arrayTodaOperacao = ''
			operacao = ''
			numero1 = ''
			numero2 = ''
			break;
		case '*':
			NumAnterior.innerText = ""
			arrayNumAnterior = ""
			arrayNumAtual = numero1 * numero2;
			NumAtual.innerText = arrayNumAtual;
			arrayTodaOperacao = ''
			operacao = ''
			numero1 = ''
			numero2 = ''
			break;
		case '/':
			NumAnterior.innerText = ""
			arrayNumAnterior = ""
			arrayNumAtual = numero1 / numero2;
			NumAtual.innerText = arrayNumAtual;
			arrayTodaOperacao = ''
			operacao = ''
			numero1 = ''
			numero2 = ''
			break;		
		default:
			break;
	}
});