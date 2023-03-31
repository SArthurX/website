/*
class AlertButton extends React.Component{
    render(){
        return(
            <button onClick = {this.props.heandleClick} >
                Hello
            </button>  
        );
    }
};

class App extends React.Component{
    heandleClick(){
    alert('The button was pressed');
    }
    render(){
        return(
        <AlertButton heandleClick={this.heandleClick} />
        );
    }
};
*/



class InputField extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input onChange = {this.props.handleChange}
                    value={this.props.text}
                />                
                <button>Add</button>
            </form>
        );
    }
};

class TodoList extends React.Component{
    render(){
            let count = 0;
            let todoItems = [];

            this.props.items.forEach(function(item){
                count+=1;

                todoItems.push(
                    <TodoItem key={count} todoitem={item} />
                )
            });
            return(
                <dir>{todoItems}</dir>
            );
    }
};

class TodoItem extends React.Component{
    render(){
        return(
            <li>{this.props.todoitem}</li>
        );
    }
};

class TodoApp extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            text: '',
            items: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            items:[
                ...this.state.items,
                this.state.text
            ]
        });
    }

    handleChange(event){
        this.setState({
            text:event.target.value
        });
    }

    render(){
        return(
            <dir>
                <h3>TODO</h3>
                <InputField
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    text={this.state.text}
                    />
                <TodoList items = {this.state.items} />
            </dir>
        );
    }
};

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
    );