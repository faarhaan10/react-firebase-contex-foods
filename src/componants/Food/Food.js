
import React, { useState } from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import useLocalDb from '../../hooks/useLocalDb';

const Food = (props) => {
    // const [products, setProducts] = useState();
    const {idMeal,strMeal, strMeasure1, strMealThumb,strCategory} = props.food;
    const {addToDb} = useLocalDb();

    const handleCart = () => {
        addToDb(idMeal);
    }
    return (
            <Col md={6} xs={12} lg={3} className=" my-2">
                <div className="rounded shadow h-100">
                    <Image fluid  className="p-2" src={strMealThumb}/>
                    <div className="ps-2">
                        <p className="my-0"><small>{strCategory}</small></p>
                        <h3 className="my-0">{strMeal}</h3>
                                <h4 className="foods-color fw-bold">{strMeasure1}</h4>   
                        <div className="d-flex align-items-end justify-content-between pe-2 pb-2">
                            <div className="">
                                <Button onClick={handleCart} className="text-white" variant="warning">Add To Cart <i className="fas fa-cart-arrow-down"></i></Button>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
                                <button type="button" className="ms-2 btn btn-outline-warning "><i className="fas fa-eye"></i></button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </Col>
    );
};

export default Food;