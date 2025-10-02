
let frutas = ["banana","Fresa"]
function Header(prop) {
  return <h1>Develop. Preview. </h1>;
}
 
function HomePage() {

    const[div1, escribirDiv] = React.useState( 0 )
    function agregarFruta (){
        escribirDiv(div1+1)
    }

    return (
        
        <div>
            <button onClick = {agregarFruta}>Suma</button>
            <h1>{div1}</h1>
            
            <Header/>
        </div>
    )

}
 
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);