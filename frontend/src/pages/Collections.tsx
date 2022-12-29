import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

import React, { useEffect, useState } from "react"
import MyImageList from '../components/ImageList'
export const Collections = () => {
    return (<>
        {/* <Card sx={{ minWidth: 275, textAlign: 'left' }}> */}
            <MyImageList />
        {/* </Card> */}
    </>)
}
