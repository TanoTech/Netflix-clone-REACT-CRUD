import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Spinner, Card, CardHeader, CardFooter, CardBody, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import GetComment from './GetComment';
import PostComment from './PostComment';
import './MovieDetails.css'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { movieId } = useParams(); 

    useEffect(() => {
        const apiKey = '2b8e11c2';

        axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
            .then(response => {
                setMovieDetails(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Errore nel recupero dei dettagli del film:", error);
                setIsLoading(false);
            });
    }, [movieId]); 

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }

    return (
        <Container >
            {movieDetails && (
                <Card>
                    <CardHeader>
                        <h1>{movieDetails.Title}</h1>
                    </CardHeader> 
                    <CardBody><img src={movieDetails.Poster} alt={movieDetails.Title} /></CardBody>
                    <CardFooter>
                        <p>{movieDetails.Plot}</p>
                    </CardFooter> 
                    <CardFooter><Link to='/tvshows'><Button>Go Back</Button></Link></CardFooter>
                </Card>
            )}
            {movieId && <GetComment imdbId={movieId} />}
            {movieId && <PostComment imdbId={movieId} />}
        </Container>
    );
}

export default MovieDetails;