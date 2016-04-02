/*
 * Feeder
 * https://github.com/mpampin/news-feeder
 *
 * Copyright (c) 2016 MPampin
 * Licensed under the MIT license.
 */

'use strict'

var RssUrlFeedFactory = require('./lib/Builder/RssUrlFeedFactory.js');

var rssFeedFactory = new RssUrlFeedFactory();
// TODO: Hacer parametrizables las urls
rssFeedFactory.setFeedUrl('http://contenidos.lanacion.com.ar/herramientas/rss-origen=2');
rssFeedFactory.build();