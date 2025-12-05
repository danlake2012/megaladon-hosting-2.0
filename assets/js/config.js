// Megaladon Hosting — configuration stub
// Replace the whmcsBase value with your real WHMCS base URL (no trailing slash)
window.MEGALADON = {
  whmcsBase: 'https://billing.megaladonhosting.com',
  // Domain provider options: 'whmcs' (default), 'hostgator', or 'custom'
  // If you set 'custom' you must provide domainSearchTemplate below
  domainProvider: 'whmcs',
  // domainSearchTemplate used to build a redirect URL. Use {query} where the encoded domain should go.
  // Default for WHMCS: /domainchecker.php?search={query}
  // Example HostGator template (not prefilled since many projects prefer custom templates):
  // 'https://www.hostgator.com/domains/search?search={query}'
  domainSearchTemplate: '/domainchecker.php?search={query}',
  // Example product IDs — replace with your actual pids
  pids: {
    reef: 1,
    creator: 2,
    apex: 3
  }
  ,
  // Product catalog: map WHMCS product IDs to names and prices for the local demo/cart.
  // Use string keys (ids) to remain safe across environments.
  productCatalog: {
    '1': { title: 'Reef Shared Hosting', price: 3.99 },
    '2': { title: 'Creator Hosting (2GB)', price: 6.99 },
    '3': { title: 'Apex Pro — higher tier', price: 12.99 }
  }
};
