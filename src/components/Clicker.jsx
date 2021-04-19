import {useState} from "react";

function Clicker() {
    const [state, setState] = useState(0);

    return (
        <div className="container">
        <span className="clicker-display d-flex align-items-center bg-light text-secondary">
          {state}
        </span>
            <button className="btn btn-success" onClick={() => setState(state + 1)}>
                +
            </button>
            <button className="btn btn-warning" onClick={() => setState(0)}>
                Reset
            </button>
            <button className="btn btn-danger" onClick={() => setState(state - 1)}>
                -
            </button>
        </div>
    );
}

export default Clicker;


