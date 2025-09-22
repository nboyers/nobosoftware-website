export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  const sanitizedInput = input.replace(/[^a-zA-Z0-9._%+-@]/g, ''); // Remove any characters that are not allowed in an email
  return sanitizedInput;
};
