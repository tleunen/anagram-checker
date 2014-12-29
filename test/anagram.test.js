var AnagramChecker = require('../');
var assert = require('assert');

describe('anagram-checker', function () {

    describe('true anagrams', function() {

        it('simple word', function() {
            assert( AnagramChecker('was', 'saw') );
        });

        it('with capital letters', function() {
            assert( AnagramChecker('Who', 'How') );
        });

        it('with capital letters 2', function() {
            assert( AnagramChecker('beSt', 'Bets') );
        });

        it('if a word has a space', function() {
            assert( AnagramChecker('Torchwood', 'Doctor Who') );
        });

        it('with more than 2 words', function() {
            assert( AnagramChecker('melon', 'lemon', 'menlo') );
        });

        it('example test', function() {
            assert( AnagramChecker('silenced', 'licensed', 'Declines') );
        })
    });

    describe('false anagrams', function() {

        it('simple word', function() {
            assert( AnagramChecker('sew', 'saw') === false );
        });

        it('multiple words', function() {
            assert( AnagramChecker('section', 'notices', 'whatever') === false );
        });
    });

});