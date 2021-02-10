import React, {lazy,Suspense} from 'react';
import {connect} from "react-redux";
import {inserir} from './../../actions/mensagens';
import {passe_livre, passe_negado} from './../../actions/passe';

const Formascontatos = lazy(() => import('./../formas_contatos'));

const estados = (states) =>{
    return{
        mensagens: states.mensagens,
        passe: states.passe
    }
}

const funcoes = () =>{
    return {
        inserir,
        passe_livre,
        passe_negado
    }
}

class Contato extends React.Component{
    constructor(props){
        super(props);
        this.enviarMensagem=this.enviarMensagem.bind(this);
    }
    async componentDidMount(){
        if (this.props.passe){
            const resposta = await fetch ('http://localhost:8080/pegar_mensagens');
            const json = await resposta.json ();
            this.props.inserir(json)
            this.props.passe_negado()
        }
       
    }
    async enviarMensagem(elemento){
        elemento.preventDefault();
        const url = "http://localhost:8080/mensagens";
        const dado = new FormData(elemento.target);
        let json = {};
        dado.forEach((valor, chave) =>{
            json [chave] = valor;

        });

        const cabecalho = {
            method: "post",
            body: JSON.stringify(json),
            headers:{
                'Content-Type' : 'application/json'
            }
        }
        await fetch (url, cabecalho);
    }

    render(){
        return(
            <Suspense fallback ={ <h1>Espere um momento....</h1> }>
                <Formascontatos enviarMensagem = {this.enviarMensagem} passe_livre = {this.props.passe_livre} mensagens = {this.props.mensagens}/>
            </Suspense>
        )
    }
}
export default connect(estados, funcoes())(Contato)