import { v4 as uuidv4 } from 'uuid';

interface UserActionData {
  id: string;
  label: string;
  page: string;
  action: string;
  eventName: string;
  timestamp?: number;
}

/**
 * Static correlation manager for API tracking
 * This provides a global way to access correlation data from any context
 */
class CorrelationManager {
  private static instance: CorrelationManager;
  private correlationId: string | null = null;
  private userAction: UserActionData | null = null;

  private constructor() {}

  public static getInstance(): CorrelationManager {
    if (!CorrelationManager.instance) {
      CorrelationManager.instance = new CorrelationManager();
    }
    return CorrelationManager.instance;
  }

  public startUserAction(actionData: UserActionData): string {
    const newCorrelationId = uuidv4();
    this.correlationId = newCorrelationId;
    this.userAction = {
      ...actionData,
      timestamp: Date.now(),
    };
    return newCorrelationId;
  }

  public clearUserAction(): void {
    this.correlationId = null;
    this.userAction = null;
  }

  public getCorrelationId(): string | null {
    return this.correlationId;
  }

  public getUserAction(): UserActionData | null {
    return this.userAction;
  }

  public generateNewCorrelationId(): string {
    const newId = uuidv4();
    this.correlationId = newId;
    return newId;
  }

  /**
   * Get user action headers for API requests
   */
  public getUserActionHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    
    if (this.userAction) {
      headers['X-USER-ACTION-ID'] = this.userAction.id;
      headers['X-USER-ACTION-LABEL'] = this.userAction.label;
      headers['X-USER-ACTION-PAGE'] = this.userAction.page;
      headers['X-USER-ACTION-TYPE'] = this.userAction.action;
      headers['X-USER-ACTION-EVENT'] = this.userAction.eventName;
      headers['X-USER-ACTION-TIMESTAMP'] = (this.userAction.timestamp || Date.now()).toString();
    }

    return headers;
  }
}

export const correlationManager = CorrelationManager.getInstance();