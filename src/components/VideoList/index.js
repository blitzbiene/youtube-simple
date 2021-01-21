import React from 'react';
import VideoItem from './VideoItem';


class VideoList extends React.Component{



    render(){

         console.log(this.props);
        return(
            <div className="ui relaxed divided list">
            {this.props.videos.map(video=>{
                return <VideoItem key={video.id.videoId} video={video} updateSelected={this.props.updateSelected}/>
            })}
            </div>
        );
    }
}

export default VideoList;