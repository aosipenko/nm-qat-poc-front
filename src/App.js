import React from 'react';
import SideMenu from './menu/SideMenu';
import './App.css';
import SplitPane from "react-split-pane";
import QATConfig from "./components/QATConfig";
import RequestHisto from "./components/RequestHisto";
import RequestManager from "./components/RequestManager";
import StatsTool from "./components/StatsTool";
import KafkaTool from "./components/KafkaTool";
import "react-table/react-table.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openConfig: false,
            openRM: false,
            openHisto: false,
            openStats: false,
            openKafka: false
        }
        this.toggleConfig = this.toggleConfig.bind(this);

    }

    render() {
        let a = 100;
        let b = 200;

        return (
            <SplitPane split="vertical" minSize={a} defaultSize={b}>
                <SideMenu toggleConfig={this.toggleConfig}/>
                <div className="App">
                    <QATConfig isOpen={this.state.openConfig}/>
                    <RequestManager isOpen={this.state.openRM}/>
                    <RequestHisto isOpen={this.state.openHisto}/>
                    <KafkaTool isOpen={this.state.openKafka}/>
                    <StatsTool isOpen={this.state.openStats}/>
                </div>
            </SplitPane>
        );
    }

    toggleConfig(key) {
        let newState = this.state;
        //reset all other tabs
        Object.keys(this.state).map(key => {
            newState[key] = false;
        });
        //invert state of clicked tab
        newState[key] = !this.state[key];
        this.setState(newState);
    }
}

export default App;
