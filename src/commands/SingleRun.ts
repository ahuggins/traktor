import {Command, Flags} from '@oclif/core'
import GetSource from './GetSource'
import ParseSource from './ParseSource'

export default class SingleRun extends Command {
  static description = 'SingleRun of a url'

  // static flags = {
  //   tab: Flags.string({
  //     required: true,
  //   })
  // }
  
  public async run(): Promise<void> {
    const {args, flags} = await this.parse(SingleRun)
    
    
    for (let index = 1; index < 10; index++) {
      
      const url = `https://www.machinerypete.com/auction_results?page=${index}&limit=72`;

      this.log(`URL FROM SINGLE RUN: ${url}`)
      
      const source = await GetSource.run(['--url', url]);
  
      await ParseSource.run(['--source', source]);

      await new Promise(r => setTimeout(r, 5000));
      
    }

  }
}
