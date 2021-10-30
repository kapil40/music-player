import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxilairy';
import { useSelector } from 'react-redux';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';

const Music = props => {
        
        const songList = useSelector(state => state.music.songs);
        
        let songsList = (
            <div>           
                {songList.map(song => {
                   
                    if(song.id === 'p1' && song.search )
                    {
                        return (
                            <Card 
                                key={song.id}
                                id={song.id}
                                title={song.title}
                                singer={song.singer}
                                isFav={song.isFav}
                                source={song.source}
                            />
                        )
                    }
                    else if(song.id === 'p2' && song.search )
                    {
                        return (
                            <Card
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            singer={song.singer}
                            isFav={song.isFav}
                            source={song.source}
                        />
                        )
                    }
                    else if(song.id === 'p3' && song.search )
                    {
                        return (
                            <Card 
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            singer={song.singer}
                            isFav={song.isFav}
                            source={song.source}
                        />
                        )
                    }
                    else if(song.id === 'p4' && song.search )
                    {
                        return (
                            <Card
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            singer={song.singer}
                            isFav={song.isFav}  
                            source={song.source}
                            />
                        )
                    }
                    else if(song.id === 'p5' && song.search )
                    {
                        return (
                            <Card
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            singer={song.singer}
                            isFav={song.isFav}
                            source={song.source}
                        />
                        )
                    }
                
                })}
            </div>
 
        );
        return(
            <Auxiliary>
                <Search/>
                {songsList}
            </Auxiliary>
        );
    }


export default Music;