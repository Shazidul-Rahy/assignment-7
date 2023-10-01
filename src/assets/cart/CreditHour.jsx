import PropTypes from 'prop-types';

const CreditHour = ({totalHour}) => {
    const {credit_hour} = totalHour

  

    

    return (
        <div>
            <span>{}</span>
        </div>
    );
};

CreditHour.propTypes = {
    totalHour: PropTypes.object.isRequired

}


export default CreditHour;