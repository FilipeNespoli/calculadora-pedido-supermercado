//receber dados
const frm = document.querySelector('form');
const btCalcular = document.getElementById('btCalcular');
const outProduto = document.getElementById('outProduto');
const outSubtotal = document.getElementById('outSubtotal');
const outFrete = document.getElementById('outFrete');
const outDesconto = document.getElementById('outDesconto');
const outTotal = document.getElementById('outTotal');
const outParcelas = document.getElementById('outParcelas');
//processar dados
btCalcular.addEventListener('click', (e) => {
    //coletando dados
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    const quantidade = Number(frm.inQuantidade.value);
    const frete = Number(frm.inFrete.value);
    //processamento
    const subTotal = preco * quantidade;
    const desconto = subTotal * 0.1;
    const total = (subTotal - desconto) + frete;
    const parcelamento = total / 3;
    //exibir dados
    outProduto.textContent = `Produto: ${produto}`;
    outSubtotal.textContent = `Subtotal: R$ ${subTotal.toFixed(2)}`;
    outFrete.textContent = `Frete: R$ ${frete}`
    outDesconto.textContent = `Desconto: R$ ${desconto.toFixed(2)}  (10% de Desconto)`;
    outTotal.textContent = `Total a pagar: R$ ${total.toFixed(2)}`;
    outParcelas.textContent = `Parcelamento: 3x de R$ ${parcelamento.toFixed(2)}`;

    e.preventDefault();
})
