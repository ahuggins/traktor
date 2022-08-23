const { exec } = require("child_process");
import {Command, Flags} from '@oclif/core'


export default class GetSource extends Command {
  static description = 'Get the Source from a url'

  static flags = {
    url: Flags.string(),
    tab: Flags.string({
      required: true,
    }),
  }

  public async run(): Promise<string | null> {
    const {args, flags} = await this.parse(GetSource)

    this.log(`GettingSource from: ${flags.url}`)
    

    if(flags.url) {

      await openUrl(flags.url, flags.tab);
  
      await new Promise(r => setTimeout(r, 2000));
  
      let source = null;
  
      await getTheSource((idk: any) => {
        source = idk
      });
  
      await new Promise(r => setTimeout(r, 1000));
  
      return source;
    }
    return null;
  }
}

async function getTheSource(callback: Function){ return exec("chrome-cli source", function(error: any, stdout: any, stderr: any) {
  // console.log({ stdout })
   return callback(stdout);
})}


async function openUrl(url: string, tab: string | null) {
  return exec(`chrome-cli open '${url}' ${ tab ? `-t ${tab}` : ''}`)
}

