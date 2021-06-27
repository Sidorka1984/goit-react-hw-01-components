import React from "react";
import stales from './Container.css'

const Container = ({children }) => {
    return <div className={stales.Container}>{ children }</div>;
}

export default Container;