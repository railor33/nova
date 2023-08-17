import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(
    AppContext
  );
  const { firstName, lastName, email, gender } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, gender }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, firstName, lastName, email, gender]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Product"
            name="firstName"
            placeholder="Your first name"
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Team"
            name="lastName"
            placeholder="Your last name"
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label="Reason"
            name="gender"
            value={gender.value}
            onChange={handleChange}
            error={!!gender.error}
            helperText={gender.error}
            required={gender.required}
          >
            <option value=""> </option>
            <option value="Male">New Product</option>
            <option value="Female">Major Release</option>
            <option value="Female">Data Change</option>
          </TextField>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
