import React from 'react';

import './Card.css';

const RC = React.Component;

function CardBorder(props)
{
    return (
        <div className={`cardBorder ${props.type}`}>
            {props.children}
        </div>
    )
}

function CardTitle(props)
{
    return (
        <div className="cardTitle">
            {props.name}
        </div>
    )
}

function CardImage(props)
{
    console.log('image should be: ', props.image);
    return (
        <div className="cardImage" style={{backgroundImage: `url(${props.image})`}}></div>
    )
}

class Card extends RC 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let image;
        let type;
        if (this.props.sprites)
        {
            image = <CardImage image={this.props.sprites.front_default} />
            type = this.props.types[0].type.name;
        }
        else
        {
            image = type = '';
        }

        console.log('type: ', type);


        return (
            <CardBorder type={type} >
                <CardTitle name={this.props.name} />
                {image}
                <div>Height: {this.props.height}, Weight: {this.props.weight}</div>
                <div>{type}</div>
            </CardBorder>
        )
    }
}

export default Card;