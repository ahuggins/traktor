import {Command, Flags} from '@oclif/core'
import GetSource from './GetSource'
import ParseSource from './ParseSource'
const { exec } = require("child_process");

export default class SingleRun extends Command {
  static description = 'SingleRun of a url'

  static flags = {
    tab: Flags.string()
  }
  
  public async run(): Promise<void> {
    const {args, flags} = await this.parse(SingleRun)
    let tab = ''
    if(!flags.tab) {
      
      await determineTab((idk: any) => {
        tab = idk
      });
      
      await new Promise(r => setTimeout(r, 2000));

    } else {
      tab = flags.tab
    }
    
    let params: any = null;
    await getTheUrl((idk: any) => {
      params = new URLSearchParams(idk);
    }, tab);

    await new Promise(r => setTimeout(r, 2000));

    params.set('limit', 72)

    
    for (let index = 1; index < 10; index++) {
      
      params.set('page', index)
      
      const url = `https://www.machinerypete.com/auction_results?${params.toString()}`
    
      
      let commandParams = [
        '--url',
        url
      ]
      
      commandParams.push('--tab')
      commandParams.push(flags.tab ? flags.tab : tab ? tab : '')
      const source = await GetSource.run(commandParams);
  
      await ParseSource.run(['--source', source]);

      await new Promise(r => setTimeout(r, 6000));
      
    }

  }
}

async function getTheUrl(callback: Function, tab: string) {
  return exec(`chrome-cli info -t ${tab}`, (error: any, stdout: any, stderr: any) => {
     return callback(stdout.split('\n').find((s:string) => s.includes('Url: ')).replace('Url: ', '').split('?')[1])
  });
}

async function determineTab(callback: Function) {
  return exec(`chrome-cli list tabs`, async function(error: any, stdout: any, stderr: any) {
    const tab = stdout.split('\n').find((s: string) => s.includes('Machinery Pete')).match(`([0-9]+)`)[0];

    return callback(tab);
  })
}