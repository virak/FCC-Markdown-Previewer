class App extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div class="container">
                <h1>Markdown Previewer</h1>
            </div>
        )
    }
}



// ============================================================
ReactDOM.render(<App />, document.getElementById('app'));