import React, { Component } from 'react';
import InlineWorker from 'inline-worker';
import './template/future-imperfect/assets/css/main.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

class Template extends Component {

    componentDidMount() {
        let self = {};
        const worker = new InlineWorker((self) => {
            self.onmessage = (e) => {
                console.log(e.data);
                postMessage('Hello world!');
            }
        }, self);
        worker.onmessage = (e) => {
            console.log("Received message back:");
            console.log(e.data);
        }
        worker.postMessage('Weird');
    }

    componentWillReceiveProps(newProps) {
        this.setState({ page: newProps.params.splat });
    }

    render() {
        return (
            <div id="wrapper">

                <Header />

                <Menu />

                <Main page={this.state ? this.state.page : undefined} />

                <Sidebar />

            </div>
        );
    }
}

export default Template;
