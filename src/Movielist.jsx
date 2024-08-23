import axios, { Axios } from 'axios'
import { Result } from 'postcss'
import React, { useEffect, useState } from 'react'

export default function Movielist() {
    let[movieData,SetmovieData]=useState([])
    let getMovielist=()=>{
        let apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
        axios.get(apiUrl)
        .then((res)=>{
            return res.data
        })
        .then((finalRes)=>{
            // return res.data
            SetmovieData(finalRes.results)
        })
    }

    useEffect(()=>{
        getMovielist()
    },[])
  return (
    <div>
        <h1 className='text-[40px] text-orange-900 mb-4'>Movie app</h1>
        <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-4'>
            {
            
            movieData.length>=1  ? 
            movieData.map((items)=>{
                return(
                    <MovieItems items={items}/>
                )
            }) 
            :
            <div>No Data found</div>
            }

        </div>
    </div>
  )
}
function MovieItems({items}){
    let imagePath=`https://image.tmdb.org/t/p/w1280/`
    return(
        <div className='shadow-lg'>
            <img src={imagePath+items.poster_path}/>
            <div>
                <h3 className='p-3'>{items.original_title}</h3>
                <h4>{items.release_date}</h4>
            </div>
        </div>
    )
}