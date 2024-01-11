import { useState } from 'react';
import GetMovies from './GetMovies';
import GetComment from './GetComment';
import { Row, Container, Col } from 'react-bootstrap'

const TvShows = () => {
    const sections = [
        {
            sectionName: '⚔️J. R. R. Tolkien Saga⚔️',
            movieTitles: ['Lord', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Hobbit: An Unexpected Journey', 'The Hobbit: The Battle of the Five Armies'],

        },
        {
            sectionName: '🤣Comedy🤣',
            movieTitles: ['Totò, Peppino e la... malafemmina', 'Ricky Gervais: Humanity', 'Dave Chappelle: The Closer', 'The Fresh Prince of Bel-Air', 'American: The Bill Hicks Story']
        },
        {
            sectionName: '🛸 Lost in Space 🛸',
            movieTitles: ['Alien', 'Aliens', 'Alien: Resurrection', 'Prometheus', 'Alien: Covenant']
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

export default TvShows;