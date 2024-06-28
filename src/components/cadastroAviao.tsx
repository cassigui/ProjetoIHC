import "./cadastroAviao.css"
import CadastroVoo from './cadastroVoo'

function Cadastros() {
  return (
    <>
      <section id="cadastro">
        <div className="containerForm">
          <form action="submit" className="formCadastro">

            <h1>Cadastro Avião</h1>

            <div className="contentInputs">

                <label htmlFor="Numero de Registro"></label>
                <input type="text" placeholder="Numero de Registro" />

                <label htmlFor="Modelo"></label>
                <input type="text" placeholder="Modelo" />

                <label htmlFor="Quantidade de assentos"></label>
                <input type="text" placeholder="Qtd de assentos" />

                <label htmlFor="Qtd de assentos especiais"></label>
                <input type="text" placeholder="Qtd de assentos especiais"/>


              <button>Cadastrar</button>

            </div>

          </form>
        </div>
        <CadastroVoo/>
      </section>
    </>
  )
}

export default Cadastros