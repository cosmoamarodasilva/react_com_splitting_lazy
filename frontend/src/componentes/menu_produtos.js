import * as Script from '../javascript/scripts.js';


export default function menuprodutos (){

    return(
        <div class="row-fluid">
            <div className="container-fluid">
                <h1>ESCOLHA SEU PRODUTO E PAGUE COM BITCOIN (BTC)</h1>
            </div>
            <header>
                <h2>Produtos</h2>
            </header>
            
            <section className="categorias">
                <ul>
                    <li className="li_cor" onClick={() =>Script.mostrar_todos("")}>Todos produtos(11)</li>
                    <li className="li_cor" onClick={() =>Script.mostrar_eletros('eletrodomesticos')}>Etetrodomésticos (2)</li>
                    <li className="li_cor" onClick={() =>Script.mostrar_eletros('tvs')}>Televisores (3)</li>
                    <li className="li_cor" onClick={() =>Script.mostrar_eletros('moveis')}>Móveis (4)</li>
                    <li className="li_cor" onClick={() =>Script.mostrar_eletros('informatica')}>Informática (2)</li>
                </ul>
                <br/><br/><br/>
            </section>

        </div> 
)
}
