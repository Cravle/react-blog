import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

const PoststatusFilter = () => {
    return (
        <div className="btn-group">
            <Button color='info'>Все</Button>
            <button type="button" className=" btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PoststatusFilter;