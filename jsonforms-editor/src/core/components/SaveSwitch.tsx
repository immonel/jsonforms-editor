/**
 * ---------------------------------------------------------------------
 * Copyright (c) 2021 Leo Immonen
 * Licensed under MIT
 * ---------------------------------------------------------------------
 */

import { 
  FormControlLabel,
  makeStyles,
  Switch
} from "@material-ui/core"
import React from 'react'

interface SaveSwitchProps {
  checked: boolean,
  onChange: () => void
}


const SaveSwitch: React.FC<SaveSwitchProps> = props => {
  const classes = useStyles()
  return (
    <FormControlLabel
      className={classes.root}
      control={
        <Switch color="default" {...props} />
      }
      label="Save automatically"
      labelPlacement="start"
    />
  )
}

const useStyles = makeStyles({
  root: {
    paddingRight: '50px'
  }
})

export default SaveSwitch