import React from "react";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showFilters: false};
    }

    toggleDropDown() {
        this.setState({
            showFilters: !this.state.showFilters,
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col d-flex justify-content-end mx-2">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" onClick={() => this.toggleDropDown()} data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-filter-square" style={{fontSize: "2rem", color: "cornflowerblue", cursor: "pointer"}}></i>
                        </button>
                        <ul class="dropdown-menu flex-column" style={ this.state.showFilters? {display: "flex"}: {display: "none"}} aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" onClick={() => this.toggleDropDown()}  href="#">Action</a></li>
                            <li><a class="dropdown-item" onClick={() => this.toggleDropDown()}  href="#">Another action</a></li>
                            <li><a class="dropdown-item" onClick={() => this.toggleDropDown()}  href="#">Something else here</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Filters;
