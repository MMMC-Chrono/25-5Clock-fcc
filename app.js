class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            break: 5,
            session: 25,
            count: false
        };
        this.reset = this.reset.bind(this)
        this.startStop = this.startStop.bind(this)
    }
    reset() {
        this.setState({
            break: 5,
            session: 25
        })
    }
    startStop() {
        if ( this.state.count === false) {
            this.setState({
                count: true
            })
        } else {
            this.setState({
                count: false
            })
        }
        console.log("start");
    }
    render() {
        let minuteToSecond = this.state.session * 60000;
        let countDownDate = new Date().getTime()+minuteToSecond;
        if (this.state.count === true) {
            var x = setInterval(function() {
                let now = new Date().getTime();    
                let distance = countDownDate - now;    
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (seconds <= 10) {
                    seconds = "0" + seconds;
                }
                document.getElementById("time-left").innerHTML = minutes + ":" + seconds;
            }, 1000);
        }
        return (
            <div>
                <div id="break-label">Break Length</div>
                <div id="session-label">Session Length</div>
                <button id="break-decrement"></button>
                <button id="break-increment"></button>
                <button id="session-decrement"></button>
                <button id="session-increment"></button>
                <div id="break-length">{this.state.break}</div>
                <div id="session-length">{this.state.session}</div>
                <div id="timer-label">Session</div>
                <div id="time-left">{
                    this.state.session <= "10"? "0" + this.state.session:
                    this.state.session === "0"? "0" + this.state.session: this.state.session
                }:00</div>
                <button id="start_stop" onClick={this.startStop}>start_stop</button>
                <button id="reset" onClick={this.reset}>reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Clock/>, document.getElementById('clock'));