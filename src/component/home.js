import React from "react";
import { Redirect } from 'react-router-dom'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: props.status
        }
    }

    render() {
        if (!this.state.status) {
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <h1>This is Home Page</h1>
            </div>
        )
    }
}