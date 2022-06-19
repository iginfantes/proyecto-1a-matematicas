module.exports={
    /**
     * Suma de dos números
     * @example
     * num1= 3, num2=4 => resultado 7
     * @param {*} num1 Numero 1 de la suma 
     * @param {*} num2 Numero 2 de la suma 
     * @returns 
     */
    suma: function(num1,num2){
        return this.esNumero(num1,num2)? num1+num2: this.mensajeError();
    },
     /**
     * Multiplicación de dos números
     * @example
     * num1= 3, num2=4 => resultado 12
     * @param {*} num1 Numero 1 de la multiplicación
     * @param {*} num2 Numero 2 de la multiplicación 
     * @returns 
     */
    multiplicar: function(num1,num2){
        return this.esNumero(num1,num2)? num1*num2 : this.mensajeError();
    },
    /**
     * Division de dos números
     * @example
     * num1= 12, num2=3 => resultado 4
     * @param {*} num1 Numero 1 de la división
     * @param {*} num2 Numero 2 de la división 
     * @returns 
     */
    dividir: function(num1,num2){
        return this.esNumero(num1,num2)? num1/num2 : this.mensajeError();
    },
    mensajeError:function(){
        console.error('Uno de los valores no es numérico')
    },
    /**
     * Comprueba si los números pasados son de tipo number
     * @param {*} n1 numero 1
     * @param {*} n2 numero 2
     * @returns 
     */
    esNumero: function(n1,n2){
      if(typeof n1!=='number' || typeof n2!=='number') {
        return false;
      }
      return true;
    }
}