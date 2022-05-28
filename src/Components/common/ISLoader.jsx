import Loader from "react-loader-spinner";

import React from "react";

function ISLoader() {
    return (
        <div style={{textAlign:"center"}} >
            <h2>Booking Now...</h2>
            <Loader type="Bars" color="#000000" height={280} width={280} />
        </div>
    );
}

export default ISLoader;
