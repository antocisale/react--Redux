import React from 'react';
import { connect } from 'react-redux';
import {
    getMovie,
    showLoadingSpinner,
    clearMovie,
    setMoviePersistedState
} from '../actions';
import Movie from '../components/Movie/Movie';

class MovieContainer extends React.Component{
    componentDidMount(){
        const { movieId } = this.props.match.params;

        if (sessionStorage.getItem(`${movieId}`)) {
          const movie = JSON.parse(sessionStorage.getItem(`${movieId}`));
          this.props.setMoviePersistedState(movie);
        } else {
          this.props.getMovie(movieId);
        };
    }
    
    getMovie= (movieId)=>{
        this.props.clearMovie();
        this.props.showLoadingSpinner();
        this.props.getMovie(movieId);
    }

    render(){
        return (
            <Movie
                movie = {this.props.movie}
                directors = {this.props.directors}
                actors = {this.props.actors}
                loading = {this.props.loading}
            />

        )

    }

}


const mapStateToProps = state =>{
    return state.movie;
}

const mapDispatchToProps = {
    clearMovie,
    getMovie,
    showLoadingSpinner,
    setMoviePersistedState
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieContainer)