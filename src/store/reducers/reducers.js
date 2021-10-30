import { TOGGLE_FAV } from '../actions/actions';
import { SEARCH } from '../actions/actions';
import S1 from '../../Assests/DJ Snake - Let Me Love You ft. Justin Bieber (Official Video).mp3';
import S2 from '../../Assests/Still Want UUU.mp3';
import S3 from '../../Assests/GGMU .wmv.mp3';
import S4 from '../../Assests/Shakira - La La La (Brazil 2014) ft. Carlinhos Brown.mp3';
import S5 from '../../Assests/Romeo.mp3';


const initialState = {
  songs: [
    {
        id: 'p1',
        title: 'Let Me Love You',
        singer:'DJ SNAKE',
        isFav: false,
        search: true,
        source: S1
    },
    {
        id: 'p2',
        title: 'Still Want UU',
        singer: 'ZAK ABEL',
        isFav: false,
        search: true,
        source: S2
    },
    {
        id: 'p3',
        title: 'GGMU',
        singer: 'RED ARMY',
        isFav: false,
        search: true,
        source: S3
    },
    {
        id: 'p4',
        title: 'LA LA LA',
        singer: 'SHAKIRA',
        isFav: false,
        search: true,
        source: S4
    },
    {
        id: 'p5',
        title: 'ROMEO',
        singer: 'CLEMENT',
        isFav: false,
        search: true,
        source: S5
    }

  ]
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case TOGGLE_FAV:
      const songIndex = state.songs.findIndex(
        p => p.id === action.songId
      );
      const newFavStatus = !state.songs[songIndex].isFav;
      const updatedSongs = [...state.songs];
      updatedSongs[songIndex] = {
        ...state.songs[songIndex],
        isFav: newFavStatus
      };
      
      return {
        ...state,
        songs: updatedSongs
      };

      case SEARCH:
            const songIndex1 = state.songs.findIndex(
              p => p.title === action.songName
            );
            
                if(songIndex1 >=0 && songIndex1 <=4) {
                  const newSearch = true;
                  const updatedSongs1 = [...state.songs];
                  updatedSongs1[songIndex1] = {
                      ...state.songs[songIndex1],
                      search: newSearch
                    };
                    return {
                      ...state,
                      songs: updatedSongs1,
                      
                    };
                }
      
                else if(action.songName === '')
                {
                  const newSearch = true;
                  const updatedSongs1 = [...state.songs];
                  for(let i = 0;i<state.songs.length;i++)
                    updatedSongs1[i] = {
                      ...state.songs[i],
                      search: newSearch
                    };
                    return {
                      ...state,
                      songs: updatedSongs1,
                      
                    };
                }
                
                else{
                  const newSearch = false;
                  const updatedSongs1 = [...state.songs];
                  for(let i = 0;i<state.songs.length;i++)
                    updatedSongs1[i] = {
                      ...state.songs[i],
                      search: newSearch
                    };
                    return {
                      ...state,
                      songs: updatedSongs1,
                      
                    };

      } 
    default:
      return state;
  }
};

export default musicReducer;
