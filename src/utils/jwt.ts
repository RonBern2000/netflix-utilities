import { IUserPayload } from "../interfaces/IUserPayload";
import { TOKENS } from "../tokens";
import jwt from 'jsonwebtoken';


export const verify = (token: string) : IUserPayload | null => {
  if(token.includes(TOKENS.Bearer))
    token = token.substring(TOKENS.Bearer.length + 1);
  try {
    return jwt.verify(token, process.env.JWT_KEY!) as IUserPayload;
  } catch (error) {
    console.error(error);
    return null
  }
}