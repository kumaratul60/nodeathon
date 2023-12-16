// CustomError.js

const CustomError = ({ error }) => {
    // You can customize the error message and styling here
    return (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>
            An error occurred: {error.message}
        </div>
    );
};

export default CustomError;
