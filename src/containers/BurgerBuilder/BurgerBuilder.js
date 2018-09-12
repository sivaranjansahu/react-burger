import React, { Component } from 'react';
import Aux from '../../hoc/Auxmod';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.4,
    meat: 1.2
}

class BurgerBuilder extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({ ingredients: updatedIngredients,totalPrice:updatedPrice })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount > 0 ? oldCount - 1 : oldCount;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const updatedPrice = oldCount > 0 ?( this.state.totalPrice - INGREDIENT_PRICES[type]) :this.state.totalPrice
        this.setState({ ingredients: updatedIngredients,totalPrice:updatedPrice  })
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger price={this.state.totalPrice} ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BuildControls
                        ingredients={this.state.ingredients}
                        add={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                    />
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;