import { useState } from 'react';
import GetMovies from './GetMovies';
import GetComment from './GetComment';
import { Row, Container, Col } from 'react-bootstrap'

const TvShows = () => {
    const sections = [
        {
            sectionName: 'Horror',
            movieTitles: ['The Haunting of Hill House', 'American Horror Story', 'Bates Motel', 'Stranger Things', 'Penny Dreadful', 'The Walking Dead']
        },
        {
            sectionName: 'Sci-Fi',
            movieTitles: ['Black Mirror', 'The Expanse', 'Cosmos: A Spacetime Odyssey', 'Westworld', 'The X-Files', 'Doctor Who']
        },
        {
            sectionName: 'Action',
            movieTitles: ['Arrow', 'The Mandalorian', 'Daredevil', 'The Witcher', 'Vikings', 'The Punisher']
        },    
        {
            sectionName: 'Crime',
            movieTitles: ['Breaking Bad', 'Mindhunter', 'Sherlock', 'Narcos', 'The Sopranos', 'Peaky Blinders']
        },
        {
            sectionName: 'Fantasy',
            movieTitles: ['Game of Thrones', 'The Witcher', 'The Mandalorian', 'His Dark Materials', 'The Magicians', 'Shadow and Bone']
        },
        {
            sectionName: 'Drama',
            movieTitles: ['The Crown', 'The Handmaid\'s Tale', 'Stranger Things', 'The Queen\'s Gambit', 'Succession', 'Westworld']
        }
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
            </Row>
        </div>
    );
}

export default TvShows;