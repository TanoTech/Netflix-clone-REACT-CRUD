import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row, Card, CardFooter, Button } from 'react-bootstrap';
import './GetMovies.css'
import GetComment from './GetComment';
import {Link} from 'react-router-dom'
import PostComment from './PostComment'

const GetMovies = ({ movieTitles, sectionName}) => {
    const [movieData, setMovieData] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    useEffect(() => {
        const apiKey = '2b8e11c2';

        const movieFetch = movieTitles.map(movieTitle => {
            const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
            return axios.get(apiUrl);
        });

        Promise.all(movieFetch)
            .then(responses => {
                const movieDataArray = responses.map(response => response.data);
                setMovieData(movieDataArray);

            })
            .catch(error => {
                console.error("Errore nella richiesta API:", error);
            });
    }, [movieTitles]);

    const handleCardClick = (imdbId) => {
        setSelectedMovieId(prevId => {
            console.log('Previous ID:', prevId);
            console.log('New ID:', imdbId);
            return imdbId;
        });
    };

    return (
        <Container>
            <h4 className="text-white">{sectionName}</h4>
            <Row className='d-flex'>
                <Col className='d-flex flex-wrap'>
                    {movieData.map((movie, index) => (
                        <Card className='flex-column' key={index} onClick={() => handleCardClick(movie.imdbID)}>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                key={`movie-section-${index}`}
                            />
                            {selectedMovieId === movie.imdbID && (
                                <CardFooter className='mb-4 border-danger'>
                                    <Link to={`/movie-details/${movie.imdbID}`}><Button>See details</Button></Link>
                                </CardFooter>
                            )}
                        </Card>
                    ))}
                </Col>
                <Col className='Comments'>
                    {selectedMovieId && <GetComment imdbId={selectedMovieId} />}
                    {selectedMovieId && <PostComment imdbId={selectedMovieId} />}
                </Col>
            </Row>
        </Container>
    );
}


export default GetMovies;