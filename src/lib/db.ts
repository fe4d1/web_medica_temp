
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const DOCTORS_FILE = path.join(DATA_DIR, 'doctors.json');
const NEWS_FILE = path.join(DATA_DIR, 'news.json');

export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    image: string;
    bio: string;
}

export interface NewsItem {
    id: string;
    title: string;
    content: string;
    date: string;
}

export async function getDoctors(): Promise<Doctor[]> {
    try {
        const data = await fs.readFile(DOCTORS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading doctors:', error);
        return [];
    }
}

export async function getNews(): Promise<NewsItem[]> {
    try {
        const data = await fs.readFile(NEWS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist or error, return empty
        return [];
    }
}

export async function saveNews(news: Omit<NewsItem, 'id' | 'date'>): Promise<NewsItem> {
    const allNews = await getNews();
    const newEntry: NewsItem = {
        id: Date.now().toString(),
        ...news,
        date: new Date().toISOString(),
    };

    allNews.unshift(newEntry); // Add to beginning

    await fs.writeFile(NEWS_FILE, JSON.stringify(allNews, null, 2));
    return newEntry;
}
