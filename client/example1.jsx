const React = require('react');
const ReactDOM = require('react-dom');

//Similar to how web components extends htmlelements
class HelloWorld extends React.Component {
    //Contains info on what to display, can return raw html
    render() {
        return (
          <div>
            Hello World?
          </div>  
        );
    }
};

const init = () => {
    //Render HelloWorld component in div with id 'app'
    ReactDOM.render( <HelloWorld />, document.getElementById('app') );
};
window.onload = init;