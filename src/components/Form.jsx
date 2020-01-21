import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this); //in plus
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleClick() {
        this.props.add(this.state.value);
        this.setState({
            value: ''
        })
    };

    deleteItem(e, index){
      // this.props.remove(this.state.id);
      // this.setState({
      //     value:''
      // })
      //   e.preventDefault();
        this.props.remove(index);
    };

    render() {
        return (
            <div>
                <input type={"text"} value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.handleClick}>Submit</button>
                {/*<input type={"text"} value={this.state.value} onChange={(e) => this.handleChange(e)}/>*/}
                <button onClick={(e) => this.deleteItem(e)}>Sterge</button>
            </div>
        );
    }
}

export default Form;