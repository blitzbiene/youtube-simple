import React from 'react';


class VideoDisplay extends React.Component{


   

    getVideodetail = ()=>{
        if(!this.props.selected)return null;

        return(
            <React.Fragment>
                <div className="ui embed">
                    <iframe title={this.props.selected.snippet.title} src={`https://www.youtube.com/embed/${this.props.selected.id.videoId}`}/>

                </div>
            <div className="ui segment">
             <h4 className="ui header">{this.props.selected.snippet.title}</h4>
             <p>{this.props.selected.snippet.description}</p>
            </div>
            </React.Fragment>
        );
    }
    render(){
        
        return(
            <div>
            {this.getVideodetail()}
            </div>
        );
    }
}

export default VideoDisplay;