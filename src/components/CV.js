import React, { Component } from 'react';
import '../css/styles.css';

class CV extends Component {
  render() {
    return(
      <>
        <h2>Education</h2>
        <article className="lead fw-normal text-muted mb-4">
          <section>
            <br></br>
            <ul>Web Development Full Stack - Trybe
              <li className='list-element'>August 2021 - Ongoing</li>
            </ul>
            <br></br>
            <ul>MSc. Geology - Universidade Federal do Rio de Janeiro
              <li className='list-element'>03/2018 - 03/2021</li>
              <li className='list-element'>Advisors: Ismar Carvalho and Leonardo Borghi</li>
              <li className='list-element'>Araripe and Parnaíba basins Aptian evaporites
                - the Salt Phase in intracontinental Brazil
              </li>
            </ul>
            <br></br>
            <ul>BSc. Geology - Universidade Federal do Rio de Janeiro
              <li className='list-element'>2012-2018</li>
              <li className='list-element'>Adviors: Leonardo Borghi and João Paulo Miranda</li>
              <li className='list-element'>Ipubi Member top unconformity - karst in evaporites</li>
            </ul>
            <br></br>
            <ul>Royal Holloway - University of London
              <li className='list-element'>2015-2016</li>
              <li className='list-element'>Exchange program - Science without Borders</li>
              <li className='list-element'>Advior: Francisco J. Hernández-Molina</li>
              <li className='list-element'>Characterization of contourite related rocks from the Miocene
                -Pilocene transition, Gulf of Cádiz, Spain
              </li>
            </ul>
            <br></br>
            <div>
              <h4>Complementary activities</h4>
              <ul> Python Fundamentos para Análise de Dados
                <li className='list-element'>Ongoing</li>
                <li className='list-element'>Data Science Academy</li>
              </ul>
              <ul>Data Science do Zero
              <li className='list-element'>Ongoing</li>
              <li className='list-element'>Minerando Dados (currently Stack Tecnologias)</li>
              </ul>
            </div>
          </section>
        </article>
        {/* <aside>
          <h3>Here is the side information!</h3>
        </aside> */}
      </>
    )
  }
}

export default CV;
