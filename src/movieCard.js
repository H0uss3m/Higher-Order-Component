import React,{Component} from 'react';
import {Col,Row} from 'react-bootstrap';
import './MovieCard.css';
import StarRatingComponent from 'react-star-rating-component';


class MovieCard extends Component {
    render(){
           return(<div style={{margin:'2%'}}>
                <Col style={{border:'1px solid'}} className='movieCover' md={3}>
                    <img src={require(`${this.props.item.src}`)} alt={this.props.item.alt}/>
                    <Row style={{border:'1px solid',backgroundColor:'white'}}>
                        <Col md={6}>
                            <h3 style={{fontSize:'16px', textAlign:'center'}}>{this.props.item.title}</h3>
                        </Col>
                        <Col style={{fontSize:'22px',marginTop:'5%'}} md={6}>
                            <StarRatingComponent 
                                name="rate2" 
                                editing={false}
                                renderStarIcon={() => <span>★</span>}
                                starCount={5}
                                value={this.props.item.rating}
                            />
                        </Col>
                    </Row>

                </Col>
                <Col md={1}></Col>
                </div>
        )
}
}
export default MovieCard;