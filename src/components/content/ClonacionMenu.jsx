import React  from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useNavigate } from 'react-router-dom';



export default function ClonacionMenu(){
    const navigate = useNavigate();
    const Changeview = (referencia) => {
        navigate(referencia);
    }
    return(
        <>
            <ListItemButton onClick={() =>Changeview('/david-diaz/clonacion')}>
                        <ListItemIcon>
                            <EnhancedEncryptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Clonación De Equipos" />
            </ListItemButton>
        </>
    )


}