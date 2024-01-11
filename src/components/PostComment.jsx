import React from "react";

class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      ratings: [false, false, false, false, false],
    };
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleRateChange = (e) => {
    this.setState({ rate: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.rate <1 || this.state.rate > 5) {
      alert('Il rating deve essere un numero tra 1 a 5')
      return;
    }
  
    console.log("IMDB ID:", this.props.imdbID);  
  
    const commentData = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.imdbId,  
    };
  
    console.log("Dati del commento da inviare:", commentData); 
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllOWU0MjZlYmM0YjAwMTg1MGYxOTkiLCJpYXQiOjE3MDQ4OTQwMTgsImV4cCI6MTcwNjEwMzYxOH0.EBNrxpBMPhvMsRdCgpJgnbwxy-VC_jKv0Z_FghlAZ3k';
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/';
    const authToken = `Bearer ${apiKey}`;  
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Risposta dalla richiesta POST:', responseData);
    } catch (error) {
      console.error('Errore durante la richiesta POST:', error);
    }
  }
  

  render() {
    return (
      <div>
        <h2>Invia un Commento</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleCommentChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rate">Rate:</label>
            <input
              type="number"
              id="rate"
              name="rate"
              value={this.state.rate}
              onChange={this.handleRateChange}
              required
            />
          </div>
          <button type="submit">Invia Commento</button>
        </form>
      </div>
    );
  }
}

export default PostComment;