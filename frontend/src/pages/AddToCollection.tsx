import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { AccountCircle } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const AddToCollection = () => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                height: '40vh',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ButtonBase sx={{ height: '35vh', margin: 'auto' }}>
                        <Img alt="complex" src="https://offshorly.s3.ap-southeast-1.amazonaws.com/redgie_scale_x4_2.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={9} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Photographer"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            />
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Remove
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}