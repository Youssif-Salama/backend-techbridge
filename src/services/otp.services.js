const otpGeneratorService = (digits) => {
  return Math.floor(10 ** (digits - 1) + Math.random() * 9 * 10 ** (digits - 1));
};

export default otpGeneratorService;