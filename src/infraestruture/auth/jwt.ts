import jwt from 'jsonwebtoken';

export class JWT{
    private static secret =  process.env.JWT_SECRET || 'your_secret_key';

    static generateToken(payload: object): string {
        return jwt.sign(payload, this.secret, { expiresIn: '1h' });
    }
    static verifyToken(token: string): object | string {
        try {
            return jwt.verify(token, this.secret);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
    
}