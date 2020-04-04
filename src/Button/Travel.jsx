import React from "react";
import {withRouter} from 'react-router-dom';
import { Button} from 'antd';
import './Button.module.css';

class Travel extends React.Component{
    handleClick(){
        this.props.history.push("/tags/travel");
    }
    render(){
        return(
            <div>
                <Button onClick={() => this.handleClick()}>Travel</Button>
            </div>
        );
    }
}
export default withRouter(Travel);