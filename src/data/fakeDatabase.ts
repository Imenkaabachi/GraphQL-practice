
import {v4 as uuidv4} from 'uuid';

type Role = 'ADMIN' | 'USER';

export interface SkillInput {
    designation: string;
    id: string;
}

export interface CvInput {
    name: string;
    age: number;
    job: string;
    id: string;
    skills: SkillInput[];
}

export interface Cv extends CvInput {
    id: string;
}

export interface Skill extends SkillInput {
    id: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    cvs: Cv[];
}

const randomDesignations = [
    'Web Developer',
    'Data Analyst',
    'Software Engineer',
    'UI/UX Designer',
    'Product Manager',
    'Marketing Specialist',
    'Business Analyst',
    'Project Manager',
    'QA Engineer',
    'DevOps Engineer',
    'IT Support Specialist',
    'Network Administrator',
    'Database Administrator',
    'Security Analyst'];

const randomJobs = [
    'UI Designer',
    'UX Designer',
    'Product Manager',
    'Project Manager',
    'Marketing Manager',
    'Sales Manager',
    'Account Manager',
    'Customer Success Manager',
    'Content Writer',
    'Social Media Manager',
    'Data Analyst',
    'Business Analyst',
    'Quality Assurance Engineer',
    'DevOps Engineer',
    'Cloud Architect',
    'Network Engineer',
    'Security Engineer',
    'Technical Writer',
    'Systems Administrator'];

const generateRandomSkill = (): Skill => ({
    id: uuidv4(),
    designation: randomDesignations[Math.floor(Math.random() * randomDesignations.length)],
});

const generateRandomCv = (): Cv => ({
    id: uuidv4(),
    name: `imen ${Math.floor(Math.random() * 100)}`,
    age: Math.floor(Math.random() * (65 - 23 + 1)) + 18,
    job: randomJobs[Math.floor(Math.random() * randomJobs.length)],
    skills: Array.from({length: Math.floor(Math.random() * 2) + 1}, generateRandomSkill),
});

const generateRandomUser = (): User => ({
    id: uuidv4(),
    name: `User ${Math.floor(Math.random() * 100)}`,
    email: `user${Math.floor(Math.random() * 100)}@gmail.com`,
    role: Math.random() < 0.5 ? 'ADMIN' : 'USER',
    cvs: Array.from({length: Math.floor(Math.random() * 2) + 1}, generateRandomCv),
});

export const fakeDatabase: User[] = Array.from({length: 3}, generateRandomUser);