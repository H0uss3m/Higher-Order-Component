import React, { Component } from 'react';
import Search from './Search';
import MovieList from './movieList';
import {Button} from 'react-bootstrap';
import './App.css';
import {Grid} from 'react-bootstrap';



const moviestab=[{
  id:'1',
  title:'Venom',
  src:'./images/Venom.jpg',
  rating:4,
  alt:'Venom Cover'
},{
  id:'2',
  title:'Ice Age 5',
  src:'./images/iceAge5.jpg',
  rating:3,
  alt:'Ice Age 5 Cover'
},{
  id:'3',
  title:'Hotel Transylvania 3',
  src:'./images/HotelTransylvania3.jpg',
  rating:3,
  alt:'Hotel Transylvania 3 Cover'
},{
  id:'4',
  title:'Baby Driver',
  src:'./images/babyDriver.jpg',
  rating:2,
  alt:'Baby Driver Cover'
}]
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      movies:moviestab,
      filtred:moviestab,
    }
  }
  
  addMovie(movie) {
    this.setState({
      movies: this.state.movies.concat(movie),
    })
  }
  // searchrating(rate){
  //   let z =this.state.news.filter((el,i)=>{return el.rating==rate})
  //   this.setState({filtred:z})
  //  }
    
    search(keyword){
      let key =this.state.movies.filter((el)=>{return el.title.toLowerCase().indexOf(keyword)>-1});
      this.setState({filtred:key});
    
  }
  render() {
    
    return (
     <div>
       <Search searchName={keyword=>this.search(keyword)} />
       <Grid style={{backgroundColor:'grey',marginTop:'5%'}} className="moviesContainer">
            <MovieList movie={this.state.filtred} />
       </Grid>
            <Button  
            bsStyle="primary" 
            style={{marginLeft:'45%',marginBottom:'5%',marginTop:'2%',padding:'3%'}}
            onClick={()=>{this.addMovie({
                    id: Math.random(),
                    title: prompt('movie title: '),
                    alt: prompt('add an alt: '),
                    src:prompt('add a src :'),
                    rating: Number(prompt('movie rating: ')),
                })
            }}
            >AddMovie + </Button>
     </div>
    );
  }
}

export default App;