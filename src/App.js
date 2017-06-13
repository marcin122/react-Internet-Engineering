import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from "./Navigation";
import Author from "./Author";
import Book from "./Book";
import Login from "./Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    clickMeMethod = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path='/authors' component={Author}/>
                        <Route path='/books' component={Book}/>
                        <Route path='/login' component={Login}/>
                        <Route render={() => <h1>Page not found</h1>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );

  }
}

export default App;
