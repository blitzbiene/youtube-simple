import React from 'react';

import SearchBar from './SearchBar';
import utube from '../apis/utube';
import VideoDisplay from './VideoDisplay';
import VideoList from './VideoList';
class App extends React.Component {

    state = { videos: [], searchSubmitted: false, start: true,selected:null }

    search = async (term) => {
        this.setState({ searchSubmitted: true })
        try {
            const result = await utube.get('/search', {
                params: {
                    q: term
                }
            });

            //console.log(result.data.items);
            this.setState({ videos: result.data.items, searchSubmitted: false,start:false,selected:result.data.items[0]});
        }
        catch (e) {
            console.log(e);
        }

    }

    updateSelected = (video)=>{
           this.setState({selected:video});
    }

    getVideoDisplay = () => {

       
        if (this.state.searchSubmitted) {
            return (
                <div style={{marginTop:"2rem"}}className="ui active centered inline loader"></div>
            );
        }
        else if (this.state.start)
            return null;
        else if(!this.state.start && this.state.videos.length===0)
        {
               return(
                    <div style={{color:"red",fontSize:"2rem",marginTop:"1rem"}}>
                      OOPS,NO VIDEOS FOUND! 
                    </div>
               );
        }
        else return(
        <div className="ui grid container" style={{marginTop:"1rem"}}>
        
        <div className="eleven wide column"><VideoDisplay selected={this.state.selected}/></div>
        <div className="five wide column" style={{height:"1vh",scrollBehavior:"auto"}}><VideoList videos={this.state.videos} updateSelected={this.updateSelected}/></div>
        
        
        </div>);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar search={this.search} />
                {this.getVideoDisplay()}
                
            </div>
        );
    }
}

export default App;