class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            break: 5,
            section: 25
        };
        this.reset = this.reset.bind(this)
    }
    reset() {
        this.setState({
            break: 5,
            section: 25
        })
    }
    render() {
        return (
            <div>
                <div id="break-label">Break Length</div>
                <div id="session-label">Session Length</div>
                <button id="break-decrement"></button>
                <button id="break-increment"></button>
                <button id="session-decrement"></button>
                <button id="session-increment"></button>
                <div id="break-length">{this.state.break}</div>
                <div id="session-length">{this.state.section}</div>
                <div id="timer-label">Session</div>
                <div id="time-left"></div>
                <button id="start_stop"></button>
                <button id="reset" onClick={this.reset}></button>
            </div>
        )
    }
}
ReactDOM.render(<Clock/>, document.getElementById('clock'));