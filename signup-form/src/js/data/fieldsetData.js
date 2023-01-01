const fieldsetData = [
  {
    name: 'first-name',
    label: 'First Name',
    type: 'text'
  },

  {
    name: 'last-name',
    label: 'Last Name',
    type: 'text'
  },

  {
    name: 'email',
    label: 'Email',
    type: 'email'
  },

  {
    name: 'phone-number',
    label: 'Phone Number',
    type: 'tel',
    pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}'
  },

  {
    name: 'password',
    label: 'Password',
    type: 'password'
  },

  {
    name: 'confirm-password',
    label: 'Confirm Password',
    type: 'password'
  }
];

export default fieldsetData;