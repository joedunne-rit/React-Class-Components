const React = require('react');
const ReactDOM = require('react-dom');

class HelloUser extends React.Component {
    //props = properties to pass in, all constructors use them
    //constructor used to add functionality to react component
    //super is constructor of parent class
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
        };
    }

    handleNameChange = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
        return (
            <div>
                <p>Hello {this.state.username}</p>
                <label>Change Name:</label>
                <input type="text" value={this.state.username} 
                    onChange={this.handleNameChange}/>
            </div>
        );
    };
};

const init = () => {
    //Can add state properties in reactdom renderer
    ReactDOM.render(<HelloUser username="Moztove" />, document.getElementById('app'));
};
window.onload = init;