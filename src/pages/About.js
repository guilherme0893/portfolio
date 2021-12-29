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
                        I am Guilherme Duarte, currently I am a web development student at Trybe.
                      </p>
                      <p>
                        I have a BSc (2012) and  MSc (2021) in Geology obtained in Rio de Janeiro Federal University.
                        There, I was focused in the study of evaporites rocks, specially gypsum and anhydrite, from Araripe and Parnaíba Basins where we can find analogues to the Brazilian Pre-Salt succession.
                      </p>
                      <p>
                        Then, I decided that it was about time to shake things a little bit and decided to join Trybe and learn more about coding and web development.
                        So far, the journey has been incridible and full of new discoveries.
                      </p>
                      <div>
                        <p>
                          Liked my history and wish to know a bit more? Just reach me out via email (guilhermeduarte008@gmail.com) or click in link below
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
