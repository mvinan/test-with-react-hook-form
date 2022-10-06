import { useRecoilValue } from 'recoil'
import { activeStep } from '~/stateManagment/state'
import { Form1Container } from '../containers/promotionsUpdate/form1Container/Form1Container'
import { Form2Container } from '../containers/promotionsUpdate/form2Container/Form2Container'

export const useActiveForm = () => {
  const step = useRecoilValue(activeStep)
  const forms = {
    1: {
      component: Form1Container,
      handler: (data) => {
        console.log('Form1', data)
      },
    },
    2: {
      component: Form2Container,
      handler: (data) => {
        console.log('Form2', data)
      },
    },
  }

  return forms[step]
}
