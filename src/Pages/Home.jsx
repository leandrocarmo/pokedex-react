import react, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar/Index';
import PokemonCard from '../Components/PokemonCard';
import { Box, Container, Grid } from '@mui/material';
import { Skeletons } from '../Components/Skeletons';
import { useNavigate } from 'react-router-dom';

export function Home({setPokemonData}) {
    const [pokemons, setPokemons] = useState ([]);
    const navigate = useNavigate ();

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1;  i < 350; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemons(res))
        .catch((err) => console.log(err));
    }

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if(name === "") {
            getPokemons()
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }

        setPokemons(filteredPokemons);
    };

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate('/profile');
    };
    
    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth='false'>
                <Grid container spacing={6}>
                    {pokemons.length === 0 ? (
                        <Skeletons />
                    ) : (
                        pokemons.map((pokemon, key) => (
                            <Grid item xs='12' sm='6' md='4' lg='2' key={key}>
                                <Box onClick={() => pokemonPickHandler(pokemon.data)} >
                                    <PokemonCard 
                                        name={pokemon.data.name} 
                                        image={pokemon.data.sprites.front_default}
                                        types={pokemon.data.types}
                                    />
                                </Box>
                            </Grid>
                        ))                   
                    )}
                </Grid>
            </Container>
        </div>
    )
}