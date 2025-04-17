import{n as r}from"./index-0o3yT1UY.js";const n=e=>r({queryKey:["marketCap"],queryFn:async()=>{const a=await fetch("/api/market-cap");if(!a.ok)throw new Error("Failed to fetch market cap data");return a.json()},enabled:(e==null?void 0:e.enabled)!==void 0?e.enabled:!1});export{n as u};
//# sourceMappingURL=useMarketCapData-BBKVUuun.js.map
