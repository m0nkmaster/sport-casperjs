casper.test.begin('Desktop Homepage Checks', function suite(test) {

    casper.options.viewportSize = {width: 800, height: 600};

    casper.start('http://www.bbc.co.uk/sport/0/', function() {
        test.assertTitle('BBC Sport - Sport');

        test.assertElementCount('nav.primary-nav', 1);

        test.assertExists('#top-story');

        // section digests
        test.assertElementCount('div.section-digest', 2);
        test.assertSelectorHasText('div.section-digest h2:first-of-type', 'More Sports');
        test.assertSelectorHasText('div.section-digest h2:last-of-type', 'Around the UK');

    });

    casper.run(function() {
        test.done();
    });
});
