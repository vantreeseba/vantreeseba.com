import Airtable from 'airtable';
var base = new Airtable().base('appJOSy2JNnbVJkZM');

export default (req, res) => {
  const media = [];

  var query = {
    maxRecords: 100,
  };
  const { query: { view, table } } = req;

  if(view) {
    query.view = view;
  }

  base(table.split('-').join(' ')).select(query)
    .eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        media.push(record.fields);
      });

      fetchNextPage();
    }, function done(err) {
      if (err) {
        res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')
        res.send(err);
      } else {
        res.send({ data: media });
      }
    });
};
