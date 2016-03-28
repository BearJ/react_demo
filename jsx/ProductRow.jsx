var React = require("react");

var ProductRow = React.createClass({
    render: function(){
        var product = this.props.product;
        return (
            <tr>
                <td>{product.stocked ? product.name : <em>{product.name}</em>}</td>
                <td>{product.stocked ? product.price : <em>{product.price}</em>}</td>
            </tr>
        );
    }
});

module.exports = ProductRow;