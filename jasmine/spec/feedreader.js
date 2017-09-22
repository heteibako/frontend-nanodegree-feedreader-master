/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed*/
         it('URL is defined and not empty', function() {
             allFeeds.forEach(function(feed) {
             feedLink = feed.url;
             expect(feedLink).toBeDefined();
             expect(feedLink.length).not.toBe(0);
             });
         });


        /* Loops through each feed and makes shure that each feed has a name and the name value is not empty.
         */
        it('name and not empty', function() {
            allFeeds.forEach(function(feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

          // This test ensures the menu element is hidden by default.

        describe('menu', function() {
          it('is hidden by default', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
            });

            /* Check if the menu changes
             * visibility when the menu icon is clicked.
             * 1. Does the menu display when clicked
             * 2. does it hide when clicked again
             */
            it('menu visible on click', function () {
                $('a.menu-icon-link').trigger('click');
                expect($('.menu-hidden').is(':visible')).toBe(false);
            });

            it('hidden by clicking again ', function () {
                $('a.menu-icon-link').trigger('click');
                expect($('.menu-hidden').is(':visible')).toBe(true);
            });
        });

    // Initial entries test suite.
          describe('Initial Entries', function() {
                // run before test
                beforeEach(function(done) {
                    loadFeed(0, done);
                });

                it('initial element is there', function(){
                    expect($('.feed .entry').length).toBeGreaterThan(0);
                });
            });

    //Checking when a new feed is loaded by the loadFeed function that the content changes.

        describe('New Feed Selection', function(){
            var testfeed;

            // when a new feed is loaded by the loadFeed function that the content actually changes

            beforeEach(function(done) {
                loadFeed(0, function() {
                    testfeed = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            // Check the newsfeed  html to be not same as previous.
            it('has been loaded', function(){
                expect($('.feed').html()).not.toEqual(testfeed);
            });
        });
}());
