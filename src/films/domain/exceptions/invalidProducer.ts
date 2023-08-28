import Exception from '~/common/domain/exception'

type InvalidProducer = Readonly<Exception & { name: 'InvalidProducer' }>

const causeIsBlank = (): InvalidProducer => ({
  message: 'Film producer can not be blank',
  name: 'InvalidProducer',
})

const InvalidProducer = { causeIsBlank } as const

export default InvalidProducer
