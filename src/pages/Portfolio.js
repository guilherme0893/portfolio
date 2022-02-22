import '../css/styles.css';
import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
      isLoading: true,
    }
  }

  getGitHubInfo = async () => {
    this.setState({isLoading: true})
    const endpoint = `https://api.github.com/users/guilherme0893/repos`;
    const response = await fetch(endpoint).then(response => response.json());
    this.setState({repositories: response, isLoading: false})
  }

  componentDidMount() {
    this.getGitHubInfo()
  }

  render() {
    const {repositories, isLoading}=this.state;
    return (
      <>
        {
          isLoading ? 
            <div style={{ minWidth: '100%', minHeight: '100%', position: 'fixed', display: 'flex', opacity: '0.7', top: '30', alignItems: 'center', justifyContent: 'center' }}>
              <Loader
                type="Grid"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={2000} //2 secs
              />
          </div> :
            <main className="flex-shrink-0">
              <section className="py-5">
                <div className="container px-5 my-5">
                  <div className="text-center mb-5">
                    <h1 className="fw-bolder">Some adventures hosted on my Github Portfolio!</h1>
                    <h3 className="fw-normal text-muted mb-0">Many surprises are coming ahead</h3>
                  </div>
                  {repositories.map(repository =>
                        <div class="card" style={{ marginBottom: '12px' }} key={repository.id}>
                          <div class="card-body">
                            <h5 class="card-title">{repository.name}</h5>
                            <p class="card-text"><b>Acess status:</b> {repository.private ? 'Private' : 'Public'}</p>
                            <p class="card-text"><b>Take a look here:</b> <a href={repository.html_url}>{repository.html_url}</a></p>
                            <br />
                          </div>
                        </div>
                      )}
                </div>
              </section>
            </main>}
      </>      
    )
  }
}

export default Portfolio;
