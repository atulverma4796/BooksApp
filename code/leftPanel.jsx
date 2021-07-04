import React from "react";
export default class LeftPanel extends React.Component{
    state={
        languages:[
            {display:"English",value:"en"},
            {display:"French",value:"fr"},
            {display:"Hindi",value:"hi"},
            {display:"Spanish",value:"es"},
            {display:"Chinese",value:"zh"},
        ],
        filters:[
            {display:"Full Volume",value:"full"},
            {display:"Partial Volume",value:"partial"},
            {display:"Free Google e-Books",value:"free_ebooks"},
            {display:"Paid Google e-Books",value:"paid_ebooks"}
        ],
        printTypes:[
            {display:"All",value:"all"},
            {display:"Books",value:"books"},
            {display:"Magazines",value:"magazines"}
        ],
        order:["relevance","newest"],
    };
    makeRadios=(arr,value,name,label)=>(
        <React.Fragment>
            <label className="font-weight-bold">{label}</label>
            {arr.map(v=><div className="form-check"key={v.value}>
                <input type="radio" className="form-check-input " name={name} value={v.value}
                checked={value==v.value} onChange={this.handleChange}/>
                <label className="form-check-label">{v.display}</label>
            </div>)}
        </React.Fragment>
    );
    makeDD=(arr,value,name,label)=>(
        <React.Fragment>
        <label className="font-weight-bold bg-light">{label}</label><br/>
        <select className="from-control " name={name} value={value} onChange={this.handleChange}>
            <option  value="">{label}</option>
            {arr.map(v=><option key={v}>{v}</option>)}
        </select>
        </React.Fragment>
    )
    handleChange=(e)=>{
        const{currentTarget:input}=e;
        let opt = {...this.props.option};
        opt[input.name]=input.value;
        this.props.onOptionChange(opt);
    }
    render(){
        const{languages,filters,printTypes,order}=this.state;
        const{filterArr={}}=this.props;
        console.log(filterArr)
        const{filter,langRestrict,maxResults,orderBy="",printType}=this.props.option;
        return <div className="row bg-light border my-2">
            <div className="col-12 border">
                {filterArr.languages==true?this.makeRadios(languages,langRestrict,"langRestrict","Language"):""}
                <hr/>
                {filterArr.filter==true?this.makeRadios(filters,filter,"filter","Filter"):""}
                <hr/>
                {filterArr.printType==true?this.makeRadios(printTypes,printType,"printType","Print Type"):""}
                <hr/>
                {filterArr.orderBy==true?this.makeDD(order,orderBy,"orderBy","Order By"):""}
            </div>
        </div>
    }
}