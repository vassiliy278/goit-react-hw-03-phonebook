import React from 'react';
import style from '../app.module.css';
import PropTypes from 'prop-types'

export default function ListItem ({id, name, phone, deleteItem}) {
    return(
            <li>
                {name} - {phone}
                <button className={style.deleteBtn} onClick={() => deleteItem(id)}>Delete</button>
            </li>
    )
}

ListItem.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
    deleteItem: PropTypes.func
}

