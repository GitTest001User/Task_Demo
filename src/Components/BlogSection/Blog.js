import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from './Service/Data';

const BlogSection = () => {
const [Data,setData]=useState([])
 useEffect(() => {
    fetch('https://mxpertztestapi.onrender.com/api/sciencefiction') // Sample API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        console.log('Data',Data.Storyadvenure)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

    const blogsPerPage = 6; 
    const [currentPage, setCurrentPage] = useState(1);

 
    const totalPages = Math.ceil(blogData.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <section className="bg-light-gray padding-nine-lr pt-0 pb-5 xl-no-padding-lr">
                <div className="container">
                    <div className="row">
                    <div className="rs-slider style1">
                                    <div
                                        className="  slide1 slider-content"
                                        style={{
                                            background: `linear-gradient(220deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0) 79%)`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                    

                                </div>
                    

                        <div className="col-12 blog-content ">
                            <div className="row  blog-wrapper">
                                {currentBlogs.map((post, index) => (
                                    <div
                                        className="col-lg-4  wow animate__fadeIn mb-3 mt-3"
                                        key={index}
                                    >
                                        <div className="blog-post common-shadow blog-post border-radius-20px " style={{backgroundImage:'url(/assets/image/bg-img-1.png)',backgroundSize:'cover'}}>
                                            <div className="p-3">
                                                <Link to={`/blog/${post.postUrl}`}>
                                                    <img src={`/assets/image/${post.image}`} alt="" />
                                                </Link>
                                            </div>
                                            <div className="bg-white p-3 post-details text-left">
                                             

                                                <h3 style={{
                                                    fontSize: "18px",
                                                    fontWeight: "600",
                                                    color: 'black',
                                                marginBottom:'0px',
                                                    lineHeight: 'revert',
                                                 
                                                }}> <Link to={`/blog/${post.postUrl}`}>
                                                        {post.title}
                                                    </Link></h3>
                                                    
                                           


                                                    <h3 className='App learn-more learn-more1 lets-talk readon w-100' style={{
                                                    fontSize: "18px",
                                                    fontWeight: "600",
                                                    color: 'white',
                                                marginBottom:'10px',
                                                marginTop:'10px',
                                                    lineHeight: 'revert',
                                                 
                                                }}> <Link style={{color:'white'}} to={`/blog/${post.postUrl}`}>
                                                     Read More
                                                    </Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-12 d-flex justify-content-center margin-1-half-rem-top">
                                <ul className="pagination pagination-style-01 font-weight-500 align-items-center">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link text-small" onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
                                            <i className="feather icon-feather-arrow-left icon-extra-small d-xs-none"></i>
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                                            <button className="page-link text-small" onClick={() => handleClick(i + 1)}>
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link text-small" onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
                                            <i className="feather icon-feather-arrow-right icon-extra-small d-xs-none"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSection;
