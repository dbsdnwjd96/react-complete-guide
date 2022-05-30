import './ExpenseItem.css';

function ExepenseItem() {
    return (
        <div className='expense-item'>
            <div>May 30th 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='exepense-item__price'>$294.67</div>

            </div>
        </div>
    );
}

export default ExepenseItem;