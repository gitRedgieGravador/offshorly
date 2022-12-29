import * as React from 'react';
import Box from '@mui/material/Box';
import { GlobalRoutes } from './GlobalRoutes';
import './App.css'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";
import { AddCollectionModal } from './components/AddCollectionModal';
function App() {
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false)
  const handleClose = () => {
    setModal(false)
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, marginTop: '5px' }}>
      <Box sx={{ flexGrow: 1, width: '80%', margin: 'auto', height: '10vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Collection
            </Typography>
            <IconButton aria-label="delete" size="large" color="inherit" onClick={() => setModal(true)}>
              <AddCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1, width: '80%', margin: 'auto' }}>
        <GlobalRoutes />
      </Box>
      <AddCollectionModal open={modal} handleClose={handleClose} />
    </Box>
  );
}

export default App;
