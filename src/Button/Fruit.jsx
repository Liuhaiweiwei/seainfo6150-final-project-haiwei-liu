import React from "react";
import {withRouter} from 'react-router-dom';
import { Button} from 'antd';
import './Button.module.css';

class Fruit extends React.Component{
    handleClick(){
        this.props.history.push("/tags/fruit");
    }
    render(){
        return(
            <div>
                <Button onClick={() => this.handleClick()}>Fruit</Button>
            </div>
        );
    }
}
export default withRouter(Fruit);