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
        
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-14 lg:px-0 lg:pl-20">
            {
                blogs.map(n=> <Blog key={blogs.id} blog={n}></Blog>)
            }
            </div>
    
        
    );
};

export default Blogs;