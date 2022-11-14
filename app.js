let counting;
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            break: 5,
            session: 25,
            minute: 25,
            second: 0,
            playing: "Session",
            count: false
        };
        this.breakDecrement = this.breakDecrement.bind(this)
        this.breakIncrement = this.breakIncrement.bind(this)
        this.sessionDecrement = this.sessionDecrement.bind(this)
        this.sessionIncrement = this.sessionIncrement.bind(this)
        this.reset = this.reset.bind(this)     
        this.start = this.start.bind(this)   
        this.stop = this.stop.bind(this)
    }
    
    breakIncrement() {
        if (this.state.break < 60) {
            this.setState({
                break: this.state.break + 1,
                minute: this.state.minute + 1
            })
        }
    }
    breakDecrement() {
        if (this.state.break > 1) {
            this.setState({
                break: this.state.break - 1,
                minute: this.state.minute - 1
            })
        }
    }

    sessionIncrement() {
        if (this.state.session < 60) {
            this.setState({
                session: this.state.session + 1,
                minute: this.state.minute + 1
            })
        }       
    }
    sessionDecrement() {
        if (this.state.session > 1) {
            this.setState({
                session: this.state.session - 1,
                minute: this.state.minute - 1
            })
        }
    }

    reset() {
        clearInterval(counting);
        this.setState({
            break: 5,
            session: 25,
            minute: 25,
            second: 0,
            playing: "Session",
            count: false
        })
    }
    
    start() {
        if(!this.state.count) {
            this.setState({
                count: true
            });            
            counting = setInterval(() => {
                this.setState({
                    second : this.state.second - 1
                });      
            },1000);     
        } else {
            this.stop();
        }     
    }
    stop() {
        this.setState({
            count: false
        });
        clearInterval(counting);
    }

    render() {
        if (this.state.second < 0 && this.state.minute > 0) {
            this.setState({
                second: 59,
                minute: this.state.minute - 1
            });
        }        
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
                <div id="timer-label">{this.state.playing}</div>
                <div id="time-left">{
                    this.state.minute < "10"? "0" + this.state.minute:
                    this.state.minute <= "0"? "00": this.state.minute
                }:{
                    this.state.second < "10"? "0" + this.state.second:
                    this.state.second <= "0"? "00": this.state.second
                }</div>
                <button id="start_stop" onClick={this.start}>start_stop</button>
                <button id="reset" onClick={this.reset}>reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Clock/>, document.getElementById('clock'));