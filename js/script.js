class Product {
    constructor() {
        this.id = 1;
        this.arrProds = [];


    }


    save() {
        let prod = this.readProds();

        if (this.validate(prod) == true) {
            this.addProd(prod)
        }

        // Lista a tabela já com os dados do array 
       this.listTable()
        // Limpa os dados da tabela
        this.clear();
    }

    listTable() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        // Insere os dados dados do array dentro da tabela
        for (let i = 0; i < this.arrProds.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nameProd = tr.insertCell();
            let td_price = tr.insertCell();
            let td_disp_prod = tr.insertCell();

            td_id.innerText = this.arrProds[i].id;
            td_nameProd.innerText = this.arrProds[i].nameProd;
            td_price.innerText = `R$ ${this.arrProds[i].price}`;
            td_disp_prod.innerText = this.arrProds[i].disp;
        }
    }

    addProd(prod) {
        // Adiciona o produto dentro do array
        this.arrProds.push(prod);
        this.id++;
    }

    readProds() {
        // Inicia um objeto vazio
        let prod = {};

        // Pega o valor dos inputs no html 
        prod.id = this.id;
        prod.nameProd = document.getElementById('product').value;
        prod.description = document.getElementById('description').value;
        prod.price = document.getElementById('price').value;
        prod.disp = document.querySelector('input[name="disp_prod"]:checked').value;

        return prod;
    }

    validate(prod) {
        let msg = '';

        if (prod.nameProd == '') {
            msg += '- Informe o nome do produto \n'
        }

        if (prod.price == '') {
            msg += '- Informe o preço do produto \n'
        }

        if (msg != '') {
            alert(msg)
            return false;
        }

        return true;
    }

    clear() {
        // Limpa os campos de input
        document.getElementById('product').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
    }
}

let prod = new Product();