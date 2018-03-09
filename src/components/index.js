// [...]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flats: []
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/suhv/devday-react-demo/master/resources/flats.json')
            .then(response => response.json())
            , then(data => {
                this.setState({
                    flats: data
                })
            })
    }
}

// [...]
