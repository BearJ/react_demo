var React = require("react");
var SearchBar = require("./SearchBar");
var ProductTable = require("./ProductTable");

var FilterableProductTable = React.createClass({
    getInitialState: function(){
        return {
            inStockOnly: false
        }
    },
    handleUserCheck: function(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        });
    },
    render: function(){
        return (
            <div>
                <h1>搜索列表</h1>
                <SearchBar
                    inStockOnly={this.state.inStockOnly}
                    onUserCheck={this.handleUserCheck}
                />
                <ProductTable
                    products={this.props.products}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
});

module.exports = FilterableProductTable;