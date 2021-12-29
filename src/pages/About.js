import '../css/styles.css';
import React from 'react';
import CV from '../components/CV';
// import TeamMember from '../components/TeamMember';
// import ListMember from '../components/ListMember';

class About extends React.Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
            <div className="container px-5">
              <div className="row justify-content-center container px-5">
                  <div className="my-5 col-lg-12 col-xxl-12">
                    <h1 className="fw-bolder mb-3">About me</h1>
                    <div className="lead fw-normal text-muted mb-4">
                      <p>Hi there!</p>
                      <p>
                        It is very good to see new faces here!
                      </p>
                      <p>
                        I am Guilherme Duarte, currently I am a full stack web development student at Trybe.
                      </p>
                      <p>
                        I also have a BSc (2012) and  a MSc (2021) in Geology obtained from Rio de Janeiro Federal University.
                        There, I was focused in the study of evaporites rocks, specially gypsum and anhydrite, from Araripe and Parnaíba Basins where we can find analogues to the Brazilian Pre-Salt succession.
                        You can find more about my education bellow.
                        Curiously, it was during my MSc that I first had contact with coding and this world, that felt like to be so far from me.
                      </p>
                      <p>
                        So I decided that it was about time to shake things and then learn more about coding, so I joined Trybe last August.
                        Web development was the choice, and this intense journey has been incridible and full of new discoveries.
                      </p>
                      <div>
                        <p>
                          This is just a little bit of me. I surely would love to share more things and get to know you better. Reach me out via email (guilhermeduarte008@gmail.com) or click in link below and to find me on LinkedIn!
                          <br>
                          </br>
                          <div className="div-icons">
                            <a href="https://www.linkedin.com/in/guilherme--duarte/" target="_blank"><i className="bi bi-linkedin"></i></a>
                          </div>
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <CV />
                  </div>
                </div>
              </div>
        </main>
      </>
    );
  }
}

export default About;
