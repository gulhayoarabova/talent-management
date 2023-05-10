import React from 'react'
import classes from "../styles/Step3.module.scss"
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const Step3 = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

 

 


  return (
    <div className={classes.step3_wrapper}>
      
        <h4>Dear User, your profile has been successfully created!</h4>
        
    </div>
  )
}

export default Step3