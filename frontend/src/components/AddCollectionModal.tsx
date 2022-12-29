import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, ButtonBase, CircularProgress, Grid, IconButton, InputAdornment, Skeleton, styled, TextField } from '@mui/material';
import { AccountBox, PhotoCamera } from '@mui/icons-material';
import StyleIcon from '@mui/icons-material/Style';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import axios from 'axios';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface Param {
    open: boolean,
    handleClose: () => void
}
export const AddCollectionModal = ({ open, handleClose }: Param): JSX.Element => {
    const [imgSrc, setImg] = React.useState<string>('')
    const [loading, SetLoading] = React.useState<boolean>(false)
    const postCollection = async () => {
        try {
            // const post = await axios.post('/post', {})
            handleClose()
        } catch (error) {
            console.log("%c 🇮🇹: postCollection -> error ", "font-size:16px;background-color:#3ff6f5;color:black;", error)
        }
    }

    const HandleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        if (files) {
            console.log(files[0])
        }
    }
    React.useEffect(() => {
        // setImg("https://offshorly.s3.ap-southeast-1.amazonaws.com/redgie_scale_x4_2.jpg");
    })


    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>

                        <ButtonBase sx={{ height: '35vh', margin: 'auto' }}>
                            {imgSrc == '' ?
                                <Skeleton variant="rectangular" width={'35vh'} height={'35vh'} />
                                :
                                <Img alt="complex" src={imgSrc} />
                            }
                        </ButtonBase>


                        <Button
                            sx={{ width: '35vh', margin: '2px auto auto auto' }}
                            className="line-5"
                            variant="outlined" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" onChange={HandleFile} />
                        </Button>
                        <TextField
                            fullWidth
                            sx={{ width: '80%', margin: '20px auto auto auto' }}
                            label="Collection Title"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <StyleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            sx={{ width: '80%', margin: '20px auto auto auto' }}
                            label="Photographer"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBox />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            sx={{ width: '80%', margin: '20px auto auto auto' }}
                            label="Photographer's GCASH Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PermContactCalendarIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            sx={{ padding: '20px' }}
                        >
                            <Grid item xs={3}>
                                <Button variant="text" disableElevation className='secondary-color' onClick={handleClose}>
                                    CANCEL
                                </Button>
                            </Grid>

                            <Grid item xs={3}>
                                <Button variant="contained" disableElevation onClick={postCollection}>
                                    POST
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal >
        </div >
    );
}