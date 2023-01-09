import React, {Component} from 'react'
import Movie from './Movie';
class Movies extends Component {
    state = { }; 
    render() {
//Main.js dagi movies[]ga kirvolish uchun 
//propsdan foydalanamiz
        const {movies = [] } = this.props; 
        return (
            <div className="movies">
                {movies.length ? (
                  movies.map((movie) =>  //movie ichidagi hamma narsani bervor degani(...movie)
                        <Movie key={movie.imdbID} {...movie} />)
                ) : (
                    
                    <div className='page_not_found'>
                        <div className="hit-the-floor">Movie is not found</div>
                        <a 
                            href="/index.html"
                        >GO TO HOME</a> 
                    </div>
                )}
            </div>
            
        );
    }
}
 
export default Movies;