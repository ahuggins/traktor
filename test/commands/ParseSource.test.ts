import {expect, test} from '@oclif/test'

describe('ParseSource', () => {
  test
  .stdout()
  .command(['ParseSource'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['ParseSource', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
