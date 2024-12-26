import './App.css';
function GreetingElementwithprops(props){
    const greeting='hello lets start learning from begining';
    console.log("prop is",props.msg)
    return(
        <div classname="app">
            <h1>{props.msg}</h1>

        </div>
    );

}
export default GreetingElementwithprops