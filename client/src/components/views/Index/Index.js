import React, { useEffect, useState  }from 'react';
import { Row, FloatButton } from 'antd';
import AntCard from '../AntCard/AntCard';
import MainImage from '../MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';

const Index = () => {
    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage ] = useState([]);

    useEffect(() => {
        const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`;

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovies(response.results);           
            const images = response.results.slice(0, 3).map(movie => movie.backdrop_path);
            setMainMovieImage(images);
        });
    }, []);

  return (
    <div style={{ 
        width: '1000px', 
        margin: '1rem auto ' 
        }}>
            {MainMovieImage && 
                <MainImage
                    image1 = {`${IMAGE_BASE_URL}w1280${MainMovieImage[0]}`} 
                    image2 = {`${IMAGE_BASE_URL}w1280${MainMovieImage[1]}`} 
                    image3 = {`${IMAGE_BASE_URL}w1280${MainMovieImage[2]}`} 
                />
            }
        <h2>인기 영화</h2>
        <hr></hr>
        <Row gutter={[10, 10]}>
        {Movies.map((movies) => {
            return (
            <React.Fragment key={movies.id}>
            <AntCard
                path={`${IMAGE_BASE_URL}w400${movies.poster_path}`}
                title={movies.title}
                movieId={movies.id}
            />
            </React.Fragment>
            );
        })}
        </Row>
        <FloatButton.BackTop visibilityHeight={0} />

      </div>
  )
}

export default Index
