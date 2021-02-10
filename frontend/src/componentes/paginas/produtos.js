import React, {lazy, Suspense}  from 'react';
import CaixaProduto from './../caixa_produtos';


const Menuprodutos = lazy (() => import('./../menu_produtos'))


export default class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            BD:[]
        }
    }
    async componentDidMount(){
        let resposta = await fetch("http://localhost:8080/produtos");
        let dados = await resposta.json();
        this.setState({BD:dados});
    }
    render(){
        return(
         <div>
            <Suspense fallback ={ <h1>CosmoAnarco</h1> }>
                <Menuprodutos />
            </Suspense>
            
            {this.state.BD && this.state.BD.map ((item, id)=>
            <CaixaProduto nome={item['descricao']} preco={item['precos']} precofinal={item['precofinal']} imagem={item['imagem']} key={id} id={item['categoria']}></CaixaProduto>
                    
                )}
         </div>
        )
    }
}