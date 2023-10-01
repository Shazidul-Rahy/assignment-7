import PropTypes from 'prop-types';
import CreditHour from './CreditHour';

const Credit = ({hours}) => {
    
    return (
        <div className="border-b-2">
            
            <p className='flex'>Total Credit Hour : {
                hours.map( n=> <CreditHour key={n.id} totalHour={n}></CreditHour>)
                } </p>
            
             
            <hr />
        </div>
    );
};

Credit.propTypes = {
    hours: PropTypes.func

} 


export default Credit;