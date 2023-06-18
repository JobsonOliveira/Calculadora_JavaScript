let NumAtual = document.querySelector("#caractere_atual");
let NumAnterior = document.querySelector("#caractere_anterio");
let arrayNumAtual = []
let arrayNumAnterior = []
let arrayTodaOperacao = []
let operacao = ""

/*--ADICIONAR OS CARACTERES NA TELA--*/
function addCaractere(caractere){
	//VERIFICA SE JÁ TEM UM PONTO NO NUMERO DIGITADO E SE JÁ FOI DIGITADO ALGUM NÚMERO ANTES DELE (SEGUNDO NÚMERO)
	if((caractere == '.') && (NumAtual.innerText != '') && (NumAnterior.innerText != '')){
		if((NumAtual.innerText != '+') && (NumAtual.innerText != '-') && (NumAtual.innerText != '*') && (NumAtual.innerText != '/')){

			arrayNumAtual += `${caractere}`;
			NumAtual.innerText = arrayNumAtual;
			arrayTodaOperacao += arrayNumAtual;
		}
		
		if(arrayNumAtual.includes(".") == true){
			NumAtual.innerText = NumAtual.innerText.slice(0, -1);
			arrayNumAtual = NumAtual.innerText;
		}

	}
	//VERIFICA SE JÁ TEM UM PONTO NO NUMERO DIGITADO E SE JÁ FOI DIGITADO ALGUM NÚMERO ANTES DELE (PRIMEIRO NÚMERO)
	if(caractere == '.' && ((NumAtual.innerText == '') || (arrayNumAtual.includes('.')))){
		
		return;
	}
	//ADICIONAR OS CARACTERES
	else{
		//QUALDO NÃO TIVER SIDO DIGITADO UM OPERADOR
		if((NumAtual.innerText != '+') && (NumAtual.innerText != '-') && (NumAtual.innerText !='*') && (NumAtual.innerText != '/')){
			arrayNumAtual += `${caractere}`;
			NumAtual.innerText = arrayNumAtual;
			arrayTodaOperacao += arrayNumAtual;
		}
		//QUANDO TIVER SIDO DIGITADO UM OPERDOR (FAZ O OPERADOR SUBIR)
		else{
			if((caractere != '.') && ((NumAtual.innerText == '+') || (NumAtual.innerText == '-') || (NumAtual.innerText == '*') || (NumAtual.innerText == '/'))){

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
	//SE NENHUM NÚMERO FOI DIGITADO OU SE JÁ FOI DIGITADO O MESMO OPERADOR
	if(((NumAtual.innerText == "") && (NumAnterior.innerText == '')) || (operacao != '') || ((operacao != '') && (NumAnterior.innerText == ''))){
		if ((operador != NumAtual.innerText) && (NumAtual.innerText != '') && (arrayTodaOperacao.includes('+') == false) && (arrayTodaOperacao.includes('-') == false) && (arrayTodaOperacao.includes('*') == false) && (arrayTodaOperacao.includes('/') == false)) {
			operacao = operador;
			NumAtual.innerText = operacao;
		}else{
			return;
		}
	}
	//DIGITAR UM OPERADOR (FAZ O PRIMEIRO NÚMERO SUBIR)
	else if(NumAtual.innerText != ''){
		arrayNumAnterior = arrayNumAtual;
		arrayNumAtual = "";
		NumAnterior.innerText = arrayNumAnterior;
		NumAtual.innerText = operador;
		operacao = operador;
	}
	else if((NumAtual.innerText == '') && (NumAnterior.innerText != '') && (arrayTodaOperacao.includes('+') == false) && (arrayTodaOperacao.includes('-') == false) && (arrayTodaOperacao.includes('*') == false) && (arrayTodaOperacao.includes('/') == false)){
		operacao = operador;
		NumAtual.innerText = operacao;
	}
}

//APAGAR O ULTIMO CARACTERE		
let btnApagar = document.querySelector("#deletar");
btnApagar.addEventListener('click', () => {
	if((NumAtual.innerText == '+') || (NumAtual.innerText == '-') || (NumAtual.innerText == '*') || (NumAtual.innerText == '/')){

		NumAtual.innerText = '';
		operacao = '';
	}else{
		NumAtual.innerText = NumAtual.innerText.slice(0, -1);
		arrayNumAtual = NumAtual.innerText;
	}
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
	
	if((operacao != '') && (arrayNumAtual != '') && (arrayNumAnterior != '')){
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
	}else{
		return;
	}
	
});