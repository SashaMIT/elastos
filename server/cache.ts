
import { createHash } from 'crypto';

// Simple in-memory cache
interface CacheItem {
  data: any;
  expiry: number;
}

class APICache {
  private cache: Record<string, CacheItem> = {};
  
  /**
   * Get cached data if it exists and hasn't expired
   */
  get(key: string): any | null {
    const cacheKey = this.generateKey(key);
    const item = this.cache[cacheKey];
    
    if (!item) return null;
    
    // Return null if expired
    if (Date.now() > item.expiry) {
      delete this.cache[cacheKey];
      return null;
    }
    
    return item.data;
  }
  
  /**
   * Set data in cache with expiry
   */
  set(key: string, data: any, ttlMs = 5 * 60 * 1000): void {
    const cacheKey = this.generateKey(key);
    this.cache[cacheKey] = {
      data,
      expiry: Date.now() + ttlMs
    };
  }
  
  /**
   * Generate consistent hash key from request url and params
   */
  private generateKey(key: string): string {
    return createHash('md5').update(key).digest('hex');
  }
  
  /**
   * Clear entire cache or specific keys
   */
  clear(key?: string): void {
    if (key) {
      const cacheKey = this.generateKey(key);
      delete this.cache[cacheKey];
    } else {
      this.cache = {};
    }
  }
  
  /**
   * Get cache stats
   */
  getStats(): { size: number; keys: string[] } {
    return {
      size: Object.keys(this.cache).length,
      keys: Object.keys(this.cache)
    };
  }
}

// Export singleton instance
export const apiCache = new APICache();
