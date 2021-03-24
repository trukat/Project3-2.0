import { React } from 'react';
import './Cards.css';
import CardItem from './CardsItem';


function Cards() {
    return (

        <div className='Cards'>
            <h1>Featured</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='Images/F1.gif'
                            text='About The Social Media App
                            adsjasdasndjkasdajksndajsd asdnasjdnajsndajksndas dasnd
                            sjdjasndasdna'
                            path='/Register'
                        />
                        <CardItem
                            src='Images/F2.gif'
                            text='Featured alsjdlajdklasndjasndjas 
                            adnsajdnasnd'
                            path='/Register'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;