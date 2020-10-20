import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PoststatusFilter from '../post-status-filter';

const App = () => {
    return( 
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PoststatusFilter/>
            </div>
            
        </div>
    )
}

export default App;