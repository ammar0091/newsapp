import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types'


export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize:12,
      totalResults:0
    }

  }
   async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.state.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles
      , totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
  handleNextClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.state.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=${this.state.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Top-Headlines</h1>
        <hr></hr>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col md-3 my-3' key={element.url}>
              <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} newsDate={element.publishedAt} />
            </div>
          })}
          <div className="container d-flex justify-content-around">
            <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previos </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr; </button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
