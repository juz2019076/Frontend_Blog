import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/blog/BlogList';
import BlogForm from './components/blog/BlogForm';
import CommentList from './components/comments/CommentList';
import CommentForm from './components/comments/CommentForm';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/publications" component={BlogList} />
            <Route path="/publications/new" component={BlogForm} />
            <Route path="/comments" component={CommentList} />
            <Route path="/comments/new/:publicationId" component={CommentForm} />
        </Switch>
    </Router>
);

export default Routes;
