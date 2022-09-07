import {Command, CliUx} from '@oclif/core'
const execa = require('execa');
const Listr = require('listr');

export default class Ready extends Command {
  static description = 'Checks if your system is ready for use'

  public async run(): Promise<void> {
    this.log(`Is Traktor ready for use?`);
 
    tasks.run().catch((err: any) => {
        console.error(err);
    });    
  }
}

const tasks = new Listr([
  {
    title: 'Homebrew',
    task: () => {
        return new Listr([
            {
                title: 'Checking for Homebrew',
                task: () => {

                  return new Listr([
                    {
                      title: 'Checking if Homebrew is installed',
                      task: (ctx: any, task: any) => execa('brew', ['help']).catch(() => {
                        ctx.homebrew = false;
                      })
                    },
                    {
                      title: 'Installing Homebrew',
                      enabled: (ctx: any) => ctx.homebrew === false,
                      task: () => {
                        execa('/bin/bash', ['-c', '"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"']).then().catch(() => { throw new Error('Error installing homebrew, visit `https://brew.sh` to install manually')})
                      }
                    }
                  ])
                }
            },
        ]);
    }
  },
  {
      title: 'Chrome-cli',
      task: () => {
          return new Listr([
              {
                  title: 'Checking for Chrome-cli',
                  task: (ctx: any, task: any) => execa.stdout('chrome-cli', ['-h']).then((result: any) => {
                      if (!result.includes('Usage:')) {
                          throw new Error('Chrome-Cli does not seem to be installed or is not on PATH');
                      }
                  }).catch(() => {
                    ctx.chromecli = false;
                  })
              },
              {
                title: 'Installing Chrome-cli',
                enabled: (ctx: any) => ctx.chromecli === false,
                task: () => execa('brew', ['install', 'chrome-cli']).catch(() => {
                  throw new Error('Could not install Chrome CLI, make sure Homebrew is installed, or try `brew install chrome-cli` manually')
                })
            },
          ]);
      }
  },
]);