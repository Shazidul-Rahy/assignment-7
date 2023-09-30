import PropTypes from 'prop-types';

const Credit = ({hours}) => {

    const [credit_hour] = hours;
    return (
        <div className="border-b-2">
            
            <p>Total Credit Hour : {}</p> 
            <hr />
        </div>
    );
};

Credit.propTypes = {
    hours: PropTypes.object.isRequired

}

export default Credit;