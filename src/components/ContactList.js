import React from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types'

export default function ContactList ({contactList, deleting}) {
    return(
        <ul>
            {contactList.map(liEl => <ListItem
            key={liEl.id}
            id={liEl.id}
            name={liEl.name}
            phone={liEl.phone}
            deleteItem={deleting}/>)}
        </ul>
    )
}

ContactList.propTypes = {
    contactList: PropTypes.array,
    deleting: PropTypes.func
}