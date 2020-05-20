import React from 'react';
import axios from 'axios';

class FetchData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataFetched:false,
            data:[]
        }
    } // constructor

    componentDidMount(){
        axios.get('http://localhost:4000')
        .then(response=>{
            console.log('fetched data:',response);
            this.setState(
                {
                    dataFetched:true,
                    data:response.data
                }
            )
            console.log('state:'+this.state);
        })
        .catch(error=>{
            console.log(error);
        });
    } //componentDidMount

    render(){
        let {data}=this.state;
        let newdata=data.map((data)=>{
            console.log('data..',data);
            return newdata;
        })
    return(<div>{data}</div>)
    } //render

}

export default FetchData;