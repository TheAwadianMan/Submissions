import React, {Component} from 'react';

import './App.css';
import Test from './Component/Test';
import { generateKeyPair } from 'crypto';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos:[],
            keyword:''
        }

    }
    fetchVideos = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.keyword}&key=AIzaSyBYxsEoWP__tYedZ_cfJ5rBBFRl4SIXh5U`)
          .then(response => response.json())
          .then(data => {
           /*  if (Array.isArray(data.items)) {
             */console.log(data.items)
              this.setState({ videos: data.items });
            /* } else {
              this.setState({ videos: [] });
            } */
          });
         // console.log(this.state.videos)
      };
    

    render() {
        return (
            <div className="App">
                <button onClick={this.fetchVideos}>search</button>
                    <input
                    
                    onChange={this.state.keyword}></input>
            
            
           </div>
        );
    }
}

export default App;
