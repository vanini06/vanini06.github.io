function ctof() {
    let tempc = parseFloat(document.getElementById("entrada-tempc").value);
  
    if (tempc < 0) {
      // Valor abaixo de 0 Kelvin, exibir erro
      document.getElementById("result-tempf").value = "Não funciona meu consagrado";
    } else {
      let tempf = (tempc -273.15) * 1.8000 + 491.67;
      document.getElementById("result-tempf").value = tempf.toFixed(2);
    }
  }
  
  document.getElementById("entrada-tempc").addEventListener("input", ctof);
  
  // Função para calcular as raízes reais
  function calcularRaizes() {
      const a = parseFloat(document.getElementById("coef-a").value);
      const b = parseFloat(document.getElementById("coef-b").value);
      const c = parseFloat(document.getElementById("coef-c").value);
  
      const discriminante = b * b - 4 * a * c;
   
      let raiz1;
      let raiz2;
     
      if (discriminante > 0) {
          raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
          raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      } else if (discriminante === 0) {
          
          raiz1 = -b / (2 * a);
      } else {
     
          document.getElementById("resultado").innerHTML = "Não há raízes reais";
          return;
      }
  
      document.getElementById("resultado").innerHTML = "Raiz 1: " + raiz1 + "<br>Raiz 2: " + raiz2;
  }
  document.getElementById("calcular").addEventListener("click", calcularRaizes);