import React from 'react';

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
