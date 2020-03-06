import React from 'react';
import DisplayOne from './DisplayOne';
import DisplayTwo from './Displaytwo'

function Content (props) {
    const isChanged = props.isChanged;
    if (isChanged) {
        return <DisplayTwo />;
    }
    return <DisplayOne />;
}
export default Content 