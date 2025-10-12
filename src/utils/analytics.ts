// Declare gtag on the global window object
declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }
  
  // Track page views
  export const trackPageView = (url: string) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: url });
    }
  };
  
  // Track custom events (optional)
  export const trackEvent = (
    action: string,
    category?: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  };
  