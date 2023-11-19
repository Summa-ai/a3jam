import { registerAs } from '@nestjs/config';

export default registerAs('siwar', () => ({
  api_key: process.env.SIWAR_API_KEY,
}));
