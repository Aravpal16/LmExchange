import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      postsPerPage: 10,
      currentPage: 1
    }
  }

  componentDidMount() {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ products: data });
      });
  }
  showData = () => {

    const { postsPerPage, currentPage, products } = this.state;
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPage, indexOfLastPage)

    try {
      return currentPosts.map((item) => {
        return (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          </tbody>
        )
      })
    } catch (e) {
      alert(e.message)
    }
  }

  showPagination = () => {
    const { postsPerPage, products } = this.state;
    const pageNumbers = [];
    const totalPosts = products.length;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i)
    }

    const pagination = (pageNumbers) => {
      this.setState({ currentPage: pageNumbers })
    }

    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className={this.state.currentPage === number ? 'page-item active' : 'page-item'}>
              <button onClick={() => pagination(number)} className="page-link"> {number} </button>
            </li>
          ))}
        </ul>
      </nav>
    )

  }

  render() {

    return (
      <><h2>ProductList</h2><div className="container">
        <table className="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          {this.showData()}
        </table>

        <div style={{ float: 'right' }}>
          {this.showPagination()}
        </div>

      </div></>
    );
  }
}
export default ProductList;