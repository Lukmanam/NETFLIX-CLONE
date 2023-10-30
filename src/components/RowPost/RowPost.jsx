import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
    setMovie(response.data.results)}).catch(err=>{
       alert("Network Error")
       })

  },[])

  const opts={
      height:'390',
      width:'100%',
      playerVars:{
        autoplay:1,
      },

  }
  const handlemovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log('Array is Empty');
      }
    })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
      <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} alt="Network Issue"  src={`${imageUrl+obj.backdrop_path}`}/>

        )}
        
      </div>

     {urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
