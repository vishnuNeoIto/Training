let calculator = {
    // ... your code ...
    
    read(){
        this.a = +prompt("Enter value a");
        this.b = +prompt("Enter value b");
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );