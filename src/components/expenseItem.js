import './ExpenseItem.css';

function ExepenseItem() {
    /* regular Javascript (React와 상관없음) */
    const expenseDate = new Date(2022, 4, 30);
    const expenseTitle = 'Car Insurance';
    const exepenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${exepenseAmount}</div>

            </div>
        </div>
    );
}

export default ExepenseItem;