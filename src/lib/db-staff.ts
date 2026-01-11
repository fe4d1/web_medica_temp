
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const STAFF_FILE = path.join(DATA_DIR, 'staff.json');

export interface Staff {
    staff_id: string;
    password: string;
    name: string;
    role: string;
    patients: { name: string, time: string, type: string }[];
}

export async function getStaffMember(staff_id: string): Promise<Staff | undefined> {
    try {
        const data = await fs.readFile(STAFF_FILE, 'utf-8');
        const staffList: Staff[] = JSON.parse(data);
        return staffList.find(s => s.staff_id === staff_id);
    } catch (error) {
        return undefined;
    }
}
