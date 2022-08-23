const path = require('path');
// const fs = require('fs-extra');
const csvWriter = require('csv-writer');

const csvPath = path.resolve(__dirname, '..', 'out.csv');

const headers = [

    { id: 'auction_id_maybe', title: 'Auction Id Maybe' },
    { id: 'title', title: 'Title'},
    { id: 'price', title: 'Price'},
    { id: 'sold_date', title: 'Sold Date'},
    { id: 'specs_array', title: 'Specs Array'},
    { id: 'specs', title: 'Specs'},
    { id: 'hours', title: 'Hours'},
    { id: 'condition', title: 'Condition'},
    { id: 'auction_event_details', title: 'Auction Event Details'},
    { id: 'auction_type', title: 'Auction Type'},
    { id: 'auction_house_link', title: 'Auction House Link'},
    { id: 'auction_house_name', title: 'Auction House Name'},
    { id: 'year', title: 'Year'},
  ]

const writer = csvWriter.createObjectCsvWriter({
    path: csvPath,
    header: headers,
});

export default writer;