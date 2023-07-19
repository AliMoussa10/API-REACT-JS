import React, { useState } from "react";
import './App.css';
import axios from 'axios';
import List from './components/table';
import Navbar from './components/navbar';
import useFetchData from "./components/useFetchData";
import TableHeader from "./components/header";
import SearchBars from "./components/searchBar";
import Pagination from "./components/Pagination";


function App() {

  const [selectItem, setSelectItem] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = selectItem ? selectItem : 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const Headers = [
    { name: 'Id', field: 'id' },
    { name: 'Image', field: 'image' },
    { name: 'Title', field: 'title' },
    { name: 'Description', field: 'description' },
    { name: 'Price', field: 'price' },
    { name: 'Brand', field: 'brand' },
    { name: 'Category', field: 'category' }
  ]
  const {
    data,
    setData
  } = useFetchData();
  const [query, setQuery] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query !== '') {
      return await axios.get(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => {
          setData(response.data.products)
        })
        .catch((err) => {
          setData(null)
        })
    } else {
      return axios.get("https://dummyjson.com/products?limit=10&skip=5")
        .then((response) => setData(response.data.products))
        .catch((err) => {
          setData(null)
        });
    }
  }
  const records = Array.from(data).slice(firstIndex, lastIndex);
  const npage = Math.ceil(Array.from(data).length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


  return (

    <main >
      <Navbar />
      <section className="container mt-3">
        <div className="card">
          <div className="card-header"><h3>LISTES DES PRODUITS</h3></div>
          <div className="card-body">
            <SearchBars handleSubmit={handleSubmit} query={query} setQuery={setQuery} selectItem={selectItem} setSelectItem={setSelectItem} />
            <div className="table-responsive">
              <table className="table table-striped table-bordered text-center">
                <TableHeader Headers={Headers} />
                <tbody>
                  <List Data={records} />
                </tbody>
              </table>
              <Pagination prevPage={prevPage} changeCPage={changeCPage} nextPage={nextPage} 
              currentPage={currentPage} numbers={numbers} npage={npage}/>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }

  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }

  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

}


export default App;