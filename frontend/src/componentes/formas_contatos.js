
export default function Formascontatos (props){
    return (
        <div>
            <div className="container-fluid">
            <h1>COSMOELETRO</h1>
            </div>

            <center><h2>fale conosco</h2></center>
            <hr/>
            
            <table border = "" width="100%" cellPadding="20%">
                <thead>
                    <td width="50%" align="center">
                    <img src={require("./../imagens/whatsappico1.png").default} width="40px" />
                    (11) 99999-9999
                    </td>

                    <td width="50%" align="center">
                    <img src={require("./../imagens/ico email.png").default} width="40px" />
                    cosmoeletro.com
                    </td>
                </thead>

            </table>

            <form onSubmit={props.enviarMensagem}>
                <div className="form-group">
                    <label forhtml="nome">Seu nome</label>
                    <input type="text" name="nome" className="form-control" id="nome" aria-describedby="emailHelp"
                    placeholder="Digite seu nome" />
                </div>
                <div className="form-group">
                    <label forhtml="email">Email</label>
                    <input type="text" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                    <label forhtml="mensagem">Digite sua mensagem</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3" name="mensagem" className="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Digite sua mensagem" />
                </div>
                <button type="submit" className="btn btn-primary" onClick = {props.passe_livre}>Enviar</button>
            </form>
            <div className="container-fluid" >
                <div className="row" >
                    <div className="col">
                    
                        <ul className="list-group">
                            <li className = "list-group-item active" ><h3 className="text-light">Comentarios de nossos clientes:</h3></li>
                            {props.mensagens.map(mensagem =>(
                                <li className="list-group-item">
                                    <h5>{mensagem.nome_cliente}</h5>
                                    <p>{mensagem.mensagem}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}