import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PoststatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: grey
`;

const App = () => {

    const data = [
        { label: 'Going to learn React', important: true, id: 'qwew' },
        { label: 'That is so good', important: false, id: 'qweqw' },
        { label: 'I need a break...', important: false, id: 'wrwq' }
    ];

    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PoststatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </AppBlock>
    )
}

export default App;