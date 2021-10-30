import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider}  from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import MuiAudioPlayer from '../../../containers/AudioPlayer/Playbox';
import S1 from '../../../Assests/DJ Snake - Let Me Love You ft. Justin Bieber (Official Video).mp3';
import indigo from "@material-ui/core/colors/indigo";
import deepPurple from "@material-ui/core/colors/deepPurple";
import createTheme from "@material-ui/core/styles/createMuiTheme";
import Button from "@material-ui/core/Button";
import { useDispatch } from 'react-redux';
import { toggleFav } from '../../../store/actions/actions';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto'
  },
  i1: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0 15px 100px'
  },
  i2: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '35px 0px 20px 15px'
  },
  r1: {
    '& > *': {
      margin: '30px 0 10px 20px',
    },
  }
  }));

const t1 = createTheme({
    palette: {
      type: "light",
      primary: deepPurple,
      secondary: indigo
    }
  });
const MediaControlCard = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
  };  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.singer}
          </Typography>
        </CardContent>
        <MuiThemeProvider theme={t1}>
    <Grid justify="center" alignItems="center" container>
      <Grid item>
        <MuiAudioPlayer
          src={S1}
          autoPlay={false}
          id="1"
        />
        
      </Grid>
    </Grid>
  </MuiThemeProvider>
      </div>
      <CardMedia
        className={classes.cover}
        image="/src/kapil"
        title="Live from space album cover"
      />
      <div className={classes.r1}>
      <Button
        className={classes.i1}
        color="primary"
        variant="contained"
        onClick={toggleFavHandler}>
       {props.isFav ? 'Un-Favorite' : 'Favorite'}
      </Button>
      </div>
      <a href={S1} download="Let me Love you.mp3" className={classes.i2}> <GetAppIcon/> </a>
      </Card>

  );
}

export default MediaControlCard;