/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    projects: Project;
    cto: Cto;
    media: Media;
    blogs: Blog;
    waitlists: Waitlist;
    documents: Document;
    stacks: Stack;
    issues: Issue;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  tasks?:
    | {
        task?: string | null;
        status?: ('not-started' | 'in-progress' | 'completed') | null;
        dueDate?: string | null;
        assignee?: (number | null) | User;
        priority?: ('low' | 'medium' | 'high') | null;
        notes?: string | null;
        attachments?: (number | null) | Document;
        id?: string | null;
      }[]
    | null;
  startDate: string;
  endDate?: string | null;
  status: 'planned' | 'in-progress' | 'completed' | 'on-hold';
  budget?: number | null;
  tags?:
    | {
        tag?: string | null;
        id?: string | null;
      }[]
    | null;
  issues?: (number | Issue)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name: string;
  type: 'developer' | 'startup';
  phoneNumber?: string | null;
  role?: ('admin' | 'user') | null;
  githubId?: string | null;
  wallet?: number | null;
  developerFields?: {
    bio?: string | null;
    issues?: (number | Issue)[] | null;
    totalPayment?: number | null;
    payments?:
      | {
          paymentDate?: string | null;
          paymentAmount?: number | null;
          paymentType?: ('income' | 'withdrawal' | 'tip') | null;
          paymentMethod?: string | null;
          paymentStatus?: ('pending' | 'completed' | 'failed') | null;
          paymentReference?: string | null;
          paymentDescription?: string | null;
          id?: string | null;
        }[]
      | null;
    dateJoined?: string | null;
    profilePicture?: (number | null) | Media;
    skills?:
      | {
          skill?: string | null;
          id?: string | null;
        }[]
      | null;
    experienceLevel?: ('junior' | 'mid_level' | 'senior' | 'lead' | 'architect') | null;
    githubProfile?: string | null;
    linkedinProfile?: string | null;
    personalWebsite?: string | null;
    primaryRole?:
      | (
          | 'Frontend Developer'
          | 'Backend Developer'
          | 'Full Stack Developer'
          | 'Mobile Developer'
          | 'DevOps Engineer'
          | 'Data Scientist'
          | 'UI/UX Designer'
          | 'QA Engineer'
          | 'Other'
        )
      | null;
    availability?: ('full_time' | 'part_time' | 'contract' | 'freelance' | 'not_available') | null;
    preferredWorkType?: ('remote' | 'on_site' | 'hybrid') | null;
    education?:
      | {
          degree?: string | null;
          institution?: string | null;
          graduationYear?: number | null;
          id?: string | null;
        }[]
      | null;
    languages?:
      | {
          language?: string | null;
          proficiency?: ('Beginner' | 'Intermediate' | 'Advanced' | 'Native') | null;
          id?: string | null;
        }[]
      | null;
    hourlyRate?: number | null;
    preferredProjectDuration?:
      | ('Less than 1 month' | '1-3 months' | '3-6 months' | '6-12 months' | 'More than 12 months')
      | null;
  };
  startupFields?: {
    companyName?: string | null;
    description?: string | null;
    foundingDate?: string | null;
    cto?: (number | null) | User;
    fundingInformation?: {
      fundingStage?: ('Pre-seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C+') | null;
      totalFundingRaised?: number | null;
      lastFundingDate?: string | null;
    };
    teamSize?: ('1-10' | '10-50' | '50-100' | '+100') | null;
    productStage?: ('Idea' | 'Prototype' | 'MVP' | 'Beta' | 'Launched' | 'Growth') | null;
  };
  website?: string | null;
  contactInformation?: {
    email?: string | null;
    phone?: string | null;
    address?: string | null;
  };
  projects?: (number | Project)[] | null;
  sub?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "issues".
 */
export interface Issue {
  id: number;
  title: string;
  description?: string | null;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  budget?: number | null;
  assignee?: (number | null) | User;
  reporter: number | User;
  createdAt: string;
  updatedAt: string;
  project: number | Project;
  labels?:
    | {
        label?: string | null;
        id?: string | null;
      }[]
    | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "documents".
 */
export interface Document {
  id: number;
  title: string;
  description?: string | null;
  tags?:
    | {
        tag?: string | null;
        id?: string | null;
      }[]
    | null;
  stacks?: (number | null) | Stack;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "stacks".
 */
export interface Stack {
  id: number;
  name: string;
  description?: string | null;
  technologies?:
    | {
        technology: string;
        id?: string | null;
      }[]
    | null;
  popularity: number;
  use_cases?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cto".
 */
export interface Cto {
  id: number;
  name: string;
  experience: number;
  specialization: string;
  projects?: (number | Project)[] | null;
  availability?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: number;
  slug?: string | null;
  title: string;
  image: number | Media;
  description: string;
  richtext?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  faq?:
    | {
        question?: string | null;
        answer?: string | null;
        id?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "waitlists".
 */
export interface Waitlist {
  id: number;
  fullName: string;
  email: string;
  userType: 'developer' | 'startup' | 'other';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'projects';
        value: number | Project;
      } | null)
    | ({
        relationTo: 'cto';
        value: number | Cto;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'blogs';
        value: number | Blog;
      } | null)
    | ({
        relationTo: 'waitlists';
        value: number | Waitlist;
      } | null)
    | ({
        relationTo: 'documents';
        value: number | Document;
      } | null)
    | ({
        relationTo: 'stacks';
        value: number | Stack;
      } | null)
    | ({
        relationTo: 'issues';
        value: number | Issue;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}