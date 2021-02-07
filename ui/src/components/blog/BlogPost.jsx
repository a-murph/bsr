import React from 'react';

const BlogPost = ({ postInfo }) => {
  const postDate = new Date(Number(postInfo.postDate));
  console.log(postInfo.postDate)
  console.log(postDate)

  return (
    <article className="blogPost">
      <div className="blogPostDate">{postDate.toDateString()}</div>
      <h4 className="blogPostTitle">{postInfo.postTitle}</h4>
      <div className="blogPostContent">
        {postInfo.postContent}
      </div>
    </article>
  );
};

export default BlogPost;