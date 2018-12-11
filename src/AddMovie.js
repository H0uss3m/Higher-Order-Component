import React from 'react';
import {Button} from 'react-bootstrap';
const AddMovie =({addMovie= () => {}}) =>{
        return(<div>
            <Button  
            bsStyle="primary" 
            style={{marginLeft:'45%',marginBottom:'5%',marginTop:'2%',padding:'3%'}}
            onClick={()=>{addMovie({
                    id: Math.random(),
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: ')),
                })
            }}
            >AddMovie + </Button>
        </div>)
    
}
export default AddMovie;