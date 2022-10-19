import {expect, test} from '@oclif/test'

describe('TestWrite', () => {
  test
  .stdout()
  .command(['TestWrite'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['TestWrite', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
