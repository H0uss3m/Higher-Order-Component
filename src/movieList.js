import React from 'react';
import  MovieCard from './movieCard';
import LoaderHoc from '../src/Hoc/LoaderHoc';
const movieList=({movie=[]})=>{
    return(
        movie.map((el,i)=>{ return <MovieCard item ={el}  key={i} />

        })
    )
}
export default LoaderHoc(movieList);