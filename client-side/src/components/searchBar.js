import SearchIcon from '@mui/icons-material/Search';
import { TextField, Box} from '@mui/material';

const SearchBar =()=>{
    return(
        <Box sx={{ml: 'auto', width: '85%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <SearchIcon color='primary'/>
            <TextField variant="standard" height='100' sx={{width: '100%', ml: '1%'}} placeholder='search job...'/>
        </Box>
    )
}

export default SearchBar