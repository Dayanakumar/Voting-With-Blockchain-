const election = artifacts.require("Election");
module.exports = function (deployer) {
  deployer.deploy(election);
};
