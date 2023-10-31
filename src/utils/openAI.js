import OpenAI from 'openai';
import { APIKEY } from './constants';
const openai = new OpenAI({
  apiKey: APIKEY,
  dangerouslyAllowBrowser: true
});

export default openai;