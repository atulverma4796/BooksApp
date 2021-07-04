import React from "react";
import http from "./httpServer";
import queryString from "query-string";
import LeftPanel from "./leftPanel";
export default class ShowBooks extends React.Component{
    state={
        data:{},
        tempArr:[],
    };
  async  fetchData(){
    const queryParam = queryString.parse(this.props.location.search);
    queryParam.maxResults=this.props.filterArr.noOfEntry;
    let searchStr = this.makeSearchString(queryParam);
    searchStr = searchStr.replace("searchText","q");
    searchStr = searchStr.replace("free_ebooks","free-ebooks");
    searchStr = searchStr.replace("paid_ebooks","paid-ebooks")
    if(searchStr!=""){
    let response  = await http.get(`/volumes?key=AIzaSyDnFaI8XudZamOY4RYUzaT9-piOrsWYWnE&${searchStr}`);
    let{data}=response
    this.setState({data:data});
    }
    }
    componentDidMount(){
        this.fetchData();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props){
            this.fetchData();
        }
    }
    makeSearchString=(option)=>{
        const{filter,langRestrict,maxResults,orderBy,printType,startIndex,searchText}=option;
        let searchStr="";
        searchStr = this.addToQuery(searchStr,"searchText",searchText);
        searchStr = this.addToQuery(searchStr,"filter",filter);
        searchStr = this.addToQuery(searchStr,"langRestrict",langRestrict);
        searchStr = this.addToQuery(searchStr,"orderBy",orderBy);
        searchStr = this.addToQuery(searchStr,"printType",printType);
        searchStr = this.addToQuery(searchStr,"startIndex",startIndex);
        searchStr = this.addToQuery(searchStr,"maxResults",maxResults);
        return searchStr;
    }
    
    addToQuery=(str,paramName,paramVal)=>
    paramVal?str?`${str}&${paramName}=${paramVal}`:`${paramName}=${paramVal}`:str;
    handleValue=(option)=>{
    option.startIndex="0";
    option.maxResults=this.props.filterArr.noOfEntry;
    this.callURL("/books",option);
    }
    callURL=(url,option)=>{
        let searchStr = this.makeSearchString(option);
        this.props.history.push({
            pathname:url,
            search:searchStr,
        });
    }
    handlePage=(incr)=>{
        const queryParam = queryString.parse(this.props.location.search);
        let{startIndex="0",maxResults="8"}=queryParam;
        let start = +startIndex+(+incr);
        queryParam.startIndex=start;
        queryParam.maxResults=this.props.filterArr.noOfEntry;
        this.callURL("/books",queryParam);
    }
   
    //title,authors,categories,imageLinks=>thumbnail
    render(){
        const{items=[],totalItems}=this.state.data;
        const{filterArr}=this.props;
        const queryParam = queryString.parse(this.props.location.search);
        let{startIndex="0",maxResults=filterArr.noOfEntry}=queryParam;
        return <div className="container-fluid">
            <div className="row">
            <div className="col-2">
            <LeftPanel option={queryParam} filterArr={filterArr} onOptionChange={this.handleValue}/>
            </div>
            <div className="col-10">
                <div className="text-center">
                    {queryParam.searchText?<h3 className="text-warning">{queryParam.searchText} Books</h3>:""}
                </div>
                <div className="row m">
            {items.map((v,index)=> 
                <div className="col-2 m-1 text-center bg-success" key={index}>
                <img className="img-fluid" src={v.volumeInfo.imageLinks?v.volumeInfo.imageLinks.thumbnail:" "}/><br/>
                <b>{v.volumeInfo.title}</b><br/>
                {v.volumeInfo.authors}<br/>
                {v.volumeInfo.categories}<br/>
                <button className="btn btn-secondary btn-sm"onClick={()=>this.props.getBooks(v)}>
                {this.props.books.find(a=>a.id===v.id)?"Remove from myBook":"Add to myBooks"}</button>
              
            </div>)}
            </div>
            </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2">
                    {startIndex>0?
                    <button className="btn btn-danger"onClick={()=>this.handlePage(-maxResults)}>Prev</button>:""}
                </div>
                <div className="col-6"></div>
                <div className="col-2">
                    {maxResults==0?"":<button className="btn btn-danger" onClick={()=>this.handlePage(maxResults)}>Next</button>}
                </div>
            </div>
        </div>
    }
}