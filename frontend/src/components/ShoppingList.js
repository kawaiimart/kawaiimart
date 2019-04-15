
// Note: this is basically trash. Just a different tutorial I'm following



import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class ShoppingList extends Component {
    
    // for now we'll just be hardcoding state
    // eventually we'll move on to redux and using the database
    
    state = {
        items: [
            {id: uuid(), name: 'Spoons', price: 44.45},
            {id: uuid(), name: 'Apples', price: 12.33},
            {id: uuid(), name: 'Drumsticks', price: 8383.09}
        ]
    }

    render(){
        //detructuring   "Pulling items out of this.state"
        const {items } = this.state

        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item')
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name}]
                            }))
                        }
                    }}
                >Add Item</Button>


                <ListGroup>
                    <TransitionGroup className="shopping-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                {name}

                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>

                </ListGroup>

            </Container>
        )
    }


}
