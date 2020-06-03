import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    } // constructor

    componentDidMount() {
        axios.get('http://localhost:4000')
            .then(response => {
                //console.log('fetched data:', response);
                this.setState(
                    {
                        data: response.data
                    }
                )
                //console.log('state:' + this.state);
            })
            .catch(error => {
                console.log(error);
            });
    } //componentDidMount

    render() {
        let { data } = this.state;
        console.log('data..',data);
        

        return (<div>{data}</div>)
    } //render

}

export default FetchData;