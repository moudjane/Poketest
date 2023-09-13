import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import FlipCard from 'react-native-flip-card';

const PokemonCard = () => {
    const [pokemons, setPokemon] = useState([]);
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    useEffect(() => {
        fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <ScrollView>
                {pokemons.map((pokemon, index) => (
                    <FlipCard
                        key={index}
                        style={styles.card}
                        friction={6}
                        perspective={1000}
                        flipHorizontal={true}
                        flipVertical={true}
                        flip={isCardFlipped}>

                        <View style={styles.face}>
                            <Text style={styles.text}>Pokemon n°{pokemon.id}</Text>
                            <Text style={styles.title}>{pokemon.name}</Text>
                            <Image source={{ uri: pokemon.image }} style={{ width: 200, height: 200 }} />
                        </View>

                        <View style={styles.back}>
                            <Text style={styles.title}>{pokemon.name}</Text>
                            <Text />
                            <Text style={styles.text}>HP: {pokemon.stats.HP} / Atk: {pokemon.stats.attack} / Def: {pokemon.stats.defense}</Text>
                            <Text />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>{pokemon.apiTypes[0].name}</Text>
                                <Image source={{ uri: pokemon.apiTypes[0].image }} style={{ width: 40, height: 40 }} />
                                {pokemon.apiTypes.length > 1 && (
                                    <>
                                        <Text style={styles.text}>{pokemon.apiTypes[1].name}</Text>
                                        <Image source={{ uri: pokemon.apiTypes[1].image }} style={{ width: 40, height: 40 }} />
                                    </>
                                )}
                            </View>
                        </View>
                    </FlipCard>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#ffffff',
        fontSize: 40,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    },
    card: {
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 5,
        borderRadius: 10,
        height: 300,
    },
    face: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PokemonCard;
