
import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/Index";
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import PokemonTable from "../Components/PokemonTable";
import { useNavigate } from "react-router-dom";

export function Profile({pokemonData}) {
    const { name, sprites, moves } = pokemonData || {};
    const navigate = useNavigate()

    useEffect(() => {
        if (!pokemonData) {
            navigate('/')
        }
    }, []);

    if (!pokemonData) {
        return null;
    }

    return (
        <>
            <NavBar hideSearch />
            <Container maxWidth='md'>
                <Paper elevation={3}>
                    <Box display='flex' flexDirection='column' alignItems='center' padding={5}>
                        <Typography variant='h4'>{name}</Typography>
                        <Box 
                            display='flex' 
                            alignItems='center' 
                            width='100%'
                            marginBottom='15px'
                            sx={{flexDirection:{
                                    xs: "column",
                                    md: "row",
                                }
                            }}>
                            <Box component='img' src={sprites.front_default} width='100%' height='100%'></Box>
                            <PokemonTable pokemonData={pokemonData}/>
                        </Box>
                        <Box width='100%'>
                            <Divider>Variação</Divider>
                            <Box display='flex' justifyContent='space-between'>
                                <Box component='img' src={sprites.front_female} width='25%' height='25%'></Box>
                                <Box component='img' src={sprites.front_shiny} width='25%' height='25%'></Box>
                                <Box component='img' src={sprites.front_shiny_female} width='25%' height='25%'></Box>
                            </Box>
                            <Divider>Ataques</Divider>
                            <Box textAlign='center' marginTop='15px'>
                                {moves.map((moveData, key) => (
                                    <Chip key={key} sx={{margin: '5px'}} label={moveData.move.name} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};