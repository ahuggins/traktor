import {Command, Flags} from '@oclif/core'
import { write } from 'fs';
const fs = require('fs-extra');
// var csvWriter = require('csv-write-stream')
// var writer = csvWriter()
const csvWriter = require('csv-writer');
const path = require('path');

const cheerio = require('cheerio');

export default class ParseSource extends Command {
  static description = 'Parse source sent to it'

  static flags = {
    source: Flags.string()
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ParseSource)

    const $ = cheerio.load(flags.source);

    if(!fs.existsSync(path.resolve(__dirname, '..', '..', 'out.csv'))) {
      
      const writer = csvWriter.createObjectCsvWriter({
        path: path.resolve(__dirname, '..', '..', 'out.csv'),
        header: headers,
      });
      
      await writer.writeRecords([])
    }

    const appender = csvWriter.createObjectCsvWriter({
      path: path.resolve(__dirname, '..', '..', 'out.csv'),
      header: headers,
      append: true,
    });

    const data: any = [];

    $('.listing-wrapper').each((index:any, el: any) => {

      const $ = cheerio.load(el);
  
      data.push({ 
        auction_id_maybe: $('.col-xs-6:nth-child(3) .basic-bold a').attr('href').split('/').pop(),
        title: $('h3').text(),
        price: $('.auction-listing-price .listing-price:nth-child(1)').text(),
        sold_date: $('.auction-listing-price .listing-price:nth-child(2) .basic-non-bold').text(),
        specs_array: getFieldLabel('Specs:', $)?.split(', '),
        specs: getFieldLabel('Specs:', $),
        hours: getFieldLabel('Hours:', $),
        condition: getFieldLabel('Condition:', $),
        auction_event_details: $('.auction-event-details .auction-event-details').text()?.replace(' View on Map', ''),
        auction_type: $('.col-xs-6:nth-child(3) .basic-bold .basic-non-bold').text()?.replaceAll('\n', ''),
        auction_house_link: `https://www.machinerypete.com/${$('.auction-event a').attr('href')}`,
        auction_house_name: $('.auction-event a').text(),
        year: parseInt($('h3').text().substring(0,4)) ? $('h3').text().substring(0,4) : 'unknown',
    })  
    })
    await appender.writeRecords(data);
  }
}

function getFieldLabel(keyText: string, $: any) {
  return $('.auction-listing-fields .listing-field-label').filter((_: any, el: any) => {
    return $(el).text().includes(keyText);
  }).map((_:any, el:any) => {
    return $(el).text();
  })[0]?.replaceAll('\n', '')?.replaceAll(keyText, '')
}

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
