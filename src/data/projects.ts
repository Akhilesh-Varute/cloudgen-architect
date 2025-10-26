export const projects = [
  {
    id: 1,
    title: "AI Cloud Insights Platform",
    description: "GenAI-powered CloudOps platform for real-time cloud compliance and security monitoring",
    challenge: "Enterprise clients needed real-time visibility into their AWS infrastructure - compliance, security, cost optimization - but manual audits were taking 10+ hours per week. Traditional monitoring tools lacked the intelligence to provide actionable insights.",
    approach: "Instead of building another dashboard, I architected a GenAI-powered platform that doesn't just monitor - it understands. Using AWS Bedrock integrated with CloudTrail, Config, and IAM, the system analyzes cloud events in real-time and provides natural language insights.",
    keyDecisions: [
      "Multi-AZ architecture for 99.9%+ reliability",
      "Serverless-first approach (Lambda + S3) for cost efficiency",
      "Real-time processing with EventBridge",
      "AWS Bedrock for AI-powered analysis (vs. building custom ML)"
    ],
    impact: [
      "60% reduction in manual audit effort",
      "Real-time compliance monitoring",
      "Proactive cost optimization recommendations",
      "Now used by multiple enterprise clients"
    ],
    techStack: [
      "AWS Bedrock",
      "Lambda",
      "CloudTrail",
      "Config",
      "S3",
      "EventBridge",
      "Python",
      "FastAPI",
      "React"
    ],
    architecture: "Serverless, Multi-AZ, Event-driven",
    architectureDiagram: `graph TB
    subgraph AWS Cloud
        CT[CloudTrail] -->|Events| EB[EventBridge]
        CFG[Config] -->|Configuration| EB
        IAM[IAM Policies] -->|Access Data| EB
        
        EB -->|Trigger| L1[Lambda Processor]
        L1 -->|Query| BR[AWS Bedrock]
        BR -->|AI Analysis| L1
        
        L1 -->|Store| S3[(S3 Storage)]
        L1 -->|Cache| DDB[(DynamoDB)]
        
        subgraph Multi-AZ Setup
            S3
            DDB
            L2[Lambda - AZ2]
        end
        
        API[API Gateway] -->|Route| L1
        API -->|Failover| L2
    end
    
    UI[React Frontend] -->|HTTPS| API
    
    style BR fill:#FF9900
    style UI fill:#61DAFB
    style S3 fill:#569A31
    style DDB fill:#4053D6`,
    liveUrl: "https://aicloudinsights.ai/",
    featured: true
  },
  {
    id: 2,
    title: "GPU Marketplace Infrastructure",
    description: "Cloud infrastructure for GPU compute marketplace with automated provisioning",
    challenge: "Dynamic GPU resource allocation at scale with unpredictable demand patterns. Needed to provision, manage, and scale GPU instances automatically while maintaining cost efficiency.",
    approach: "Designed Kubernetes-based orchestration platform with custom scaling policies. Implemented automated resource allocation that adapts to demand in real-time while optimizing costs.",
    keyDecisions: [
      "Kubernetes for container orchestration and flexibility",
      "Custom auto-scaling policies based on GPU utilization metrics",
      "Multi-region deployment for low-latency access",
      "Automated billing and resource tracking"
    ],
    impact: [
      "Automated GPU resource allocation and scaling",
      "Reduced provisioning time from hours to minutes",
      "99.5% uptime across multiple regions",
      "Serving production workloads for multiple clients"
    ],
    techStack: [
      "Kubernetes",
      "AWS EC2",
      "S3",
      "Lambda",
      "Node.js",
      "Docker",
      "Terraform"
    ],
    architecture: "Microservices, Auto-scaling, Multi-region",
    architectureDiagram: `graph TB
    subgraph Control Plane
        API[API Gateway] -->|Request| SVC[Service Manager]
        SVC -->|Allocate| SCHED[K8s Scheduler]
    end
    
    subgraph Multi-Region Deployment
        subgraph Region US-East
            K8S1[K8s Cluster] -->|Manage| POD1[GPU Pods]
            POD1 -->|Mount| PV1[Persistent Volume]
        end
        
        subgraph Region EU-West
            K8S2[K8s Cluster] -->|Manage| POD2[GPU Pods]
            POD2 -->|Mount| PV2[Persistent Volume]
        end
    end
    
    SCHED -->|Deploy| K8S1
    SCHED -->|Deploy| K8S2
    
    MON[Prometheus Monitoring] -->|Scrape| K8S1
    MON -->|Scrape| K8S2
    
    AUTO[Auto-Scaler] -->|Scale| K8S1
    AUTO -->|Scale| K8S2
    MON -->|Metrics| AUTO
    
    S3[(S3 Storage)] -->|Artifacts| POD1
    S3 -->|Artifacts| POD2
    
    style POD1 fill:#326CE5
    style POD2 fill:#326CE5
    style MON fill:#E6522C`,
    liveUrl: "https://gpus.gpuoncloud.com/",
    featured: true
  },
  {
    id: 3,
    title: "SmartDevOps Engine",
    description: "Automated AWS provisioning and governance platform",
    challenge: "Development teams were spending excessive time on manual AWS resource provisioning and struggling with configuration errors and compliance violations.",
    approach: "Built an automated provisioning engine that applies governance policies and best practices by default. Used infrastructure-as-code principles with pre-configured templates for common architectures.",
    keyDecisions: [
      "Template-based provisioning for consistency",
      "Built-in compliance checks before deployment",
      "GitOps workflow for version control",
      "Automated rollback on configuration errors"
    ],
    impact: [
      "Accelerated team velocity by 3x",
      "Reduced configuration errors by 80%",
      "100% compliance with security policies",
      "Improved developer experience"
    ],
    techStack: [
      "Kubernetes",
      "Node.js",
      "React",
      "AWS SDK",
      "CloudFormation",
      "PostgreSQL"
    ],
    architecture: "Event-driven, Infrastructure-as-code",
    featured: false
  },
  {
    id: 4,
    title: "IAM Policy Analyzer",
    description: "AI-driven access control scanner for AWS IAM",
    challenge: "Complex IAM policies were creating security risks through overly permissive access and difficult-to-audit configurations.",
    approach: "Developed an AI-powered analyzer using LangChain that scans IAM policies, identifies potential security risks, and provides natural language explanations of access patterns.",
    keyDecisions: [
      "LangChain for flexible AI integration",
      "Graph-based policy relationship mapping",
      "Automated risk scoring system",
      "Integration with AWS IAM Access Analyzer"
    ],
    impact: [
      "Enhanced security through automated policy analysis",
      "Identified and remediated 200+ risky permissions",
      "Reduced policy audit time by 70%",
      "Improved security posture across accounts"
    ],
    techStack: [
      "LangChain",
      "AWS IAM",
      "Python",
      "OpenAI GPT-4",
      "AWS Lambda"
    ],
    architecture: "Serverless, AI-powered",
    featured: false
  },
  {
    id: 5,
    title: "Dockerfile Optimizer",
    description: "GenAI-powered container optimization tool",
    challenge: "Docker images were unnecessarily large and slow to build, impacting deployment speed and storage costs across multiple projects.",
    approach: "Built a GenAI tool that analyzes Dockerfiles and suggests optimizations based on best practices, multi-stage builds, and layer caching strategies.",
    keyDecisions: [
      "GPT-4 for intelligent optimization suggestions",
      "FastAPI for high-performance API",
      "Automated testing of optimized images",
      "Benchmark comparison before/after optimization"
    ],
    impact: [
      "60% average reduction in image size",
      "40% faster build times",
      "Reduced storage and bandwidth costs",
      "Improved deployment speed"
    ],
    techStack: [
      "GPT-4",
      "FastAPI",
      "Docker",
      "Python",
      "Redis"
    ],
    architecture: "Microservices, API-first",
    featured: false
  }
];