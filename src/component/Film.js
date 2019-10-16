import React from 'react';

const Film = (props) => (
    <div key={props.film.id}>
    <p>{`${props.film.title} by ${props.film.director}`}</p>
    </div>
);

export default Film;