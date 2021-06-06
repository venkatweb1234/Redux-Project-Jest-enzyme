import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    const { title, desc } = props;
    if (!title) {
        return null;
    }
    return (<div data-test="listItemComponent">
        <h1 data-test="CompoentTitle">{title}</h1>
        <p data-test="componentDesc">{desc}</p>
    </div>)
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}
export default ListItem;