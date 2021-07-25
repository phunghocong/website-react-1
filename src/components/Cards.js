import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className ="cards__container">
                <div className="cards__wrapper">
                    <ul className=" cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-2.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Luxury"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-5.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Basic"
                        path="/services"
                        />
                    </ul>

                    <ul className=" cards__items">
                        <CardItem
                        src="images/img-1.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-3.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Luxury"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-4.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Basic"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-8.jpg"
                        text= "Explore the world with the hidden fall deep insinde the Amazon Jungle"
                        label="Basic"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
