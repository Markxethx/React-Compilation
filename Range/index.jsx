class Price extends React.Component {
constructor(props){
    super(props);

    this.state = {
        minValue: 0,
        maxValue: 20000,
        step: 1000,
        firstValue: null,
        secondValue: null
    };

    this.handleChange = this.handleChange.bind(this);
}

componentWillMount(){
    this.setState({firstValue: this.state.minValue, secondValue: this.state.maxValue});
}

handleChange(name, event){
    let value = event.target.value;
    if(name === "second"){
    		if(parseInt(this.state.firstValue) < parseInt(value)){
            this.setState({secondValue:value});
        }
    }
    else{
    		if(parseInt(value) < parseInt(this.state.secondValue)){
            this.setState({firstValue: value});
        }
    }
}
