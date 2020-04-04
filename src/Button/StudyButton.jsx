import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button} from 'antd';
import './Button.module.css';


class StudyButton extends React.Component{
    handleClick(){
        this.props.history.push("/tags/study");
    }
    render(){
        return(
            <div>
                <Button onClick={() => this.handleClick()}>Study</Button>
            </div>
        );
    }
}
export default withRouter(StudyButton);