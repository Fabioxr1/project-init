import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostWpById } from '../action';
import { Link } from 'react-router-dom';
class WpPost extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPostWpById(id);
    }
    render() {
        const { posts } = this.props;
        if (!posts) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>{posts.title.rendered}</h1>
                <ul className="list-inline">
                    {posts._embedded['wp:term'][0].map(category => {
                        return <li key={category.id} className="list-inline-item">{category.name}</li>
                    })
                    }
                </ul>
                <div dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>
                    {posts.previous &&
                        <Link to={`/news/${posts.previous.id}`} >
                            <h1 key={posts.previous.id}>{posts.previous.slug} </h1>
                        </Link>
                    }
                    {posts.next &&
                        <Link to={`/news/${posts.next.id}`} >
                            <h1 key={posts.next.id}>{posts.next.slug} </h1>
                        </Link>
                    }     
            </div>
        )
    }
}
function mapStatetoProps({ posts }, owsProps) {
    return { posts: posts[owsProps.match.params.id] }
}
export default connect(mapStatetoProps, { fetchPostWpById })(WpPost);