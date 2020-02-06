import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./components/search/Search";
import Movies from "./components/movies/Movies";
import MovieAdd from "./components/movies/MovieAdd";
import MovieEdit from "./components/movies/MovieEdit";
import MovieDetail from "./components/movies/MovieDetail";
import CommentsPerMovie from "./components/comments/CommentsPerMovie";
import CommentAdd from "./components/comments/CommentAdd";
import CommentEdit from "./components/comments/CommentEdit";
import Contacts from "./components/contacts/Contacts";
import ContactEdit from "./components/contacts/ContactEdit";

import Header from "./components/layout/Header";
import About from "./components/pages/About";

import NotFound from "./components/pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  componentDidMount() {}

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Screenplay Salon" />
            <div className="container">
              <Switch>
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/contact/edit/:id" component={ContactEdit} />
                <Route exact path="/" component={Movies} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/movie/detail/:id" component={MovieDetail} />
                <Route exact path="/movie/add" component={MovieAdd} />
                <Route exact path="/movie/edit/:id" component={MovieEdit} />
                <Route exact path="/about" component={About} />
                >
                <Route
                  exact
                  path="/comments/commentspermovie/:id"
                  component={CommentsPerMovie}
                />
                <Route exact path="/comments/add/:id" component={CommentAdd} />
                <Route
                  exact
                  path="/comments/edit/:id"
                  component={CommentEdit}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
