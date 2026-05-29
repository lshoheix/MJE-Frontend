export const VIEW_LANDING_EVENT_NAME = "view_landing" as const;

export type LandingEventName = typeof VIEW_LANDING_EVENT_NAME;

export interface ViewLandingEvent {
  event_name: typeof VIEW_LANDING_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  referrer?: string | null;
  [key: string]: unknown;
}
