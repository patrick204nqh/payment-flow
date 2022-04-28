import React from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button
} from '@mui/material';

export default function UserForm({ user }) {
  const handleSubmit = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="input-field-firstname">
            First name
          </InputLabel>
          <OutlinedInput
            id="input-field-firstname"
            type="text"
            value={user?.firstName}
            label="firstname"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="input-field-lastname">
            Last name
          </InputLabel>
          <OutlinedInput
            id="input-field-lastname"
            type="text"
            value={user?.lastName}
            label="lastname"
          />
        </FormControl>
      </FormGroup>

      <FormGroup row sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="input-field-username">
            Username
          </InputLabel>
          <OutlinedInput
            id="input-field-username"
            type="text"
            value={user?.username}
            label="username"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="input-field-email">
            Email
          </InputLabel>
          <OutlinedInput
            id="input-field-email"
            type="email"
            value={user?.email}
            label="email"
          />
        </FormControl>
      </FormGroup>

      <FormGroup row sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="input-field-phone">
            Phone
          </InputLabel>
          <OutlinedInput
            id="input-field-phone"
            type="text"
            value={user?.phone}
            label="phone"
          />
        </FormControl>
      </FormGroup>

      <FormGroup row sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FormControl sx={{ m: 1, width: "10ch" }} variant="outlined">
          <Button variant="contained">Save</Button>
        </FormControl>
      </FormGroup>
    </form>
  );
}
