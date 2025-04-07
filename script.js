const calcular = () => {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    if(isNaN(num1) === false && isNaN(num2) === false){
        switch(operacion){
            case "+":
                document.getElementById("resultado").value = `Resultado: ${num1+num2}`;
                break;
            case "-":
                document.getElementById("resultado").value = `Resultado: ${num1-num2}`;
                break;
            case "*":
                document.getElementById("resultado").value = `Resultado: ${num1*num2}`;
                break;
            case "/":
                if(num2 === 0){
                    document.getElementById("resultado").value = "No se puede dividir por cero"
                }else {
                    document.getElementById("resultado").value = `Resultado: ${num1/num2}`;
                }
                break;
        }
    }else{
        alert("Debe ingresar ambos numeros.");
    }
    
    }



    