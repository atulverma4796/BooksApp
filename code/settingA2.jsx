import React from "react";
export default class Setting extends React.Component{
    state={
        // filterArr:{printType:true,languages:true,filter:"",orderBy:"",noOfEntry:""},
    };
    makeCb=(name,value,label)=>(
        <React.Fragment>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" name={name} value={value}
            checked={value} onChange={this.handleChange}/>
            <label className="form-check-label">{label}</label>
        </div>
       </React.Fragment>
    )
    render(){
        const{filterArr}=this.props;
        return <div className="container">
            <h4 className="text-danger">Select Options for Filtering on Left Panel</h4>
            {this.makeCb("printType",filterArr.printType,"printType--(Restrict to books or magazines)")}
            {this.makeCb("languages",filterArr.languages,"languages--(Restrict the volumes returned to those that are tagged with the specified language)")}
            {this.makeCb("filter",filterArr.filter,"filter--(Filter search results by volume type and availability)")}
            {this.makeCb("orderBy",filterArr.orderBy,"orderBy--(Order of the volume search result)")}
            <div className="col-6">
                <h4 className="text-success">No. of Entries on a Page</h4>
                <div className="form-group">
                    <input type="text" className="form-control" name={"noOfEntry"} value={filterArr.noOfEntry}
                     onChange={this.handleChange}/>
                </div>
            </div>
        </div>
    }
    handleChange=(e)=>{
        const{currentTarget:input}=e;
        let s1 = {...this.props.filterArr};
        input.type=="checkbox"?s1[input.name]=input.checked:s1[input.name]=input.value;
        this.props.onOptionChange(s1);
    }
}