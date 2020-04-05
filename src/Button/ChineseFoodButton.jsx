import React from "react";
import {withRouter} from 'react-router-dom';
import { Button} from 'antd';
import './Button.module.css'

class ChineseFoodButton extends React.Component{
    handleClick(){
        this.props.history.push("/tags/chinesefood");
    }
    render(){
        return(
            <div>
                <Button onClick={() => this.handleClick()}>Food</Button>
            </div>
        );
    }
}
export default withRouter(ChineseFoodButton);