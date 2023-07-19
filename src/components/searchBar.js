import React from 'react';

const SearchBar = ({handleSubmit,query,setQuery,  selectItem, setSelectItem}) => (
    <form className="row mb-4" onSubmit={handleSubmit}>

              <div className="form-group col-md-4">
                <input type="text"
                  name="search_box" id="search_box"
                  className="form-control" placeholder="Recherche..."
                  value={query || ''}
                  onChange={(e) => setQuery(e.target.value)} />
              </div>
              <div className="form-group col-md-2">
                <button type="submit" className="btn btn-primary form-control">Rechercher</button>
              </div>
              <div className="form-group col-md-3 ms-5 d-flex gap-auto">
                <span id="select" className="">Item par page</span>
                <select  aria-labelledby="select" className="form-control" defaultValue={'4'} value={selectItem}
                  onChange={e => setSelectItem(e.target.value)}>
                  <option value={'4'}>4</option>
                  <option value={'10'}>10</option>
                  <option value={'20'}>20</option>
                  <option value={'30'}> 30</option>
                  <option value={'40'}>40</option>
                </select>
              </div>
            </form>


)

export default SearchBar;
