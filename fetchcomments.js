// ID of the Google Spreadsheet
var spreadsheetID = '1Mk1ohm1NsoFB6fgAJDh93PaTy_Uiu3sIHRe73u7MhbE';

// Make sure it is public or set to Anyone with link can view
var url =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/od6/public/values?alt=json';

$.getJSON(url, function (data) {
  var entry = data.feed.entry;

  $(entry).each(function () {
    // Column names are name, age, etc.
    $('.results').prepend(
      '<p>' + this.gsx$comments.$t + '</p><p>' + this.gsx$name.$t + '</p>'
    );
  });
});
