import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className='cards'>
            <h1>Dê uma olhada nesses destinos!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore a cachoeira escondida no centro da floresta amazônica'
                            label='Aventura'
                            path="/services"
                        />

                        <CardItem
                            src='images/img-2.jpg'
                            text="Viaje pelas ilhas de Bali em um cruzeiro privado"
                            label="Luxo"
                            path="/services"
                        />

                    </ul>

                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Veleje pelo oceano atlântico visitando águas desconhecidas'
                            label='Aventura'
                            path="/services"
                        />

                        <CardItem
                            src='images/img-4.jpg'
                            text="Experiencie uma partida de futebol no topo das montanhas do Himalaia"
                            label="Luxo"
                            path="/services"
                        />

                        <CardItem
                            src='images/img-8.jpg'
                            text="Viaje pelo deserto do Saara em um tour guado de camelo"
                            label="Luxo"
                            path="/services"
                        />

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Cards;
