import React from 'react'
import './RecentBlog.css'
import { recentBlogData } from './../recentBlogData';

const RecentBlog = () => {
  return (
    <div className="container" id='blog-container'>
        <div className="blog-main-title">
            <h4>Recent Blog</h4>
        </div>
        <div className="blog-contents">
            {recentBlogData.map((data)=>(
                <div className="blog-content">
                    <div className="img-box">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="blog-title">
                        <h5>{data.title}</h5>
                    </div>
                    <div className="blog-desc">
                        <p>{data.desc}</p><br/>
                        <b style={{color: "#15399a"}}>Read more <i className="fa fa-angle-double-right" /></b>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentBlog