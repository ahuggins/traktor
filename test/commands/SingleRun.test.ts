import {expect, test} from '@oclif/test'

describe('SingleRun', () => {
  test
  .stdout()
  .command(['SingleRun'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['SingleRun', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
