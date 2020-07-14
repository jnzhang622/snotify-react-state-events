import React from 'react';
import SongItem from './SongItem'

const Queue = props => {
    let state = {
        songQueue: []
    }

    
    let currentSong = null // TODO: how do you figure out what the current song is? 
    
    return (
        <div className="half queue">
            <h2>Queue</h2>
            {currentSong && <iframe 
                title={currentSong.title}
                width="361" 
                height="215" 
                src={`${currentSong.url}?autoplay=1&mute=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
            </iframe>}
            <ol>
                <li>{state.songQueue.map(song => <SongItem {...song} key={song.id} /> )}</li>
            </ol>
        </div>
    )
}

export default Queue;