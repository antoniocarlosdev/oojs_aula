class ContaBancaria{
    constructor(agencia, conta, tipo, saldo){
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(this._saldo < valor){
            return "Operação Negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    
    constructor(agencia, conta, cartaoDeCredito){
        super(agencia, conta);
        this.tipo = "Corrente"
        this._saldo = 0
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito
    }

    set cartaoDeCredito(valor){
        this._cartaoDeCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, conta ){
        super(agencia, conta);
        this.saldo = 0
        this.tipo = Poupança
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, conta){
        super(agencia, conta);
        this._saldo = 0
        this.tipo = "Universitária"
    }

    sacar(valor){
        if(valor < 500){
            return "Operação Negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}