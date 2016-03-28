var React = require("react");

var ProductCategoryRow = React.createClass({
    render: function(){
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
        );
    }
});

module.exports = ProductCategoryRow;