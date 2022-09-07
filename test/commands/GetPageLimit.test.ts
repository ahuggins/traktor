import {expect, test} from '@oclif/test'

describe('GetPageLimit', () => {
  test
  .stdout()
  .command(['GetPageLimit'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['GetPageLimit', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
