
import './App.css';
function Appcolor(props){
    function greetuser(e){
        document.body.style.background=e.target.value;
        alert("welecome mr"+document.getElementById(props.color).value )
    }
    return(
        <body style={{backgroundColor: 'powderblue',color:'black'}}>
            <div className='app'>
                <h1>{props.heading}</h1>
                <p style ={{ color:'blue' , font : '30px Arial' }}> how to create </p>
                <label class="label" id = "lbl"> { props.lbl}</label>
                <input id={props.color} type="text"/>
                <input id={props.color} type="text"/>
                <button value={props.color} onclick={greetuser}> col our me { props.color}</button>
            </div>
        </body>
    );
}
export default Appcolor