import React from 'react';
import classes from './BuildControl.css'

const buildControl = (prop) => {
    return (
        <div className={classes.BuildControls}>
            <div>  {prop.label}</div>
            <button className ={classes.button}
            onClick={(evt)=>prop.remove(prop.type)}
            disabled={prop.disabled}
            >Less</button>
            {prop.count}
            <button 
                className ={classes.button}
                onClick={(evt)=>prop.add(prop.type)}>
                More
            </button>
        </div>
    )
}
export default buildControl;