import React from "react"
import blogcardStyles from "./blogcard.module.scss"
import { Link } from "gatsby"

const BlogCard = props => {
  return (
    <div className={props.hero}>
      <Link to={props.post} className={blogcardStyles.card}>
        <div
          className={blogcardStyles.thumb}
          style={{
            backgroundImage: "url(" + props.URL + ")",
          }}
        ></div>
        <article>
          <h1>{props.title}</h1>
          <p>{props.excerpt}</p>
          <span>{props.date}</span>
        </article>
      </Link>
    </div>
  )
}

export default BlogCard
