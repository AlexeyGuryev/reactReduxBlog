import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        //equals:
        //const handleSubmit = this.props.handleSubmit;
        //const title = this.props.fields.title;
        
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    {/*equals <input type="text" className="form-control" formProps={title}/>*/}
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>                

                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    return errors;
}

// reduxForm like connect, but 1st arg is form config
// 2nd arg is mapStateToProps
// 3rd arg is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);