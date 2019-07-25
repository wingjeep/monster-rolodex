import React from 'react';
import './card-list.css';
import {Card} from '../card/card.component'//must be upper case

export const CardList =(props)=>{
  
    return (<div className='card-list'>
        {
           props.monsters.map(m =>
               
            <Card key={m.id} monster={m}/>)
        }
    </div>);
}