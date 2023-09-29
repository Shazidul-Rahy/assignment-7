import { useEffect, useState } from "react";
import Blog from "../../body/blog";


const Blogs = () => {
    const [blogs, setBlog]= useState([]);

    useEffect( ()=> {
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    },[])


    return (
        <div className='grid grid-cols-4 gap-4'>
            <div>
            {
                blogs.map(n=> <Blog key={blogs.id} blog={n}></Blog>)
            }
            </div>
        </div>
        
    );
};

export default Blogs;