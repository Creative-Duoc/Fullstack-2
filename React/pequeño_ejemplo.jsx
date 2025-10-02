function Header(prop) {
    const name = prop.nombre
    const apellido = prop.apellido
  return <h1>Develop. Preview. {name} {apellido}</h1>;
}
 
function HomePage() {
    const [likes,setlikes] = React.useState(0)
    function handleClick(){
        setlikes(likes+1)
    }
    function restarLike(){
        
        if (likes <= 0){
            likes = 0
        }
        else {
            setlikes(likes-1)
        }
    }


  return (
    <div>
        <button onClick = {handleClick}>Suma</button>
        <button onClick = {restarLike}>Resta </button>
        <p>Tienes {likes} likes</p>
      <Header nombre = "nombre" apellido = "apellido"/>
      <Header nombre/>
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);