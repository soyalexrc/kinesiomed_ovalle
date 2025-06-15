import { sendGTMEvent } from '@next/third-parties/google'


// GTM Tracking Strategy for Physical Therapy Website in Chile

// 1. ESSENTIAL TRACKING EVENTS
// These are the most important events to track for your business

export type ContactLocation = 'header' | 'footer' | 'service_page' | 'contact_page' | 'home_page' | 'about_page';
export type ContactType = 'whatsapp' | 'phone' | 'chat' | 'email' | 'location';

// Contact Button Clicks (High Priority)
export const trackContactClick = (contactType: ContactType, location: ContactLocation) => {
  sendGTMEvent({
    event: 'contact_click',
    contact_type: contactType, // 'whatsapp', 'phone', 'chat'
    value: contactType,
    click_location: location,  // 'header', 'footer', 'service_page', 'contact_page'
    event_category: 'engagement',
    event_label: `${contactType}_${location}`
  })
}

// Service Interest Tracking
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  sendGTMEvent({
    event: 'service_view',
    service_name: serviceName,
    value: serviceName,
    service_category: serviceCategory, // 'rehabilitation', 'sports_therapy', 'pain_management'
    event_category: 'service_engagement'
  })
}

// Page Views with Service Context
export const trackPageView = (pageName: string, serviceType: string | null = null) => {
  sendGTMEvent({
    event: 'page_view',
    page_name: pageName,
    value: pageName,
    service_type: serviceType,
    page_category: 'content_view'
  })
}


// Scroll Depth Tracking
export const trackScrollDepth = (percentage: number) => {
  sendGTMEvent({
    event: 'scroll_depth',
    scroll_percentage: percentage,
    value: percentage,
    page_name: window.location.pathname
  })
}

// Time on Page Tracking
export const trackTimeOnPage = (timeSpent: number) => {
  sendGTMEvent({
    event: 'time_on_page',
    time_spent_seconds: timeSpent,
    value: timeSpent,
    page_name: window.location.pathname
  })
}

// Form Interactions (if you have contact forms)
export const trackFormInteraction = (formName: string, action: 'start' | 'submit' | 'abandon') => {
  sendGTMEvent({
    event: 'form_interaction',
    form_name: formName,
    value: formName,
    form_action: action, // 'start', 'submit', 'abandon'
    event_category: 'form_engagement'
  })
}

// Generic event tracker
export const trackEvent = (eventName: string, parameters = {}) => {
  sendGTMEvent({
    event: eventName,
    ...parameters,
    timestamp: new Date().toISOString()
  })
}

// Location-based tracking (for Chilean context)
export const trackLocationInterest = (city: string, region: string) => {
  sendGTMEvent({
    event: 'location_interest',
    city: city,
    region: region,
    country: 'Chile'
  })
}