function encontrarPalabraMasLarga() {
    const texto = document.getElementById("parrafo").value;
    const palabras = texto.split(' ');
    let palabraMasLarga = "";
  
    for (let palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
    document.getElementById("resultado").textContent =
      "La palabra más larga es: " + palabraMasLarga;
  }
  