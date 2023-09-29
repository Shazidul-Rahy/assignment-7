import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    
    const {img, course_details, course_name, credit_hour,price} = blog

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-96 h-auto' src={img} alt="" /></figure>
                <div className="card-body">
            <h2 className="card-title">{course_name}</h2>
             <p className='font-normal text-sm'>{course_details}</p>
             <div className='grid grid-flow-col gap-24'>
                <p>$ Price: {price}</p>
                <p>Credit: {credit_hour}</p>
             </div>
            <div className="card-actions justify-center">
            <button className="btn btn-primary w-10/12 h-auto">Select</button>
            </div>
                 </div>
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
} 

export default Blog;