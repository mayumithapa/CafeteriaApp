import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import './Dropdown.css';
import { IconButton } from '@mui/material';

// Define the top100Films array
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
];

// Custom styled TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#7d6b56', // Border color of the input
        },
        '&:hover fieldset': {
            borderColor: '#7d6b56', // Border color on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: '#7d6b56', // Border color when focused
        },
    },
    '& .MuiInputLabel-root': {
        color: '#7d6b56', // Label color
        '&.Mui-focused': {
            color: '#7d6b56', // Label color when focused
        },
    },
    '& input::placeholder': {
        color: '#7d6b56', // Placeholder color
    },
}));

// Custom styled Chip
const CustomChip = styled(Chip)(({ theme }) => ({
    backgroundColor: '#d8d0c7', // Set the background color
    color: 'white', // Optional: Set text color
}));

export default function Dropdown() {
    return (
        <Stack spacing={3} direction="row" sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: '20px', marginBottom: '10px' }}>
            <Autocomplete
                multiple
                id="tags-outlined-1"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[1]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <CustomTextField
                        {...params}
                        label="Employee Name"
                        placeholder="Employee Name"
                    />
                )}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <CustomChip
                            label={option.title}
                            {...getTagProps({ index })}
                            key={index}
                        />
                    ))
                }
                sx={{ minWidth: 200 }}
            />
            <Autocomplete
                multiple
                id="tags-outlined-2"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[1]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <CustomTextField
                        {...params}
                        label="Food Item"
                        placeholder="Food Item"
                    />
                )}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <CustomChip
                            label={option.title}
                            {...getTagProps({ index })}
                            key={index}
                        />
                    ))
                }
                sx={{ minWidth: 200 }}
            />
            <CustomTextField
                id="outlined-read-only-input"
                label="Cost"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ minWidth: 200 }}
            />
            <IconButton>
                <DeleteOutlineIcon sx={{
                    border: '3px solid #7d6b56',
                    height: '40px',
                    width: '40px',
                    borderRadius: '8px',
                }} />
            </IconButton>

        </Stack>

    );
}










