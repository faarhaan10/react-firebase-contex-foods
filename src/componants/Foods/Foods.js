import React from 'react';
import {Container, Row } from 'react-bootstrap';
import Food from '../Food/Food';
import useFoods from './useFoods';

const Foods = () => {
    const {foods} = useFoods();

    return (
        <div className="">
            <Container className="">
                <Row className="my-5 ">
                {
                    foods.length? foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                    ></Food>)
                    :
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                </Row>
            </Container>
                    
        </div>
    );
};

export default Foods;