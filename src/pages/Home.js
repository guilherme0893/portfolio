import React, { Component } from 'react';

class Home extends Component {
  render() {
    // console.log(this.props)
    return (
     <>
      <main className="flex-shrink-0">
        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-3">
                    Welcome to my online repository!
                  </h1>
                  {/* <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a
                      className="btn btn-success btn-lg px-4 me-sm-3"
                      href="/projects"
                    >
                      Projects
                    </a>
                    <a 
                      className="btn btn-success btn-lg px-4 me-sm-3" 
                      href="/about">
                      About me
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <img
                  className="img-fluid rounded-3 my-5"
                  // src={require('../')}
                  alt="Guilherme"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder mb-0">My journey at Trybe</h2>
                <br></br>
                <h3>Click <a href="https://github.com/Guilherme0893/trybe-exercicios" target="_blank"> here </a> to know more about the modules and what expects me in the next months</h3>
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-unlock-fill"></i>
                    </div>
                    <div className="feature bg-success bg-gradient text-white rounded-3 mb-3 checkDiv">
                      <i className="bi bi-check-circle"></i>
                    </div>
                    <h2 className="h5">Module 1 - Web Developments Fundamentals</h2>
                    <p className="mb-0">
                      Introduction to JavaScript, HTML and CSS.
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-lock-fill"></i>
                    </div>
                    <h2 className="h5">Module 2 - Front-end Development</h2>
                    <p className="mb-0">
                      Introduction to React, RTL, Redux, React Hooks and more.
                    </p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-lock-fill"></i>
                    </div>
                    <h2 className="h5">Module 3 - Back-end Development</h2>
                    <p className="mb-0">
                      SQL, Node.js, TypeScript, MongoDB and more
                    </p>
                  </div>
                  <div className="col h-100">
                    <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-lock-fill"></i>
                    </div>
                    <h2 className="h5">Module 4 - Computer Science</h2>
                    <p className="mb-0">
                      Introduction to Python, Data Structures, Algorithms and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
    )
  }
}

export default Home;


