var should = require("should");
var User = require("../models/user");

describe("User", function () {
    describe("defaults", function () {
        var user = {};
        before(function () {
            user = new User({email: "user@example.com"});
        });

        it('has an email user@example.com', function () {
            user.email.should.equal("user@example.com");
        });
        it('has an auth token', function () {
            user.authenticationToken.should.be.defined;
        });
        it('has a pending status', function () {
            user.status.should.equal("pending");
        });
        it('has a created date', function () {
            user.createdAt.should.be.defined;
        });
        it('has a signInCount eq 0', function () {
            user.signInCount.should.equal(0);
        });
        it('has a lastLogin', function () {
            user.lastLogin.should.be.defined;
        });
        it('has a currentLogin', function () {
            user.currentLoginAt.should.be.defined;
        });
    });
});