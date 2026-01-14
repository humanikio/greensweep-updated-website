// Shared form data structure for all quote/contact forms
// This ensures consistency for CRM automation

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
}

export const initialFormData: QuoteFormData = {
  name: '',
  email: '',
  phone: '',
};
