require("../less/index.less");

var React = require("react");
var ReactDOM = require("react-dom");
var FilterableProductTable = require("../jsx/FilterableProductTable");


var PRODUCTS = [
  {category: "运动产品", price: "￥49.99", stocked: true, name: "足球"},
  {category: "运动产品", price: "￥9.99", stocked: true, name: "羽毛球"},
  {category: "运动产品", price: "￥29.99", stocked: false, name: "篮球"},
  {category: "电子产品", price: "￥99.99", stocked: true, name: "iPod Touch"},
  {category: "电子产品", price: "￥399.99", stocked: false, name: "iPhone 6"},
  {category: "电子产品", price: "￥199.99", stocked: true, name: "Nexus 7"}
];

var node = document.createElement("div");
document.body.appendChild(node);
ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}></FilterableProductTable>,
    node
);