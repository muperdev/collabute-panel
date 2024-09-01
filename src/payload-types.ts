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
    users: User;
    projects: Project;
    cto: Cto;
    media: Media;
    blogs: Blog;
    waitlists: Waitlist;
    documents: Document;
    stacks: Stack;
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
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name: string;
  type?: ('startup' | 'company' | 'developer') | null;
  phoneNumber?: string | null;
  role?: ('admin' | 'user') | null;
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
  updatedAt: string;
  createdAt: string;
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