import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:6,
    category:'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
    
  }
   capitaliseFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
   }

    articles=[];
    constructor(props){
        super(props);
        this.state={
            articles:this.articles,
            // articles=[]
            loading:false,
            page:1  //initial page number
        }
        document.title= `${this.capitaliseFirstLetter(this.props.category)}-BharatTak`;
    }
    
   async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f672f2f04d63429d9b73bf6471535557&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState(
      {articles:parsedData.articles,
       totalArticles:parsedData.totalResults,
       loading:false
      })
   }
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f672f2f04d63429d9b73bf6471535557&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data= await fetch(url);
        // let parsedData=await data.json();
        // this.setState(
        //   {articles:parsedData.articles,
        //    totalArticles:parsedData.totalResults,
        //    loading:false
        //   })
        this.updateNews();
    }
    handlePrevClick=async()=>{
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f672f2f04d63429d9b73bf6471535557&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data= await fetch(url);
      // let parsedData=await data.json();
      // this.setState(
      //   { 
      //     articles:parsedData.articles,
      //     page:this.state.page-1,
      //     loading:false
      //   })
      this.setState({page:this.state.page-1});
      this.updateNews();
    };
    handleNextClick=async()=>{
      // if(Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1){}
      // else{
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f672f2f04d63429d9b73bf6471535557&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data= await fetch(url);
      // let parsedData=await data.json();
      // this.setState(
      //   { 
      //     articles:parsedData.articles,
      //     page:this.state.page+1,
      //     loading:false
      //   })
      // }
      await this.setState({page:this.state.page+1});
      this.updateNews();
    };
  render() {
    return (
        <div className='my-3 container'>
            <h1 className="text-center" style={{marginTop:'60px'}}>Bharat-Tak:TOPHEADLINES from {this.capitaliseFirstLetter(this.props.category)} category </h1>
            {this.state.loading&& <Spinner />}
        <div className="row">
            {!this.state.loading&&this.state.articles.map((element)=>{
             return<div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>})
            }
      </div>
      <div className=" container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr;Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next&rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
