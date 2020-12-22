import React from 'react';

class ErrorBountry extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Opps..This is not good.</h1>
        }
        return this.props.children;
    }
}
export default ErrorBountry;