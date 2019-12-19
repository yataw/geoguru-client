import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import utils from './utils';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";


// TODO data validation
// TODO test
import leaders from './mockdata/leaders';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.addEventListener('DOMContentLoaded', () => {
            utils.scroll.addToAll();
        });

        const port = 9000;
        const origin = 'http://localhost:';

        this.socket = window.io.connect(origin + port);
        this.state = {
            players: {},
            votes: {},
            answer: null,
            task: null
        };

        this.socket.on('taskstart', task => this.setState({task, answer: null, votes: {}}));
        this.socket.on('taskend', ({answer, votes, players}) => this.setState({answer, votes, players, task: null}))
    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Main
                    socket={this.socket}
                    players={this.state.players}
                    votes={this.state.votes}
                    answer={this.state.answer}
                    task={this.state.task}></Main>
                <Footer></Footer>

                <div className="version">v1.0</div>
            </React.Fragment>
        )
    }
}

export default App;
