import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import classes from "../styles/Step1.module.scss"

const Step2 = () => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
      } else if (value === 'worst') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else {
        setHelperText('Please select an option.');
        setError(true);
      }
    };

  return (
    <div>
        <div className={classes.test_item}>
        <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
      <FormLabel id="demo-error-radios">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem..</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="one" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />

          <FormControlLabel value="two" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />

          <FormControlLabel value="three" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />

          <FormControlLabel value="four" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
        </div>
        <div className={classes.test_item}>
        <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
      <FormLabel id="demo-error-radios">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem..</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="eight" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />

          <FormControlLabel value="five" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />

          <FormControlLabel value="six" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />

          <FormControlLabel value="seven" control={<Radio />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.." />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
        </div>
    </div>
  )
}

export default Step2    