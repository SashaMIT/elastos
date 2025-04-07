
import React, { useState, useEffect } from 'react';
import { ExternalLink, Copy } from 'lucide-react';
import { Card } from './ui/card';

interface BlockData {
  hash: string;
  height: number;
  time: number;
  tx: any[];
  poolInfo: {
    poolName: string;
  };
  networkhashps: number;
}

const BlockTable: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const EXPLORER_URL = 'https://ela.elastos.io/block/';

  const truncateHash = (hash: string): string => {
    return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const fetchLatestBlocks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const latestBlockRes = await fetch('/api/elastos/block/latest');
      if (!latestBlockRes.ok) throw new Error('Failed to fetch latest block');
      
      const newBlockData = await latestBlockRes.json();
      const latestHeight = newBlockData.height;
      const blockPromises = [];
      
      for (let i = 0; i < 5; i++) {
        const height = latestHeight - i;
        blockPromises.push(
          fetch(`/api/elastos/block/${height}`)
            .then(res => {
              if (!res.ok) throw new Error(`Failed to fetch block ${height}`);
              return res.json();
            })
        );
      }
      
      const blockResults = await Promise.all(blockPromises);
      const formattedBlocks = blockResults.map(block => ({
        hash: block.hash,
        height: block.height,
        time: block.time,
        tx: block.tx || [],
        poolInfo: { poolName: block.poolInfo?.poolName || 'Unknown' },
        networkhashps: block.networkhashps
      }));
      
      setBlocks(formattedBlocks);
    } catch (error) {
      console.error('Error fetching blocks:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch blocks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestBlocks();
    const interval = setInterval(fetchLatestBlocks, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Latest Network Activity</h2>
      {blocks.length === 0 ? (
        <div className="text-center p-4">No blocks found</div>
      ) : (
        blocks.map((block) => (
          <Card key={block.hash} className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Height</div>
                <div className="font-mono">#{block.height}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Hash</div>
                <div className="flex items-center gap-2">
                  <a
                    href={`${EXPLORER_URL}${block.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-blue-500 hover:text-blue-700 flex items-center gap-1"
                  >
                    {truncateHash(block.hash)}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(block.hash)}
                    className="opacity-50 hover:opacity-100"
                    title="Copy hash"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Time</div>
                <div>{formatTime(block.time)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Transactions</div>
                <div>{block.tx.length}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Pool</div>
                <div>{block.poolInfo.poolName}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Network Hashrate</div>
                <div>{(block.networkhashps / 1e18).toFixed(2)} EH/s</div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default BlockTable;
