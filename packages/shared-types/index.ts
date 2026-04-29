export enum IdentityType {
  WORKFORCE = "WORKFORCE",
  CONTRACTOR = "CONTRACTOR",
  VENDOR = "VENDOR",
  PARTNER = "PARTNER",
  SERVICE_ACCOUNT = "SERVICE_ACCOUNT",
  MACHINE = "MACHINE",
  CUSTOMER = "CUSTOMER"
}

export enum AccessLevel {
  READ = "READ",
  WRITE = "WRITE",
  ADMIN = "ADMIN",
  OWNER = "OWNER"
}

export interface Identity {
  id: string;
  externalId: string;
  userName: string;
  email: string;
  displayName: string;
  type: IdentityType;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "DELETED";
  department?: string;
  managerId?: string;
  riskScore: number;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  provider: string; // AWS, Azure, Okta, etc.
  type: "BUSINESS" | "TECHNICAL" | "BIRTHRIGHT";
  permissions: string[];
  metadata?: Record<string, any>;
}

export interface AccessRequest {
  id: string;
  requesterId: string;
  targetIdentityId: string;
  roleId: string;
  justification: string;
  status: "PENDING" | "APPROVED" | "REJECTED" | "PROVISIONED";
  expiresAt?: string;
  createdAt: string;
}

export interface CertificationCampaign {
  id: string;
  name: string;
  status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
  reviewerId: string;
  totalItems: number;
  completedItems: number;
  startDate: string;
  endDate: string;
}
