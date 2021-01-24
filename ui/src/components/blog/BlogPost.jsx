import React from 'react';

const BlogPost = ({ postInfo }) => {
  return (
    <article className="blogPost">
      <div className="blogPostDate">{postInfo.postDate}</div>
      <h4 className="blogPostTitle">{postInfo.postTitle}</h4>
      <hr className="blogPostSeparator" />
      <div className="blogPostContent">
        {postInfo.postContent}
      </div>
    </article>
  );
};

export default BlogPost;