import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const GetComment = ({ imdbId}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('questo sta passando a GetComment' + imdbId)

    useEffect(() => {
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllOWU0MjZlYmM0YjAwMTg1MGYxOTkiLCJpYXQiOjE3MDQ4OTQwMTgsImV4cCI6MTcwNjEwMzYxOH0.EBNrxpBMPhvMsRdCgpJgnbwxy-VC_jKv0Z_FghlAZ3k';

        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://striveschool-api.herokuapp.com/api/comments/${imdbId}`, {
                    headers: {
                        "Authorization": `Bearer ${apiKey}`
                    }
                });
                setComments(response.data);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                console.error("Errore durante il fetch dei commenti:", error);
                setError(error);
                setLoading(false);
            }
        };
        fetchComments();
    }, [imdbId]);

    console.log("Numero di commenti ricevuti:", comments.length);

    return (
        <div>
            <h2>Comments:</h2>
            {loading ? (
                <Spinner animation="border" variant="danger" />
            ) : comments.length > 0 ? (
                comments.map(comment => (
                    <div key={comment._id}>
                        <p>{comment.author}</p>
                        <p>{comment.rate}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
}


export default GetComment;