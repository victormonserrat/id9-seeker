import Exception from '~/common/domain/exception'

type InvalidDirector = Readonly<Exception & { name: 'InvalidDirector' }>

const causeIsBlank = (): InvalidDirector => ({
  message: 'Film director can not be blank',
  name: 'InvalidDirector',
})

const InvalidDirector = { causeIsBlank } as const

export default InvalidDirector
