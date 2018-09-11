import React from 'react';
import Aux from '../../hoc/Auxmod'
import classes from './Layout.css'
const layout = (prop) => (
    <Aux>
        <div>tool bar, side drawer, backdrop</div>
        <main className = {classes.Content}>{prop.children}</main>
    </Aux>
)

export default layout;