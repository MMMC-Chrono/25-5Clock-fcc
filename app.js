class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            break: 5,
            session: 25,
            count: false,
            reset: false
        };
        this.breakDecrement = this.breakDecrement.bind(this)
        this.breakIncrement = this.breakIncrement.bind(this)
        this.sessionDecrement = this.sessionDecrement.bind(this)
        this.sessionIncrement = this.sessionIncrement.bind(this)
        this.reset = this.reset.bind(this)
        this.startStop = this.startStop.bind(this)
        
    }
    breakIncrement() {
        if (this.state.break < 60) {
            this.setState({
                break: this.state.break + 1
            })
        }
    }
    breakDecrement() {
        if (this.state.break > 0) {
            this.setState({
                break: this.state.break - 1
            })
        }
    }

    sessionIncrement() {
        if (this.state.session < 60) {
            this.setState({
                session: this.state.session + 1
            })
        }       
    }
    sessionDecrement() {
        if (this.state.session > 0) {
            this.setState({
                session: this.state.session - 1
            })
        }
    }

    reset() {
        this.setState({
            break: 5,
            session: 25,
            count: false,
            reset: true
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
    }
    render() {
        let timeLeft = document.getElementById("time-left");
        let minuteToSecond = this.state.session * 60000;
        let countDownDate = new Date().getTime()+minuteToSecond;
        if (this.state.count === true) {
            var x = setInterval(function() {
                let now = new Date().getTime();    
                let distance = countDownDate - now;    
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                timeLeft.innerHTML = minutes + ":" + seconds;
            }, 1000);
        }
        /*if (this.state.reset === true) {
            timeLeft.innerHTML = this.state.session + ":" + "00"
        }*/
        return (
            <div>
                <div id="break-label">Break Length</div>
                <button id="break-decrement" onClick={this.breakDecrement} >
                    <i className="fa-solid fa-minus"></i>
                </button>
                <button id="break-increment" onClick={this.breakIncrement} >
                    <i className="fa-solid fa-plus"></i>
                </button>
                <div id="session-label">Session Length</div>
                <button id="session-decrement" onClick={this.sessionDecrement} >
                    <i className="fa-solid fa-minus"></i>
                </button>
                <button id="session-increment" onClick={this.sessionIncrement} >
                    <i className="fa-solid fa-plus"></i>
                </button>
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