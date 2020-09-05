import React from 'react';
import LoadingImage from '../../images/loading.gif' 

const  Loading=()=> {
    return (
        <div>
            <img src={LoadingImage} alt="Loading"/>
        </div>
    );
}

export default Loading;