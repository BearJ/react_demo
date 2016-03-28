var React = require("react");

var ProductCategoryRow = require("./ProductCategoryRow");
var ProductRow = require("./ProductRow");
var GlobalEvent = require("./GlobalEvent");

var ProductTable = React.createClass({
    _onChange: function(data){
        this.setState({
            filterText: data
        });

    },

    componentWillMount: function(){
        GlobalEvent.addListener("SearchBarInputChange", this._onChange);
    },
    componentWillUnmount: function(){
        GlobalEvent.removeListener("SearchBarInputChange", this._onChange);
    },
    getInitialState: function(){
        return {
            filterText: ""
        }
    },
    render: function(){
        var props = this.props;
        var state = this.state;

        var rows = [];
        var lastCategory = null;
        props.products.forEach(function(product){
            if(product.name.indexOf(state.filterText) < 0 || (!product.stocked && props.inStockOnly)) return;
            if(product.category != lastCategory){
                rows.push(<ProductCategoryRow category={product.category}></ProductCategoryRow>);
            }
            lastCategory = product.category;
            rows.push(<ProductRow product={product}></ProductRow>);
        });
        return (
            <table className="product-table">
                <thead>
                <tr>
                    <th>名称</th>
                    <th>价格</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
});

module.exports = ProductTable;