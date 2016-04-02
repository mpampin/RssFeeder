'use strict';

const request = require('request')
  , PassThrough = require('stream').PassThrough
  , FeedParser = require('feedparser')
  , MongoWritable = require('../Stream/MongoWritable')
  , StreamChain = require('../StreamChain');

var RssUrlFeedFactory = function() {

	var feedUrl;
	var mongoStream;

	this.setFeedUrl = function(url) {
		feedUrl = url;
	};

	this.build = function() {
		
		var req = request(feedUrl);
		var pass = new PassThrough();
		req.pipe(pass);
		
		var rssFeed = new StreamChain();
		var dbWritable = new MongoWritable({
			db: 'mongodb://localhost:27017/NewsFeed',
			collection: 'lanacion_feed'
		});

		return rssFeed
				.shiftLink(pass)
			    .pushLink(new FeedParser())
			    .pushLink(dbWritable);
	};

};

module.exports = RssUrlFeedFactory;