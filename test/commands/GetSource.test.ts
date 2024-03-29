import {expect, test} from '@oclif/test'

describe('GetSource', () => {
  test
  .stdout()
  .command(['GetSource'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['GetSource', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
