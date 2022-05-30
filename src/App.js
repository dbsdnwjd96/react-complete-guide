import ExepenseItem  from "./components/expenseItem";


function App() {
  /* 명령형 접근방식 */
  /*
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para);
  */
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExepenseItem></ExepenseItem>
    </div>
  );
}

export default App;
