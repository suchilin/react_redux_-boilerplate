import React from 'react';
import {render} from 'react-dom';
import './index.scss';

class App extends React.Component {
    render () {
            return( 
                    <div className="test">
                        <h1>Hello React!</h1> 
                    </div>
                );
          }
}
    
render(<App/>, document.getElementById('root'));
