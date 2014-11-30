BBC Sport UI Tests
==================

A lightweight suite of CasperJS UI tests for the BBC Sport website. These tests are designed to be run as part of the CI pipeline and not require mocking of any kind.

Requirments
-----------

* [PhantomJS](http://phantomjs.org) (n.b. phantomjs requires Python 2.6+
* [CasperJS](http://www.casperjs.org)

Installation
------------

You should only need to install CasperJS, which you can get through NPM.

``npm install casperjs``

Running the tests
-----------------

``$ casperjs test tests/``

Simple!

Writing tests
-------------

All the tests are in the `/tests` folder. Read the [Casper Tester object documentation](http://docs.casperjs.org/en/latest/testing.html) for details on how to write tests.

You should restrict your test files to one file per page ideally.
