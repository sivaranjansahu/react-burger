import React, { Component } from 'react';
import Aux from '../../hoc/Auxmod';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    constructor(props){
        super(props)
    }

    state={
        ingredients :{
            salad:1,
            bacon:0,
            cheese:4,
            meat:0
        }
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients = {this.state.ingredients}/>
                </div>
                <div>Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;