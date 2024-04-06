const blog = artifacts.require("./SimpleBlog.sol");

module.exports = function (deployer){
    deployer.deploy(blog);
}