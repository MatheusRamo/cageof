import React from 'react'
import MyHead from '../components/MyHead'

function Sobre() {
  return (
    <div className="container px-4">
      <div className='d-flex flex-column align-items-center py-5'>
        <MyHead title="Sobre Nos" />
        <h1 className="lg:fs-1 sm:fs-4">Centro Acadêmico de Geofísica - CAGEOF</h1>

        <ul >
          <li><strong>Data de Fundação:</strong> 01/05/2014</li>
          <li><strong>Quantidade de Membros:</strong> 08 Titulares e 08 Suplentes</li>
          <li><strong>Período da atual gestão:</strong> 01/12/21 Até 15/12/22</li>
          <li><strong>Presidente:</strong> Isabelle de Menezes Cruz</li>
          <li><strong>Secretária Geral:</strong> Jarlison Branches Licata</li>
          <li><strong>Tesoureira:</strong> dos Santos Azevedo</li>
          <li><strong>Diretor de Relações e Ética:</strong> Antonio Marcos de Jesus</li>
          <li><strong>Diretora de Esporte:</strong> Eliane Marques</li>
          <li><strong>Diretor de Marketing:</strong> Antonio Marcos de Jesus</li>
          <li><strong>Diretor de Eventos e Cultura:</strong> Yure dos Santos da Costa</li>
        </ul>
      </div>
    </div>
  )
}

export default Sobre
