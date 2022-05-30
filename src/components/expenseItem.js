import './ExpenseItem.css';

function ExepenseItem(props) {
    /* regular Javascript (React와 상관없음) */

    return (
        <div className='expense-item'>
            <div>{props.date.toString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>

            </div>
        </div>
    );
}

export default ExepenseItem;