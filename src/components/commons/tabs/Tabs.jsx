import React from 'react'
import { useRecoilState } from 'recoil'
import cx from 'classnames'
import { activeStep } from '~/stateManagment/state'

const Tabs = () => {
  const [currentStep, setStep] = useRecoilState(activeStep)

  const handleStep = (step) => {
    if (currentStep === step) return

    setStep(step)
  }

  return (
    <div className="tabs tabs-boxed">
      <button
        onClick={() => handleStep(1)}
        className={cx('tab', { 'tab-active': currentStep === 1 })}
      >
        Form 1
      </button>
      <button
        onClick={() => handleStep(2)}
        className={cx('tab', { 'tab-active': currentStep === 2 })}
      >
        Form 2
      </button>
    </div>
  )
}

export default Tabs
