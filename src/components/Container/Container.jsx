import React from "react";
import stales from './Container.module.css'

function Container({ children }) {
    return <div className={stales.Container}>{ children }</div>;
}

export default Container;