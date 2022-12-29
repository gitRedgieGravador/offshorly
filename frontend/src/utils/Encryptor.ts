import crypto from 'crypto';

// const ALGORITHM = 'aes-256-cbc';
// const ENCODING = 'hex';
// const IV_LENGTH = 16;
// const KEY = 'encryption-needs-thirty-two-char';

const ALGORITHM = "aes-256-ctr";
const SECRET_KEY = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = new Buffer("slab-portal-cryp");

export const encrypt = (data: string) => {
    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);
    const encrypted = Buffer.concat([cipher.update(data,), cipher.final(), iv])
    return {
        // iv: iv.toString('hex'),
        content: encrypted.toString("hex"),
    };
}

export const decrypt = (hash: string) => {
    const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);
    const decrpyted = Buffer.concat([
        decipher.update(Buffer.from(hash, "hex")),
        decipher.final(),
    ]);
    return decrpyted.toString();
}
