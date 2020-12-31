import react, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types' ;

class Todos extends Component {
    //constructor(props){
    //    super(props);
    //    this.props.todo = this.props.todo.bind(this) ;
    //};
    render() {

        return this.props.todos.map((todo) => (
            <TodoItem key = {todo.id} todo = {todo} />
           
        ));
    }
  
}
//Todos.propTypes = {
//    todos = PropTypes.array.isRequired
//}

export default Todos;
