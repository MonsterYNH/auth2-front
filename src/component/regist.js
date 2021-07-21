import React from "react";
import { Redirect } from 'react-router-dom'
import { Empty } from 'antd'

export default class Regist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: props.status
        }
    }

    render() {
        if (this.state.status) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂未开放，尽情期待！"/>
            </div>
        )
    }
}