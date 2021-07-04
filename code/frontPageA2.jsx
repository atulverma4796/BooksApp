import React from "react";
import image from "./image.jpg";
export default class FrontPage extends React.Component{
    state={
        val:{name:""},
    };
    handleChange=(e)=>{
        const{currentTarget:input}=e;
        let s1 = {...this.state};
        s1.val[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {name}= this.state.val;
        console.log(name);
        this.props.history.push(`/books?searchText=${name}`);
    }
    render(){
        const{name}=this.state.val;
        return <div className="container bg-light">
            <div className="col-6 m-auto">
            <img className="img-fluid my-5 mx-5 " width="350px" src={image}/>
            </div>
            <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Book Name" name="name" value={name} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
            </div>
            </div>
        </div>
    }
}