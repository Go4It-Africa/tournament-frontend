import Cryptr from 'cryptr';

const secretKey: string | null = process.env.NEXTAUTH_SECRET || null;

export function encrypt(text: string) {
  try {
    if (!secretKey) {
      throw new Error('Secret key not found');
    }
    return new Cryptr(secretKey).encrypt(text);
  } catch (error) {
    console.log(error);
  }
}

export function decrypt(text: string) {
  try {
    if (!secretKey) {
      throw new Error('Secret key not found');
    }
    return new Cryptr(secretKey).decrypt(text);
  } catch (error) {
    console.log(error);
  }
}
