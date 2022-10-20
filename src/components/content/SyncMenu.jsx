import React  from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';



export default function SyncMenu(){
    const navigate = useNavigate();
    const Changeview = (referencia) => {
        navigate(referencia);
    }
    return(
        <div>
            <ListItemButton onClick={() =>Changeview('/david-diaz/synct')}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize='large' />
                        </ListItemIcon>
                        <ListItemText primary="Sincronizar Tiempos" />
            </ListItemButton>
        </div>
    )


}