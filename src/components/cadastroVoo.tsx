import "./cadastroVoo.css"

function CadastroVoo() {
  return (
    <>
      <div className="containerFormVoo">
        <form action="submit" className="formCadastro">

          <h1>Cadastro Voo</h1>

          <div className="contentInputs">

            <div>
              <label htmlFor="Numero do voo"></label>
              <input type="text" placeholder="Numero do voo" />

              <label htmlFor="Data da viagem"></label>
              <input type="text" placeholder="Data da viagem" />

              <label htmlFor="Horario da viagem"></label>
              <input type="text" placeholder="Horario da viagem" />

              <label htmlFor="Local de Partida"></label>
              <input type="text" placeholder="Local de Partida" />

            </div>

            <div className="groupInput">

              <div>
                <label htmlFor="Local de Partida"></label>
                <input type="text" placeholder="Local de Partida" />
              </div>
              <div>
                <label htmlFor="Local de destino"></label>
                <input type="text" placeholder="Local de destino" />
              </div>

            </div>

            <label htmlFor="Valor Passagem normal"></label>
            <input type="text" placeholder="Valor Passagem normal" />

            <label htmlFor="Valor Passagem Especial"></label>
            <input type="text" placeholder="Valor Passagem Especial" />

            <button>Cadastrar</button>

          </div>

        </form>
      </div>
    </>
  )
}

export default CadastroVoo