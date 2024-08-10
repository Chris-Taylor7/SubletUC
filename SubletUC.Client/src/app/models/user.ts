import * as bcrypt from 'bcrypt';
export class User {
    id?: number;
    FirstName?: string;
    LastName?: string;
    Username?: string;
    Email?: string;
    PhoneNumber?: number;
    PasswordHash?: string | undefined;

    // Method to hash the password
    async hashPassword(password: string): Promise<void> {
        const saltRounds = 10; // You can adjust the cost factor
        this.PasswordHash = await bcrypt.hash(password, saltRounds);
    }

    // Method to verify the password
    async verifyPassword(password: string): Promise<boolean> {
        if (!this.PasswordHash) {
            throw new Error('Password hash is not set');
        }
        return await bcrypt.compare(password, this.PasswordHash);
    }
}
