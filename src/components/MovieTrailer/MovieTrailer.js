import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import {useSelector} from 'react-redux';

import {movieService} from "../../services";


const MovieTrailer = () => {
    const [trailerId, setTrailerId] = useState(null);
    const {selectedMovie} = useSelector((state) => state.movies);

    useEffect(() => {
        const savedTrailerId = localStorage.getItem('trailerId');
        if (savedTrailerId) {
            setTrailerId(savedTrailerId);
        }
    }, []);

    useEffect(() => {
        if (selectedMovie) {
            async function fetchMovieTrailer() {
                try {
                    const {data} = await movieService.getMovieVideos(selectedMovie.id);
                    const trailer = data.results.find((result) => result.type === 'Trailer');
                    if (trailer) {
                        const trailerId = trailer.key;
                        localStorage.setItem('trailerId', trailerId);
                        setTrailerId(trailerId);
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            fetchMovieTrailer();
        }
    }, [selectedMovie]);

    const opts = {
        height: '620px',
        width: '1100px',
    };

    return (
        <div>
            {trailerId && <YouTube videoId={trailerId} opts={opts}/>}
        </div>
    );
};

export {MovieTrailer};
