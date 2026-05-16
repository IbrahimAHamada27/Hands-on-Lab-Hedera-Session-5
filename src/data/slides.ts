export type VisualType = 'none' | 'network' | 'workflow' | 'useCases' | 'comparison' | 'auditLog' | 'hero' | 'gossip' | 'mirror' | 'voting' | 'ordering' | 'abft';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  visual: VisualType;
  highlight?: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Session 5: Hands-on Lab",
    subtitle: "Your First Transfer",
    content: [
      "Showcase: A Mobile App using Hedera for Student Registration.",
      "Practical: Creating a Topic ID, submitting messages, and verifying consensus on the Testnet."
    ],
    visual: "hero"
  },
  {
    id: 2,
    title: "Opening Question",
    highlight: "Imagine This...",
    content: [
      "Thousands of devices and applications are sending events every second.",
      "Who decides the correct order?",
      "How can everyone trust the timestamps?",
      "How can systems agree without a central server?"
    ],
    visual: "none"
  },
  {
    id: 3,
    title: "The Core Problem",
    subtitle: "Traditional systems rely on Centralized Servers",
    content: [
      "The server decides:",
      "• Order of events",
      "• Timestamps",
      "• Validation",
      "Problem: You must trust the company completely."
    ],
    visual: "none"
  },
  {
    id: 4,
    title: "What is Consensus?",
    content: [
      "Consensus means: All nodes agree on:",
      "• What happened",
      "• When it happened",
      "• The correct order of events"
    ],
    visual: "network"
  },
  {
    id: 5,
    title: "Why Consensus Matters",
    content: [
      "Without consensus:",
      "• Data conflicts happen",
      "• Fraud becomes easier",
      "• Systems lose trust",
      "• Data tampering may occur"
    ],
    visual: "none"
  },
  {
    id: 6,
    title: "What is HCS?",
    subtitle: "Hedera Consensus Service",
    content: [
      "HCS allows applications to:",
      "• Submit messages",
      "• Receive fair ordering",
      "• Receive trusted timestamps",
      "• Achieve distributed consensus",
      "All without building an entire custom network."
    ],
    visual: "workflow"
  },
  {
    id: 7,
    title: "Main Idea",
    content: [
      "Applications send: Messages",
      "Hedera provides:",
      "• Consensus ordering",
      "• Consensus timestamps",
      "• Immutable event history"
    ],
    visual: "workflow"
  },
  {
    id: 8,
    title: "HCS Is NOT a Database",
    highlight: "Important",
    content: [
      "HCS does not store full application state.",
      "HCS focuses exclusively on:",
      "• Ordering",
      "• Timestamping",
      "• Trust"
    ],
    visual: "none"
  },
  {
    id: 9,
    title: "Consensus as a Service",
    content: [
      "Instead of building:",
      "• Miners",
      "• Validators",
      "• Consensus systems",
      "Hedera provides the trust layer for you out-of-the-box."
    ],
    visual: "network"
  },
  {
    id: 10,
    title: "What is a Topic?",
    content: [
      "A Topic is a communication channel for messages.",
      "Applications send messages into specific topics to keep data organized."
    ],
    visual: "workflow"
  },
  {
    id: 11,
    title: "Topic Analogy",
    content: [
      "Real-life analogy:",
      "A Topic is similar to:",
      "• WhatsApp Group",
      "• Discord Channel",
      "• Kafka Stream",
      "But powered by decentralized Hedera consensus."
    ],
    visual: "none"
  },
  {
    id: 12,
    title: "HCS Workflow",
    content: [
      "1. Create Topic",
      "2. Submit Message",
      "3. Network reaches consensus",
      "4. Messages receive timestamps",
      "5. Mirror nodes publish data"
    ],
    visual: "workflow"
  },
  {
    id: 13,
    title: "Step 1: Create Topic",
    content: [
      "Applications first create a Topic.",
      "The network returns:",
      "• Topic ID",
      "• Topic information"
    ],
    visual: "workflow"
  },
  {
    id: 14,
    title: "Step 2: Submit Message",
    content: [
      "Applications submit Messages.",
      "Examples of messages:",
      "• Supply Chain Updates",
      "• System Events",
      "• Application Logs",
      "• AI actions",
      "• IoT sensor data"
    ],
    visual: "none"
  },
  {
    id: 15,
    title: "Gossip Protocol",
    content: [
      "Nodes continuously share information with random neighbors.",
      "Information spreads rapidly and exponentially across the entire network."
    ],
    visual: "gossip"
  },
  {
    id: 16,
    title: "Gossip About Gossip",
    subtitle: "The Core Innovation",
    content: [
      "Nodes do not only share messages. They also share:",
      "• Who shared the message",
      "• When it was shared",
      "• Communication history"
    ],
    visual: "gossip"
  },
  {
    id: 17,
    title: "Why Gossip About Gossip Matters",
    content: [
      "This allows nodes to determine:",
      "• Consensus",
      "• Ordering",
      "• Voting",
      "• Timestamps",
      "All without traditional, heavy voting systems."
    ],
    visual: "none"
  },
  {
    id: 18,
    title: "Virtual Voting",
    content: [
      "Nodes can determine voting outcomes mathematically.",
      "Because they know the communication history, they don't need to send actual vote messages."
    ],
    visual: "voting"
  },
  {
    id: 19,
    title: "Consensus Timestamp",
    content: [
      "The network agrees on:",
      "One single trusted timestamp",
      "For every single message that arrives."
    ],
    visual: "auditLog"
  },
  {
    id: 20,
    title: "Why Timestamps Matter",
    content: [
      "Timestamps are absolutely critical for:",
      "• Decentralized Identity",
      "• Audit Trails",
      "• AI Agent Decisions",
      "• Legal audit systems",
      "• Supply chains"
    ],
    visual: "none"
  },
  {
    id: 21,
    title: "Fair Ordering",
    content: [
      "Messages are ordered fairly based on:",
      "• Network arrival",
      "• Consensus rules",
      "Not manipulated by a central admin or miner."
    ],
    visual: "ordering"
  },
  {
    id: 22,
    title: "Sequence Number",
    content: [
      "Every message receives a sequential order.",
      "Example:",
      "• Message #1",
      "• Message #2",
      "• Message #3"
    ],
    visual: "auditLog"
  },
  {
    id: 23,
    title: "Running Hash",
    content: [
      "A cryptographic hash representing:",
      "• Entire message history",
      "• Event integrity",
      "Any change to past data instantly modifies the current hash, proving tampering."
    ],
    visual: "auditLog"
  },
  {
    id: 24,
    title: "Mirror Nodes",
    content: [
      "Mirror Nodes separate consensus from storage. They:",
      "• Receive consensus data",
      "• Publish messages",
      "• Allow subscriptions",
      "• Support applications"
    ],
    visual: "mirror"
  },
  {
    id: 25,
    title: "Real-Time Subscriptions",
    content: [
      "Applications can Subscribe to Topics.",
      "And receive:",
      "• Live messages",
      "• Real-time events",
      "• Ordered data streams"
    ],
    visual: "none"
  },
  {
    id: 26,
    title: "aBFT Security",
    content: [
      "Hedera uses Asynchronous Byzantine Fault Tolerance (aBFT).",
      "This is one of the highest possible security standards in distributed systems."
    ],
    visual: "abft"
  },
  {
    id: 27,
    title: "Why aBFT Matters",
    content: [
      "Even if:",
      "• Some nodes fail",
      "• Some nodes act maliciously",
      "• Severe network delays occur",
      "Consensus still succeeds securely and accurately."
    ],
    visual: "none"
  },
  {
    id: 28,
    title: "Why HCS Is Powerful",
    content: [
      "HCS provides:",
      "• Fast consensus",
      "• Trusted timestamps",
      "• Fair ordering",
      "• Immutable logs",
      "• High scalability",
      "• Predictable, low fees"
    ],
    visual: "none"
  },
  {
    id: 29,
    title: "HCS vs Traditional Systems",
    content: [
      "Comparing HCS to older methods."
    ],
    visual: "comparison"
  },
  {
    id: 30,
    title: "Real-World Use Cases",
    content: [
      "Supply Chain: Track products transparently (e.g., Datahash).",
      "Healthcare: Protect medical event logs.",
      "IoT Systems: Devices publish trusted events.",
      "Sustainability: Verify carbon emissions (e.g., Hyundai)."
    ],
    visual: "useCases"
  },
  {
    id: 31,
    title: "AI + HCS",
    content: [
      "Future AI systems may require:",
      "• Trusted event logging",
      "• Action verification",
      "• Decision auditing",
      "HCS can provide trusted coordination and an immutable audit trail for AI agents."
    ],
    visual: "useCases"
  },
  {
    id: 32,
    title: "Why Developers Use HCS",
    content: [
      "Developers do not need to build:",
      "• Consensus algorithms",
      "• Distributed trust systems",
      "• Complex validator networks",
      "Hedera already provides them as a simple API."
    ],
    visual: "none"
  },
  {
    id: 33,
    title: "Time for the Hands-on Lab",
    subtitle: "Your First Transfer",
    content: [
      "The practical session will include:",
      "• Showcase: Student Registration App via Hedera",
      "• Environment Setup & Hedera SDK",
      "• Creating Testnet Accounts",
      "• Creating a Topic ID & Submitting Messages",
      "• Verifying consensus via Mirror Nodes"
    ],
    visual: "hero"
  },
  {
    id: 34,
    title: "Key Takeaways",
    content: [
      "HCS Provides:",
      "• Decentralized Consensus",
      "• Fair ordering",
      "• Trusted timestamps",
      "• Immutable event history",
      "• Fast distributed trust"
    ],
    visual: "none"
  },
  {
    id: 35,
    title: "Final Message",
    highlight: "The Future of Trust",
    content: [
      "HCS is not just a messaging system.",
      "It is a fundamental trust infrastructure for the future internet."
    ],
    visual: "none"
  },
  {
    id: 36,
    title: "Thank You 🤍",
    highlight: "Ready to Practical? 🚀",
    content: [
      "Let's write some code and build on Hedera Consensus Service."
    ],
    visual: "hero"
  }
];
