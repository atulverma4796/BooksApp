import React from "react";
export default class MyBooks extends React.Component{
    state={};
    render(){
        const{books}=this.props;
        return <div className="container-fluid my-2">
            <div className="col-12  bg-success text-center">
                <h3 className="text-dark">{books.length==0?"No Book added to myBooks":"My Book List"}</h3>
            </div>
            {books.length==0?"":(
                  <div className="row m">
                  {books.map((v,index)=> 
                      <div className="col-2 m-1 text-center bg-success" key={index}>
                      <img className="img-fluid" src={v.volumeInfo.imageLinks?v.volumeInfo.imageLinks.thumbnail:" "}/><br/>
                      <b>{v.volumeInfo.title}</b><br/>
                      {v.volumeInfo.authors}<br/>
                      {v.volumeInfo.categories}<br/>
                      <button className="btn btn-secondary btn-sm"onClick={()=>this.props.removeBook(v)}>
                      Remove from myBooks</button>
                    
                  </div>)}
                  </div>
            )}
        </div>
    }
}