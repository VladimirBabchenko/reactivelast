import React from "react";
import ReactDom from "react-dom";

import TodoList from "./components/todo-list.jsx";

const toDoList = [
    { id: 1, name: "toDo1" },
    { id: 2, name: "toDo2" },
    { id: 3, name: "toDo3" },
    { id: 4, name: "toDo4" },
    { id: 5, name: "toDo5" },
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: [...this.state.list, {
                    id: 6,
                    name: "todo6"
                }]
            })
        }, 1000);
    }
    handleClick() {
        console.log(this.divReference)
    }

    render() {
        const { list } = this.state;
        return <div onClick={this.handleClick}
            ref={(ref) => this.divReference = ref}>
            <TodoList list={list} />
        </div>
    }
}

ReactDom.render(<App list={toDoList} />, document.getElementById("app"));