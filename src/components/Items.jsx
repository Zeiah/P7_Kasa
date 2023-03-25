import React from 'react';

/**
 * Methode d'affichage des items d'une liste
 * @param {*} props
 * @param {array} list - liste d'éléments
 * @param {string} item - élément de la liste
 * @returns itération des éléments avec map()
 */

export default function Items(props) {
    return (
        <>
            {props.list &&
                props.list.map((item, index) => (
                    <span key={props.list[index]} className="item">
                        {item}
                    </span>
                ))}
        </>
    );
}
