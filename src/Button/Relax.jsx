import React from "react";
import {withRouter} from 'react-router-dom';
import { Button} from 'antd';
import './Button.module.css';

class Relax extends React.Component{
    handleClick(){
        this.props.history.push("/tags/relax");
    }
    render(){
        return(
            <div>
                <Button onClick={() => this.handleClick()}>Relax</Button>
            </div>
        );
    }
}
export default withRouter(Relax);