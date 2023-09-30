import PropTypes from 'prop-types';

const CartName = ({hours}) => {
    // const [course_name] = hours
    return (
        <div>
                <div className="-px-2 py-4 border-b-2">
                    <p>Course Name:</p>
                    <ol>
                    {<li>{}</li>}
                        
                    </ol>
                </div>
        </div>
    );
};

CartName.propTypes = {
    hours: PropTypes.object.isRequired

} 

export default CartName;