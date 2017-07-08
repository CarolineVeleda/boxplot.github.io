
var adicionar = document.getElementById('adicionar');
var valores=document.getElementById('valores');
var numeros=document.getElementsByClassName('numeros');


vetor = [];
quartil1=[];
quartil2=[];
quartil3=[];





 function quartil_1(vetor) {
 
 if (vetor.length % 2 != 0) { // impar

		for (i=0; i<((vetor.length-1)/ 2); i++){
			quartil1[i]=vetor[i];
			
		}
  } 
  
  else { // par
		
		for  (i=0; i<((vetor.length/2)-2); i++){
			quartil1[i]=vetor[i];
		}
  }
 


  
  return quartil1;
}




 function quartil_3(vetor) {
 
 if (vetor.length % 2 != 1) { // impar

		for (i=((vetor.length+1)/2); i<=(vetor.length-1); i++){
			quartil3.push(vetor[i]);
		}
  } 
  
  else { // par
		
		for(i=((vetor.length)/2); i<=(vetor.length-1); i++){
			quartil3.push(vetor[i]);
		}
  }
  return quartil3;
  
}



function mediana(vetor) {
  if (vetor.length % 2 === 1) { // impar
    return vetor[parseInt(vetor.length / 2)];
  } else { // par
    let a = vetor[parseInt(vetor.length / 2)];
    let b = vetor[parseInt(vetor.length / 2) - 1];
    return (a + b) / 2;
  }
}



function min(vetor) {
  var m = vetor[0];
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < m) m = vetor[i];
  }
  return m;
}


function max(vetor){
	return vetor[vetor.length - 1];
}




con=0;

adicionar.addEventListener('click', function () {
	
  var div = document.createElement('div');
  div.textContent = valores.value;
  p = document.getElementsByTagName('p')[2];
  p1 = document.getElementsByTagName('p')[3];
  p2 = document.getElementsByTagName('p')[4];
  
  p3 = document.getElementsByTagName('p')[0];
  p4 =  document.getElementsByTagName('p')[1];
  p5 =  document.getElementsByTagName('p')[5];

	  x=parseInt(div.textContent);
	  vetor.push(x);
	  vetor.sort(function(a, b){return a-b});

	 
	 div6=document.getElementsByTagName('div')[5];
	 div5=document.getElementsByTagName('div')[4];
	 div2=document.getElementsByTagName('div')[3];
	 div3=document.getElementsByTagName('div')[2];
	 div4=document.getElementsByTagName('div')[1];
	
	 
	 
	 if (vetor.length>=4 && con!=1){
		 
		 div2.classList.add('quartil1');
		 div3.classList.add('vertical');
		 div4.classList.add('tracinho');
		 div5.classList.add('vertical2');
		 div6.classList.add('tracinho2');
		 con=1;
	 }
	 
	 
pos=0;
soma=0;

while (pos<=quartil1.length-1){
	soma+=quartil1[pos];
	pos++
	
}

soma=soma/quartil1.length;
 console.log(soma+ " aaaa");

	 p.textContent = soma;
	 p1.textContent = mediana(vetor);
	 p2.textContent = soma;
	 p3.textContent = vetor;
	 p4.textContent = min(vetor);
	 p5.textContent = max(vetor);
	 
	console.log(quartil_1(vetor));
	 
	 
	console.log(vetor);
  
 

});


	

	 


	 
	 
	 
	 
	 
	 
	 
	 


















