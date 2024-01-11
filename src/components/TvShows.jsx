import { useState } from 'react';
import GetMovies from './GetMovies';
import GetComment from './GetComment';
import { Row, Container, Col } from 'react-bootstrap'

const TvShows = () => {
    const sections = [
        {
            sectionName: '⚔️J. R. R. Tolkien Saga⚔️',
            movieTitles: ['Lord', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Hobbit: An Unexpected Journey', 'The Hobbit: The Battle of the Five Armies', 'The Hobbit: The desolation of Smaug'],

        },
        {
            sectionName: '🤣Comedy🤣',
            movieTitles: ['Totò, Peppino e la... malafemmina', 'Ricky Gervais: Humanity', 'Dave Chappelle: The Closer', 'The Fresh Prince of Bel-Air', 'American: The Bill Hicks Story', 'Troisi']
        },
        {
            sectionName: '🛸 Lost in Space 🛸',
            movieTitles: ['Alien', 'Aliens', 'Alien 3', 'Alien: Resurrection', 'Prometheus', 'Alien: Covenant']
        },
        {
            sectionName: 'Horror',
            movieTitles: ['American Horror Story', 'The Haunting of Hill House', 'Bates Motel', 'Stranger Things', 'Penny Dreadful', 'The Walking Dead']
        },
        {
            sectionName: 'Sci-fi',
            movieTitles: ['Cosmos: A Spacetime Odyssey', 'Black Mirror', 'The Expanse', 'Westworld', 'The X-Files', 'Doctor Who']
        },

        {
            sectionName: "Action",
            movieTitles: ['Arrow', 'The Mandalorian', 'Daredevil', 'The Witcher', 'Vikings', 'The Punisher']
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