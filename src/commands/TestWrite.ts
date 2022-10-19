import {Command, Flags} from '@oclif/core'
import { createWriter } from '../writer';

const fs = require('fs-extra')


export default class TestWrite extends Command {
  static description = 'This writes a file to test writing code'

  public async run(): Promise<void> {

    const filename = 'samplewrite.csv'

    const writer = createWriter(filename)

    try {
      await writer.writeRecords([{
        subcategory: 'testworked', 
        auction_id_maybe: 'testworked',
        title: 'testworked',
        price: 'testworked',
        sold_date: 'testworked',
        specs_array: 'testworked',
        specs: 'testworked',
        hours: 'testworked',
        condition: 'testworked',
        auction_event_details: 'testworked',
        auction_type: 'testworked',
        auction_house_link: 'testworked',
        auction_house_name: 'testworked',
        year: 'testworked',
    }]);
      
    this.log("Test should have worked");

    if(fs.exists(filename)) {
      this.log(`${'samplewrite.csv'} exists, removing now`);
      fs.remove(filename)
    } else {
      this.log(`${'samplewrite.csv'} does not exist`)
    }
    


    } catch (error) {
      throw new Error('There might be a problem')
    }



  }
}
