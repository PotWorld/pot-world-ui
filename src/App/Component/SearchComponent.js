import React from "react";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.searchInput = '';
        this.timerId = null;
    }

    onChange(event) {
        this.searchInput = event.target && event.target.value;
        if(this.searchInput.trim()) {
            this.timerId && clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this.searchInput.trim() &&
                this.props.handleOnchange && 
                this.props.handleOnchange(this.searchInput);
            }, 500);
        }
    }

    render() {
        return (
            <div className="container-fluid g-0">
                <div class="form-outline">
                    <i class="bi bi-search px-2" style={{fontSize: "1.5rem", position:"absolute", color: "cornflowerblue"}}></i>
                    <input type="text" id="typeText" class="form-control" 
                    style={{paddingLeft: "2.5rem", paddingRight: "1.5rem"}}
                    onChange={(e) => this.onChange(e)}
                    placeholder="Enter your search"/>
                </div>
            </div>
        )
    }
}

export default SearchComponent;
