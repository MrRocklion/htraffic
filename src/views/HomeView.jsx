import { React, useEffect, useState } from "react"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { collection, query, onSnapshot } from "firebase/firestore";
import Grid from '@mui/material/Grid';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import TextField from '@mui/material/TextField';
import { db } from "../firebase/firebase-config";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import UpdateIcon from '@mui/icons-material/Update';
import CustomMap from "../components/CustomMap";
import "../css/HomeView.css"
export default function HomeView() {
    const [controladres, setControladores] = useState([]);
    const getData = () => {
        const reference = query(collection(db, "controladores"));
        onSnapshot(reference, (querySnapshot) => {
            var devices = [];
            querySnapshot.forEach((doc) => {
                devices.push(doc.data());
            });
            setControladores(
                devices
            );

        });

    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <Container maxWidth="md">
                <h2>Lista De Controladores</h2>
                <Button variant="contained" endIcon={<CloudDownloadIcon />} sx={{ marginBottom: 2 }}>
                    Listar Controladores
                </Button>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Table className='home-t'>
                            <Thead>
                                <Tr>
                                    <Th className='home-t-th'>#</Th>
                                    <Th className='home-t-th'>Acciones</Th>
                                    <Th className='home-t-th'>Ip</Th>
                                    <Th className='home-t-th'>Mac</Th>
                                    <Th className='home-t-th'>Nombre</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {controladres.map((dato, index) => (
                                    <Tr key={index} >
                                        <Td>
                                            {index + 1}
                                        </Td>
                                        <Td >
                                            <Button variant="contained">SELECCIONAR</Button>
                                        </Td>
                                        <Td >
                                            {dato.ip}
                                        </Td>
                                        <Td >
                                            {dato.mac}
                                        </Td>
                                        <Td >
                                            {dato.nombre}
                                        </Td>

                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Grid>
                <Grid item md={12}>
                    <div className="h-controler-select">
                    <h5>Controlador Seleccionado: </h5> <p>192.168.1.2</p>-<p>controlador Av-cañaris</p>
                    </div>
                </Grid>
                <Grid item md={8}>
                <TextField id="outlined-basic" label="Tiempo Umbral de Cache" variant="outlined" fullWidth/>
                </Grid>
                <Grid item md={4}  >
                <Button variant="contained" startIcon={<UpdateIcon />} fullWidth sx={{height: "100%",backgroundColor:"#52BE80"}}>ACTUALIZAR</Button>
                </Grid>
                <Grid item md={12}>
                    <div className="container-map">
                        <CustomMap/>
                    </div>
                </Grid>
                </Grid>
            </Container>
        </>
    );

}