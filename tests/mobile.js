casper.test.begin('Mobile Homepage Checks', function suite(test) {

    casper.start('http://m.bbc.co.uk/sport', function() {
        test.assertTitle('Home - BBC Sport');

        test.assertElementCount('nav.primary-nav', 1);

        test.assertExists('.top-lead');

        test.assertElementCount('article.top-lead', 1);

        test.assertTextExists('Fixtures, Scores & Results');

        this.capture('homepage.png');
    });

    casper.thenOpen('http://m.bbc.co.uk/sport/football', function() {
        test.assertTitle('Football - BBC Sport');
        var title = this.fetchText('article.top-lead .title');
        this.echo(title);
        this.capture('football.png');
    });

    casper.thenOpen('http://m.bbc.co.uk/sport/tennis/mens-singles/results', function() {
        test.assertTitle('Results - Men\'s Singles - Tennis - BBC Sport');

        test.assertElementCount('div.share-this', 1);
    });

    casper.run(function() {
        test.done();
    });
});
