import './App.css';

function Message() {
  const name = 'Esther';
  const age = 25;

  return (
    <div>
      <h1>Hello, {name}</h1>
      <h1>You are {age} years old</h1>
      <p>you are welcome to the world of React! This is a react component.</p>
    </div>
  );
}

export default Message;
