import React from "react";

function BlogContent(props) {
  if(!props.isPublished){
    return null;
  }else{
    return (
    <h1>{props.articleText}</h1>;
    <p>{props.minutesToRead} minutes to read</p>
    )

}

export default BlogContent;
