import React from 'react';
import classes from './Search.css';
import { useDispatch } from 'react-redux';
import { search } from '../../store/actions/actions';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';

const Search = props => {
   // const [enteredFilter, setEnteredFilter] = useState(null);
    const dispatch = useDispatch();

    

    const searchHandler = (event) => {
        dispatch(search(event.target.value));
    }
    return (
        <section className={classes.Search}>
            
            <TextField
                label="Search"
                onChange={searchHandler}
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
        </section>
    );

}

export default Search;