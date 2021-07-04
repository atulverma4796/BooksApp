import React from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import Navbar from "./navbarA2";
import ShowBooks from "./showBooksA2";
import Frontpage from "./frontPageA2";
import MyBooks from "./myBooks";
import Setting from "./settingA2";
export default class MainComponent extends React.Component{

        state={
            authors:["Harry Potter","Agatha Christie","Premchand","Jane Austen"],
            books:[],
            filterArr:{printType:true,languages:true,filter:true,orderBy:true,noOfEntry:"8"},
        };
        handleChange=(values)=>{
            let s1= {...this.state};
           s1.filterArr.printType=values.printType;
           s1.filterArr.languages = values.languages;
           s1.filterArr.filter  = values.filter;
           s1.filterArr.orderBy = values.orderBy;
           s1.filterArr.noOfEntry = values.noOfEntry;
            this.setState(s1);
        }
        getBooks=(book)=>{
            let s1 = {...this.state};
            let find = s1.books.find(v=>v.id===book.id);
            if(find==undefined){
                s1.books.push(book);
            }else{
                let index = s1.books.findIndex(v=>v.id===book.id);
                s1.books.splice(index,1);
            }
            console.log(s1.books);
            this.setState(s1);
        }
        removeBook=(book)=>{
            let s1= {...this.state};
            let index = s1.books.findIndex(v=>v.id===book.id);
            s1.books.splice(index,1);
            this.setState(s1);
        }
        render(){
            const{authors,books,filterArr}=this.state;
            return <React.Fragment>
                <Navbar author={authors}/>
                <Switch>
                    <Route path="/mybooks" render={(props)=><MyBooks {...props} books={books} removeBook={this.removeBook}/>}/>
                    <Route path="/setting" render={(props)=><Setting {...props} filterArr={filterArr} onOptionChange={this.handleChange} />}/>
                    <Route path="/:value" render={(props)=><ShowBooks {...props} books={books} filterArr={filterArr} getBooks={this.getBooks}/>}/>
                    <Route path="/" component={Frontpage}/>
                    <Redirect from="/" to="/" />
                </Switch>
            </React.Fragment>
        }
}