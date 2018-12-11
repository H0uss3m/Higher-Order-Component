import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Search.css';
import StarRatingComponent from 'react-star-rating-component';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:'',
            rating: 2,
        }
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
   
    handleChange =(e)=>{
        this.setState({keyword:e.target.value})
        this.props.searchName(this.state.keyword)
    }
    render() {
        return ( 
            <Grid className="search">
            <Row>
              <Col md={8} className='searchBox'>
              <input type='text' placeholder='Type movie name to search ...' onChange={this.handleChange}/>
              </Col>
              <Col className="Stars" md={4}>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                    onChange={this.handleStarChange}
                />
              </Col>
            </Row>
          </Grid>
         );
    }
}
 
export default Search;