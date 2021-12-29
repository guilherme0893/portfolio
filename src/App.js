import './css/styles.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import MediaQuery from 'react-responsive';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      repoOnScreen: '',
    };
  }

  // componentDidMount() {
  //   const reposArray = repos.map((repo) => ({
  //     name: repo.name,
  //     id: repo.id,
  //   }))
  //   // console.log(reposArray);
  //   this.setState({repositories: reposArray, repoOnScreen: reposArray[0].name})
  //   // console.log(reposArray[0]);
  // }

  // handleOnChange = ({target: {value}}) => {
  //   // console.log(value);
  //   this.setState({repoOnScreen: value})
  // }

  render() {
    const {repositories, repoOnScreen} = this.state;
    return (
      <>
        <MediaQuery minWidth={400}>
          <Navbar 
            repositories={repositories}
            handleOnChange={this.handleOnChange}
          />
          <Switch>
            <Route 
              exact path="/portfolio"
              component={Home} />
            <Route 
              path="/about"
              render={(props) => 
              <About name="name" {...props} />}
            />
            <Route
              exact path="/projects"
              render={() => <Portfolio repoOnScreen={repoOnScreen}/>}/>
            <Route 
              path="*"
              component={NotFound}
            />
          </Switch>
          <Footer />
        </MediaQuery>
      </>      
    );
  }
}

export default App;
