import React, { useEffect, useState  } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

const RightSider = () => {
        const [Movies, setMovies] = useState([]);
        const [KrMovies, setKrMovies ] = useState([]);
    
        useEffect(() => {
            const endpoint = `${API_URL}upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`;

            fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);           
            });
        }, []);

        useEffect(() => {
            const koreanMovies = Movies.filter((movie) => movie.original_language === 'ko');
            setKrMovies(koreanMovies);
          }, [Movies]);

    return (
        <div>
            <h2>한국 상영예정작</h2>
            <Row gutter={[0, 30]}>
                {KrMovies.map((kmovies) => {
                    return (
                        <React.Fragment key={kmovies.id}>
                        <Col>
                            <Card
                                hoverable
                                style={{
                                // width: 240,
                                }}
                                cover={<img alt={kmovies.title} src={`${IMAGE_BASE_URL}w400${kmovies.poster_path}`} />}
                            >
                            <Meta title={kmovies.title} description={`${kmovies.release_date} 개봉`} />
                            </Card>
                        </Col>
                        </React.Fragment>
                    );
                })}
            </Row> 
        </div>
    )
    
}
export default RightSider
