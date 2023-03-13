import React, { Component } from 'react'
import Spinner from './Spinner'
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize:10,
      totalResults: 0
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
      <div style={{ backgroundColor: '#ece9e9' }}>
        <h3 className='py-2 container'>Top Stories</h3>
        {this.state.loading && <Spinner />}

        {!this.state.loading && this.state.articles.map((elmnt) => {
          return <div className='container d-flex'>
            <div className=" card mb-3" style={{ maxWidth: '840px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={elmnt.urlToImage ? elmnt.urlToImage : "https://hackaday.com/wp-content/uploads/2023/02/morphOS_Michael_MJD_live_cd.jpg"} style={{ height: '100%' }} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{elmnt.title}</h5>
                    <p className="card-text">{elmnt.description}</p>

                    <a rel="noreferrer" href={elmnt.url} target="_blank" style={{ float: 'right' }} className="my-2 btn btn-dark">Read more</a>
                    <p className="card-text"><small className="text-muted">By {elmnt.author} {new Date(elmnt.publishedAt).toGMTString()}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
        <div className="container d-flex justify-content-around">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark my-2">&larr; Previos </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark my-2">Next &rarr; </button>
        </div>
      </div>
    )
  }
}
