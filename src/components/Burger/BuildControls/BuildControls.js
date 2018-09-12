import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {
                controls.map((elem) => <BuildControl 
                count={props.ingredients[elem.type]} 
                label={elem.label} 
                key={elem.label} 
                type={elem.type}
                add={props.add}
                remove={props.remove}
                disabled = {props.ingredients[elem.type]===0}
                />
                )
            }
        </div>
    )
}
export default buildControls;