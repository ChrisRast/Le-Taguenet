import React from 'react';
import './App.css';
import { MainComponent } from './components';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <div>Menu avec react router</div>
                <MainComponent />
            </div>
        );
    }
}

export default App;
