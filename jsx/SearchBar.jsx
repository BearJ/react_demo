var React = require("react");
var GlobalEvent = require("./GlobalEvent");

var SearchBar = React.createClass({
    handleCheckChange: function(){
        this.props.onUserCheck(this.refs.inStockOnlyInput.checked);
    },
    handleInputChange: function(){
        GlobalEvent.emit("SearchBarInputChange", this.refs.filterTextInput.value);
    },
    render: function(){
        return (
            <form className="search-bar">
                <div>
                    <input
                        type="text"
                        placeholder="商品名称"
                        ref="filterTextInput"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <input
                        id="inStockOnlyInput"
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleCheckChange}
                    />
                    <label htmlFor="inStockOnlyInput">只显示有货的商品</label>
                </div>
            </form>
        );
    }
});

module.exports = SearchBar;