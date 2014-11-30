BBC Sport UI Tests
==================

A lightweight suite of CasperJS UI tests for the BBC Sport website. These tests are designed to be run as part of the CI pipeline and not require mocking of any kind.

Requirments
-----------

* [PhantomJS](http://phantomjs.org) (n.b. phantomjs requires Python 2.6+
* [CasperJS](http://www.casperjs.org)

Installation
------------

There is a package.json file in the root folder which details what you need, so as long as you have NPM installed, you just need to run:

``npm install``

Running the tests
-----------------

``$ casperjs test tests/``

Simple!

Writing tests
-------------

All the tests are in the `/tests` folder. Read the [Casper Tester object documentation](http://docs.casperjs.org/en/latest/testing.html) for details on how to write tests.

You should restrict your test files to one page per file ideally.
