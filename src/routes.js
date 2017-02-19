import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsView from './components/posts_view';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsView} /> 
    </Route>
);