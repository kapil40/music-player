import React from 'react';
import classes from './Favourites.css';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';

const Favourites = () => {
    const favoriteProducts = useSelector(state =>
        state.music.songs.filter(p => p.isFav)
      );

      let content = <p className="placeholder">Got no favorites yet!</p>;
    if (favoriteProducts.length > 0) {
    content = (
        <div className={classes.Context}>
          {favoriteProducts.map(song => {
              if(song.id === 'p1')
              {
                  return (
                      <Card 
                          id={song.id}
                          key={song.id}
                          title={song.title}
                          singer={song.singer}
                          isFav={song.isFav}
                          source={song.source}
                  />
                  )
              }
              else if(song.id === 'p2')
              {
                  return (
                      <Card 
                      id={song.id}
                      key={song.id}
                      title={song.title}
                      singer={song.singer}
                      isFav={song.isFav}
                      source={song.source}
                  />
                  )
              }
              else if(song.id === 'p3')
              {
                  return (
                      <Card 
                      id={song.id}
                      key={song.id}
                      title={song.title}
                      singer={song.singer}
                      isFav={song.isFav}
                      source={song.source}
                  />
                  )
              }
              else if(song.id === 'p4')
              {
                  return (
                      <Card
                      id={song.id}
                      key={song.id}
                      title={song.title}
                      singer={song.singer}
                      isFav={song.isFav}  
                      source={song.source}/>
                  )
              }
              else if(song.id === 'p5')
              {
                  return (
                      <Card
                      id={song.id}
                      key={song.id}
                      title={song.title}
                      singer={song.singer}
                      isFav={song.isFav}
                      source={song.source}
                  />
                  )
              }
          
          }
            
          )
          }
        </div>
      );
     
  }
  
    return(
            <div>
                {content}
            </div>
        );
    
}

export default Favourites;