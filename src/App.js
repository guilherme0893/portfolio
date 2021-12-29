import './css/styles.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Formulario from './pages/Formulario';
import NotFound from './pages/NotFound';
import repos from './data/repos';

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
        <Navbar 
          repositories={repositories}
          handleOnChange={this.handleOnChange}
        />
        <Switch>
          <Route 
            exact path="/about"
            render={(props) => 
            <About name="name" {...props} />}
          />
          <Route
            exact path="/portfolio"
            render={() => <Portfolio repoOnScreen={repoOnScreen}/>}/>
          <Route 
            exact path="/form"
            component={Formulario} />
          <Route 
            path="*"
            component={NotFound}
          />
          <Route 
            path={process.env.PUBLIC_URL + '/'}
            component={Home}
          />
        </Switch>
        <Footer />
      </>      
    );
  }
}

export default App;
