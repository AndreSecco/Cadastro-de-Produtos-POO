class Produto{
    constructor(){
        this.id = 1
        this.arrayProdutos = []
    }
    salvar(){
        let produto = this.lerDados()
        //this.validaCampos(produto)

        if(this.validaCampos(produto)){
            this.adicionar(produto)
        }

        this.listaTabela()
    }

    listaTabela(){
        let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()
            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_acao = tr.insertCell()

        }
    }

    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    lerDados(){
        let produto = {}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value

        return produto
    }

    validaCampos(produto){
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += '- Informe o nome do Produto '
        }
        if(produto.preco == ''){
            msg += '- Informe o preço do Produto '
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true

    }
    cancelar(){
        
    }
}
let produto = new Produto()