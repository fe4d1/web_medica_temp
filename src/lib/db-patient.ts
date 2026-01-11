
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const PATIENTS_FILE = path.join(DATA_DIR, 'patients.json');

export interface Patient {
    mr_number: string;
    password: string; // Plaintext for prototype
    name: string;
    dob: string;
    blood_group: string;
    history: { date: string, type: string, doctor: string, notes: string }[];
}


export async function getPatient(mr_number: string): Promise<Patient | undefined> {
    try {
        const data = await fs.readFile(PATIENTS_FILE, 'utf-8');
        const patients: Patient[] = JSON.parse(data);
        return patients.find(p => p.mr_number === mr_number);
    } catch (error) {
        return undefined;
    }
}
