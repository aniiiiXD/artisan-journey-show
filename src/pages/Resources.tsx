import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, ArrowLeft } from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Sample resources data - replace with your actual resources
  const resources = [
      {
        "id": 1,
        "title": "DeFi Protocol Design & Smart Contract Audit",
        "description": "Advanced resources for designing and auditing decentralized finance protocols, covering topics such as automated market makers (AMMs), lending protocols, and security vulnerabilities.",
        "url": "https://solidity-by-example.org/",
        "category": "Blockchain",
        "topics": [
          "AMM Algorithms (Constant Product, Constant Sum, etc.)",
          "Yield Farming & Liquidity Mining Mechanics",
          "Flash Loan Attack Vectors and Mitigation",
          "Solidity Best Practices and Auditing Frameworks (e.g., Slither)"
        ]
      },
      {
        "id": 2,
        "title": "High-Frequency Trading (HFT) Infrastructure",
        "description": "Dive deep into the architecture of low-latency trading systems, focusing on order book management, arbitrage strategies, and network optimization.",
        "url": "https://lmax-exchange.github.io/disruptor/",
        "category": "Systems & Finance",
        "topics": [
          "Order Book Infrastructure (e.g., LMAX Disruptor Pattern)",
          "Cross-Market Arbitrage Engine [cite: 20]",
          "WebSocket for Real-time Data Streaming [cite: 20]",
          "Low-Latency Network Stack Optimization"
        ]
      },
      {
        "id": 3,
        "title": "Advanced Parallel & Concurrent Programming",
        "description": "Explore complex topics in parallel computing, including multi-threaded systems, non-blocking I/O, and synchronization primitives.",
        "url": "https://docs.microsoft.com/en-us/windows/win32/sync/synchronization",
        "category": "Systems Programming",
        "topics": [
          "Multi-threaded HTTP Proxy Server with Caching [cite: 10]",
          "POSIX Threads, Semaphores, and Non-blocking I/O [cite: 10]",
          "Fine-grained Locking and Synchronization Primitives [cite: 11]",
          "Parallel Programming Techniques for Asynchronous Functions [cite: 4]"
        ]
      },
      {
        "id": 4,
        "title": "AI Agent & Large Language Model (LLM) Engineering",
        "description": "Resources for building and fine-tuning AI agents and LLMs for specific tasks, including prompt engineering, RAG, and multi-agent systems.",
        "url": "https://python.langchain.com/docs/get_started/introduction",
        "category": "Artificial Intelligence",
        "topics": [
          "AI Agent Workflows with LangChain and LLMs [cite: 8]",
          "Semantic Clustering for Industry-Specific Pipelines [cite: 8]",
          "RAG-based Reasoning for Adaptive Method Selection [cite: 29]",
          "Fine-tuning LLAMA Maverick Models [cite: 29]"
        ]
      },
      {
        "id": 5,
        "title": "Computational Geometry & Robotics",
        "description": "In-depth topics on algorithms for pathfinding in complex environments, including visibility graphs, Minkowski sums, and Voronoi diagrams.",
        "url": "https://www.cs.princeton.edu/~chazelle/pubs/compgeom-notes.pdf",
        "category": "Robotics & Algorithms",
        "topics": [
          "Visibility Graph-based Path Planning [cite: 15]",
          "Minkowski Sum-style Obstacle Buffering [cite: 15]",
          "Dijkstra's Algorithm with Priority Queues [cite: 17]",
          "Voronoi Diagram-based Pathfinding (de Berg et al. formulations) [cite: 19]"
        ]
      }
  ];

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center gap-2 hover:bg-accent"
        onClick={handleGoBack}
      >
        <ArrowLeft className="h-4 w-4" />
        Go Back
      </Button>
      
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
        <p className="text-muted-foreground">Find resources to help you skill up and grow as a developer</p>
      </div>

      <div className="max-w-2xl mx-auto mb-8 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search resources..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{resource.description}</p>
              <Button asChild variant="outline">
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  View Resource
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No resources found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default Resources;
