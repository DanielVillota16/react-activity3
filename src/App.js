function App() {
  return (
    <Example nombre="Daniel" apellido="Villota"></Example>
  );
}

function Example(props){
  return <h1>{`Hello ${props.nombre} ${props.apellido}!`}</h1>;
}

export default App;
