import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './template/future-imperfect/assets/css/main.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

class Template extends Component {

    componentDidMount() {
        /* Include the web worker script */
        const script = document.createElement('script');
        script.onload = () => {
            console.log('Script loaded');
            const myWorker2 = new Worker("worker2.js");
            myWorker2.onmessage = function(e) {
                console.log("2: Received message:");
                console.log(e.data);
            }
            myWorker2.postMessage("Hello 2 world!");
        }
        script.src = 'worker2.js';
        ReactDOM.findDOMNode(this).appendChild(script);
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
