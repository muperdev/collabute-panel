import { isAdmin, isAdminFieldLevel } from '@/access/isAdmin'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import type { CollectionConfig } from 'payload'

export const Waitlists: CollectionConfig = {
  slug: 'waitlists',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdmin,
    delete: isAdmin,
  },
  "fields": [
    {
      "name": "fullName",
      "type": "text",
      "label": "Full Name",
      "required": true
    },
    {
      "name": "email",
      "type": "email",
      "label": "Email Address",
      "required": true
    },
    {
      "name": "phoneNumber",
      "type": "text",
      "label": "Phone Number",
      "required": false
    },
    {
      "name": "userType",
      "type": "radio",
      "label": "User Type",
      "options": [
        { "label": "Developer", "value": "developer" },
        { "label": "Startup", "value": "startup" },
        { "label": "Other", "value": "other" }
      ],
      "required": true
    },
    {
      "name": "startupName",
      "type": "text",
      "label": "Startup Name",
      "required": false,
    },
    {
      "name": "developerSkills",
      "type": "text",
      "label": "Primary Programming Languages/Technologies",
      "required": false,
    },
    {
      "name": "otherUserType",
      "type": "text",
      "label": "Please Specify",
      "required": false,
    },
    {
      "name": "interestLevel",
      "type": "radio",
      "label": "Interest Level",
      "options": [
        { "label": "Immediately", "value": "immediately" },
        { "label": "1-3 months", "value": "1-3 months" },
        { "label": "3-6 months", "value": "3-6 months" },
        { "label": "6+ months", "value": "6+ months" }
      ],
      "required": true
    },
    {
      "name": "startupExperience",
      "type": "radio",
      "label": "Startup Experience",
      "options": [
        { "label": "Just starting", "value": "just_starting" },
        { "label": "1-3 years", "value": "1-3_years" },
        { "label": "3+ years", "value": "3+_years" }
      ],
      "required": false,
    },
    {
      "name": "developerExperience",
      "type": "radio",
      "label": "Developer Experience",
      "options": [
        { "label": "0-2 years", "value": "0-2_years" },
        { "label": "3-5 years", "value": "3-5_years" },
        { "label": "5+ years", "value": "5+_years" }
      ],
      "required": false,
    },
    {
      "name": "goals",
      "type": "textarea",
      "label": "Main Goals for Joining Contribunation",
      "required": true
    },
    {
      "name": "challenges",
      "type": "textarea",
      "label": "Challenges Contribunation Could Help Solve",
      "required": true
    },
    {
      "name": "subscriptionInterest",
      "type": "radio",
      "label": "Interested in Subscription Model?",
      "options": [
        { "label": "Yes", "value": "yes" },
        { "label": "No", "value": "no" }
      ],
      "required": true
    },
    {
      "name": "priceRange",
      "type": "text",
      "label": "Reasonable Price Range for Service",
      "required": true
    },
    {
      "name": "feedback",
      "type": "textarea",
      "label": "Suggestions for Contribunation",
      "required": false
    },
    {
      "name": "referralSource",
      "type": "radio",
      "label": "How Did You Hear About Contribunation?",
      "options": [
        { "label": "Social Media", "value": "social_media" },
        { "label": "Referral", "value": "referral" },
        { "label": "Web Search", "value": "web_search" },
        { "label": "Other", "value": "other" }
      ],
      "required": true
    },
    {
      "name": "otherReferralSource",
      "type": "text",
      "label": "Please Specify",
      "required": false,
    },
    {
      "name": "newsletterConsent",
      "type": "checkbox",
      "label": "Would you like to receive updates and newsletters?",
    },
    {
      "name": "termsConsent",
      "type": "checkbox",
      "label": "Agree to Terms and Conditions",
      "required": true
    },
    {
      "name": "openSourceContribution",
      "type": "checkbox",
      "label": "Interested in Contributing to Open Source Projects?",
      "required": false,
    },
    {
      "name": "mentoring",
      "type": "checkbox",
      "label": "Open to Mentoring or Offering Feedback to Developers?",
      "required": false,
    }
  ]
}
