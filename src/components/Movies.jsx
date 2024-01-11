import { useState } from 'react';
import GetMovies from './GetMovies';
import GetComment from './GetComment';
import { Row, Container, Col } from 'react-bootstrap'

const Movies = () => {
    const sections = [
        {
            sectionName: 'Drama',
            movieTitles: ['Oppenheimer', 'The Warrior', 'Chemical Hearts', 'Fatima', 'Players', 'The King of Staten Island'],

        },
        {
            sectionName: 'Horror',
            movieTitles: ['The Exorcist', 'Jeepers Creepers', 'Arcane', 'Dracula', 'Dust', 'Scream']
        },
        {
            sectionName: 'Documentaries',
            movieTitles: ['Planet Earth', 'The Act of Killing', 'Blackfish', 'The Fog of War', 'Man on Wire', 'The Social Dilemma']
        },
        {
            sectionName: 'Action',
            movieTitles: ['Die Hard', 'Mad Max: Fury Road', 'John Wick', 'Gladiator', 'The Dark Knight', 'Inception']
        },
        {
            sectionName: 'Comedy',
            movieTitles: ['Superbad', 'Bruce ALmighty', 'Step Brothers', 'Bridesmaids', 'The Grand Budapest Hotel', 'Pineapple Express']
        },
        {
            sectionName: 'Science Fiction',
            movieTitles: ['Blade Runner', 'The Matrix', 'Star Wars', 'Interstellar', 'Avatar', 'E.T. the Extra-Terrestrial']
        },

    ];

    const [selectedId, setSelectedId] = useState(null);

    const handleMovieSelection = (imdbId) => {
        setSelectedId(imdbId);
    }

    return (
        <div className='sectionVideo'>
            <Row className='flex-column'>
                {sections.map((section, index) => (
                    <GetMovies key={index} movieTitles={section.movieTitles} sectionName={section.sectionName} imdbId={selectedId} onClick={handleMovieSelection} />
                ))}
                {selectedId !== null && <GetComment imdbId={selectedId} />}
            </Row>
        </div>
    );
}

export default Movies;