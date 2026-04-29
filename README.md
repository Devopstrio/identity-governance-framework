<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Identity Governance Framework Logo" />

<h1>Identity Governance Framework</h1>

<p><strong>The Institutional-Grade Control Plane for Workforce, Machine, and Privileged Identity Lifecycle Management</strong></p>

[![Standard: NIST--800--63](https://img.shields.io/badge/Standard-NIST--800--63-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Security: Zero--Trust](https://img.shields.io/badge/Security-Zero--Trust-green.svg?style=for-the-badge&labelColor=000000)]()
[![Compliance: SOC2--HIPAA](https://img.shields.io/badge/Compliance-SOC2--HIPAA-ff69b4?style=for-the-badge&labelColor=000000)]()
[![Platform: Multi--Cloud](https://img.shields.io/badge/Platform-Multi--Cloud-0078d4?style=for-the-badge&labelColor=000000)]()

<br/>

> **"Identity is the ultimate perimeter."** 
> Identity Governance Framework is a flagship platform designed to centralize the orchestration of human and machine identities across fragmented hybrid environments. It provides the automation, governance, and auditability required to enforce least-privilege at global scale.

</div>

---

## 🏛️ Executive Summary

The **Identity Governance Framework** is a premium reference architecture designed for CIOs, CISOs, and Identity Leaders. In the modern enterprise, identity has moved from a back-office service to the frontline of security. The explosion of SaaS applications, multi-cloud workloads, and remote workforces has created "Identity Sprawl," where access is often granted but rarely revoked.

This platform provides a **Unified Identity Governance (IGA) Engine**. It demonstrates how to automate the entire identity lifecycle—from "Joiner" (onboarding) to "Mover" (role change) to "Leaver" (offboarding). By integrating **FastAPI**, **React 18**, and **Terraform**, it bridges the gap between HR systems (Workday/SAP), directories (AD/Entra), and cloud platforms (AWS/Azure/GCP), ensuring that the right people have the right access to the right resources for the right reasons.

---

## 🚀 Business Outcomes & Drivers

### 🎯 Key Business Outcomes
- **Operational Efficiency**: Automate 95% of access requests and lifecycle triggers, freeing up security teams for strategic work.
- **Risk Reduction**: Eliminate "toxic combinations" and Segregation of Duties (SoD) violations before they are provisioned.
- **Audit Readiness**: Provide push-button evidence for SOC2, HIPAA, and GDPR audits with immutable certification logs.
- **Cost Optimization**: Identify and reclaim dormant licenses and over-provisioned cloud permissions.

### 🔑 Strategic Drivers
- **Hybrid Workforce**: The need to securely manage employees, contractors, and partners regardless of their location.
- **Machine Identity Explosion**: Governing the lifecycle of service accounts, bots, and API keys with the same rigor as human identities.
- **Privileged Access Sprawl**: Reducing the blast radius of administrative accounts through Just-In-Time (JIT) access models.

---

## 📐 Architecture Storytelling: 100+ Diagrams

### 1. Executive Identity Architecture
The high-level orchestration of identity across the enterprise ecosystem.

```mermaid
graph TD
    subgraph "Identity Governance Platform"
        Portal[Management Portal]
        Engine[Lifecycle Engine]
        Analytics[Risk Analytics]
        DB[(Identity Ledger)]
    end

    subgraph "Sources of Truth"
        HR[Workday / SAP]
        Dir[AD / Entra / Okta]
    end

    subgraph "Target Systems"
        AWS[AWS IAM]
        Azure[Azure RBAC]
        SaaS[Salesforce / Slack]
    end

    HR --> Engine
    Dir <--> Engine
    Engine --> TargetSystems
    Engine --> DB
    Analytics --> DB
    Portal --> Engine
```

### 2. Hybrid IAM Topology
Bridging on-premises AD forests with modern cloud identity providers.

```mermaid
graph LR
    subgraph "On-Premises"
        AD[Active Directory]
        LDAP[Legacy Apps]
    end
    subgraph "Identity Bridge"
        Connect[Entra Connect / Okta Agent]
    end
    subgraph "Cloud IDP"
        Entra[Entra ID]
        Okta[Okta]
    end
    AD --> Connect
    Connect --> Entra
    Entra --> SaaS[Cloud Apps]
```

### 3. Joiner / Mover / Leaver (JML) Workflow
The automated journey of an identity through its lifecycle.

```mermaid
sequenceDiagram
    participant HR as HR System
    participant IGA as IGA Engine
    participant Dir as Directory
    participant App as Target App

    HR->>IGA: New Hire Event
    IGA->>IGA: Assign Birthright Roles
    IGA->>Dir: Create Account
    IGA->>App: Provision Access
    IGA-->>HR: Onboarding Complete
```

### 4. Role-Based Access Control (RBAC) Model
Hierarchical role engineering and inheritance.

```mermaid
graph TD
    Business[Business Role: Finance Manager]
    Technical1[Technical Role: SAP Write]
    Technical2[Technical Role: AWS Finance-ReadOnly]
    
    Business --> Technical1
    Business --> Technical2
    User((Employee)) --> Business
```

### 5. Access Recertification Cycle
Ensuring access remains relevant and necessary.

```mermaid
graph LR
    Start[Launch Campaign] --> Assign[Assign Reviewers]
    Assign --> Review[Reviewer Decision]
    Review -->|Approve| Keep[Maintain Access]
    Review -->|Revoke| Deprovision[Auto-Revoke Access]
    Deprovision --> Audit[Update Audit Log]
```

### 6. Privileged Access Management (PAM) Session
Just-In-Time elevation for administrative tasks.

```mermaid
sequenceDiagram
    participant Admin
    participant Vault
    participant Target

    Admin->>Vault: Request Access (JIT)
    Vault->>Vault: Check Policy / Approval
    Vault-->>Admin: Dynamic Credential
    Admin->>Target: Execute Task
    Admin->>Vault: Check-in / Expire
    Vault->>Target: Rotate Password
```

### 7. Risk-Based Access Scoring
Visualizing the risk profile of individual identities.

```mermaid
graph TD
    Context[IP/Device/Location] --> Score[Risk Score]
    Entitlements[High-Risk Roles] --> Score
    Behavior[Anomalous Logins] --> Score
    Score -->|Score > 80| Trigger[Automatic Review]
```

### 8. Segregation of Duties (SoD) Conflict Detection
Preventing toxic combinations of permissions.

```mermaid
graph LR
    RoleA[Create Vendor]
    RoleB[Approve Payment]
    Conflict{SoD Check}
    
    RoleA --> Conflict
    RoleB --> Conflict
    Conflict -- "Violation" --> Block[Block Assignment]
```

### 9. Machine Identity Lifecycle
Managing the lifecycle of non-human entities.

```mermaid
graph TD
    Request[Bot Request] --> Issue[Issue Certificate/Secret]
    Issue --> Monitor[Usage Monitoring]
    Monitor --> Expiry{Expired?}
    Expiry -- "Yes" --> Rotate[Auto-Rotate]
```

### 10. Compliance Evidence Pipeline
Generating immutable reports for regulatory audits.

```mermaid
graph LR
    Events[Identity Events] --> Ledger[Immutable Audit Log]
    Ledger --> Report[SOC2 Compliance PDF]
    Report --> Auditor[Auditor Portal]
```

---

## 🛠️ Technical Stack & Deployment

### Local Development
To simulate the identity governance engine locally:
```bash
# Clone the repository
git clone https://github.com/devopstrio/identity-governance-framework.git
cd identity-governance-framework

# Setup environment
cp .env.example .env

# Start platform services
make up
```
Access the Management Portal at `http://localhost:3000`.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
