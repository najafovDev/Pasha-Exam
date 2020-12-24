import React from 'react';
import './search.scss';



const Search = () => {
    return (

         <div className="search">
                <h2>Axtarış</h2>
            <form>
                <input type="text" placeholder="Ad, Soyad"></input>
                <input type="text" placeholder="Sturuktur"></input>
                <input type="text" placeholder="Vəzifə"></input>
                <button>Axtar</button>
            </form>
         </div>

    );
};

export default Search;