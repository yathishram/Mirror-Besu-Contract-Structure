import { networks } from '../mirror-config.js';
let PUBLIC_NODES = [];
for (const node in networks) {
  PUBLIC_NODES.push(networks[node].publicKey);
}

module.exports = {
  contracts: {
    TodoContract: { args: [], privacyGroupMembers: [networks.node1.publicKey, networks.node3.publicKey] },
  },
  groups: {
    public: { privacyGroupMembers: PUBLIC_NODES },
  },
};
