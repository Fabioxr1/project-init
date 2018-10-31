import _ from 'lodash';
import React, { Component } from 'react';
import { fetchPostsWp } from '../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentLoader, { Facebook } from 'react-content-loader';

class NewsPost extends Component {


    componentDidMount() {
        this.props.fetchPostsWp();
    }

    renderPost(data) {
        return _.map(data, post => {
            const src_thumb = (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : '';
            return (
                <div key={post.id} className="panel panel-primary content-post">
                    {src_thumb &&
                        <img className="img-thumbnail float-right" src={src_thumb} alt="bitcoin" />
                    }
                    <div className="panel-heading">
                        <Link to={`/news/${post.id}`} >
                            <h1 key={post.id}>{post.title.rendered} </h1>
                        </Link>
                    </div>
                    <div className="panel-body">
                        <div dangerouslySetInnerHTML={{ __html: post.my_excerpt }}></div>
                    </div>
                </div>
            )
        })
    }
    render() {
        const { posts } = this.props;
        if (!posts) {
            return (
                <div>
                    <div className="panel panel-primary content-post">
                        <Facebook height="80" />
                    </div>
                    <div className="panel panel-primary content-post">
                        <Facebook height="80" />
                    </div>
                    <div className="panel panel-primary content-post">
                        <Facebook height="80" />
                    </div>
                </div>
            )
        }

        return (
            <div>
                {this.renderPost(posts)}
            </div>
        )
    }
}


function mapStatetoProps({ posts }) {
    return { posts }
}
export default connect(mapStatetoProps, { fetchPostsWp })(NewsPost);

/*
         <div>

                {
                    posts.map(post => {
                        const src_thumb = (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : '';

                        return (
                            <div key={post.id} className="panel panel-primary content-post">
                                {src_thumb &&
                                    <img className="img-thumbnail float-right" src={src_thumb} alt="bitcoin" />
                                }
                                <div className="panel-heading">
                                    <h1 key={post.id}>{post.title.rendered} </h1>
                                </div>
                                <div className="panel-body">
                                    <div dangerouslySetInnerHTML={{ __html: post.my_excerpt }}></div>
                                </div>
                            </div>

                        )

                    })
                }

            </div>
            */