import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import {useSelector} from 'react-redux';

import {movieService} from "../../services";


const MovieTrailer = () => {
    const [trailerId, setTrailerId] = useState(null);
    const {selectedMovie} = useSelector((state) => state.movies);

    const getMovieTrailer = async (id) => {
        try {
            const {data} = await movieService.getMovieVideos(id);
            const trailer = data.results.find((result) => result.type === 'Trailer');
            if (trailer) {
                setTrailerId(trailer.key);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (selectedMovie) {
            getMovieTrailer(selectedMovie.id);
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
