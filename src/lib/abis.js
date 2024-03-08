export const ASIDE0x01_ABI = [
	{
		type: 'constructor',
		inputs: [
			{ name: 'baseURI_', type: 'string', internalType: 'string' },
			{ name: 'admin_', type: 'address', internalType: 'address' },
			{ name: 'minter_', type: 'address', internalType: 'address' },
			{ name: 'unlocker_', type: 'address', internalType: 'address' },
			{ name: 'timelock_', type: 'uint256', internalType: 'uint256' },
			{ name: 'router_', type: 'address', internalType: 'address' },
			{ name: 'donId_', type: 'bytes32', internalType: 'bytes32' },
			{
				name: 'subscriptionId_',
				type: 'uint64',
				internalType: 'uint64'
			},
			{
				name: 'callbackGasLimit_',
				type: 'uint32',
				internalType: 'uint32'
			},
			{ name: 'source_', type: 'string', internalType: 'string' }
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'BASE_URI',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'DEFAULT_ADMIN_ROLE',
		inputs: [],
		outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'MINTER_ROLE',
		inputs: [],
		outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'SENTIMENT_INTERVAL',
		inputs: [],
		outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'SENTIMENT_UNIT',
		inputs: [],
		outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'TIMELOCK_DEADLINE',
		inputs: [],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'UNLOCKER_ROLE',
		inputs: [],
		outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'approve',
		inputs: [
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'areAllUnlocked',
		inputs: [],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'balanceOf',
		inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'callbackGasLimit',
		inputs: [],
		outputs: [{ name: '', type: 'uint32', internalType: 'uint32' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'donId',
		inputs: [],
		outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'eUnlock',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'getApproved',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'address', internalType: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'getRoleAdmin',
		inputs: [{ name: 'role', type: 'bytes32', internalType: 'bytes32' }],
		outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'grantRole',
		inputs: [
			{ name: 'role', type: 'bytes32', internalType: 'bytes32' },
			{ name: 'account', type: 'address', internalType: 'address' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'handleOracleFulfillment',
		inputs: [
			{ name: 'requestId', type: 'bytes32', internalType: 'bytes32' },
			{ name: 'response', type: 'bytes', internalType: 'bytes' },
			{ name: 'err', type: 'bytes', internalType: 'bytes' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'hasRole',
		inputs: [
			{ name: 'role', type: 'bytes32', internalType: 'bytes32' },
			{ name: 'account', type: 'address', internalType: 'address' }
		],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'isApprovedForAll',
		inputs: [
			{ name: 'owner', type: 'address', internalType: 'address' },
			{ name: 'operator', type: 'address', internalType: 'address' }
		],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'isEUnlocked',
		inputs: [],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'isUnlocked',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'mint',
		inputs: [
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' },
			{ name: 'payload', type: 'string', internalType: 'string' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'name',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'ownerOf',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'address', internalType: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'renounceRole',
		inputs: [
			{ name: 'role', type: 'bytes32', internalType: 'bytes32' },
			{
				name: 'callerConfirmation',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'revokeRole',
		inputs: [
			{ name: 'role', type: 'bytes32', internalType: 'bytes32' },
			{ name: 'account', type: 'address', internalType: 'address' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'router',
		inputs: [],
		outputs: [{ name: '', type: 'address', internalType: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'safeTransferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'safeTransferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' },
			{ name: 'data', type: 'bytes', internalType: 'bytes' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'sentimentOf',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'setApprovalForAll',
		inputs: [
			{ name: 'operator', type: 'address', internalType: 'address' },
			{ name: 'approved', type: 'bool', internalType: 'bool' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'setCallbackGasLimit',
		inputs: [
			{
				name: 'callbackGasLimit_',
				type: 'uint32',
				internalType: 'uint32'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'setDonId',
		inputs: [{ name: 'donId_', type: 'bytes32', internalType: 'bytes32' }],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'setSource',
		inputs: [{ name: 'source_', type: 'string', internalType: 'string' }],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'setSubscriptionId',
		inputs: [
			{
				name: 'subscriptionId_',
				type: 'uint64',
				internalType: 'uint64'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'source',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'subscriptionId',
		inputs: [],
		outputs: [{ name: '', type: 'uint64', internalType: 'uint64' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'supportsInterface',
		inputs: [{ name: 'interfaceId', type: 'bytes4', internalType: 'bytes4' }],
		outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'symbol',
		inputs: [],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'tokenIdOf',
		inputs: [{ name: 'requestId', type: 'bytes32', internalType: 'bytes32' }],
		outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'tokenURI',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
		outputs: [{ name: '', type: 'string', internalType: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'transferFrom',
		inputs: [
			{ name: 'from', type: 'address', internalType: 'address' },
			{ name: 'to', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'unlock',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'event',
		name: 'Approval',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'approved',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'tokenId',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'ApprovalForAll',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'operator',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'approved',
				type: 'bool',
				indexed: false,
				internalType: 'bool'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'EmergencyUnlock',
		inputs: [
			{
				name: 'unlocked',
				type: 'bool',
				indexed: false,
				internalType: 'bool'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'RequestFulfilled',
		inputs: [
			{
				name: 'id',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'RequestSent',
		inputs: [
			{
				name: 'id',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'RoleAdminChanged',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			},
			{
				name: 'previousAdminRole',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			},
			{
				name: 'newAdminRole',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'RoleGranted',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			},
			{
				name: 'account',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'RoleRevoked',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			},
			{
				name: 'account',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Transfer',
		inputs: [
			{
				name: 'from',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'tokenId',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Unlock',
		inputs: [
			{
				name: 'tokenId',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256'
			}
		],
		anonymous: false
	},
	{ type: 'error', name: 'AccessControlBadConfirmation', inputs: [] },
	{
		type: 'error',
		name: 'AccessControlUnauthorizedAccount',
		inputs: [
			{ name: 'account', type: 'address', internalType: 'address' },
			{ name: 'neededRole', type: 'bytes32', internalType: 'bytes32' }
		]
	},
	{
		type: 'error',
		name: 'ERC721IncorrectOwner',
		inputs: [
			{ name: 'sender', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' },
			{ name: 'owner', type: 'address', internalType: 'address' }
		]
	},
	{
		type: 'error',
		name: 'ERC721InsufficientApproval',
		inputs: [
			{ name: 'operator', type: 'address', internalType: 'address' },
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }
		]
	},
	{
		type: 'error',
		name: 'ERC721InvalidApprover',
		inputs: [{ name: 'approver', type: 'address', internalType: 'address' }]
	},
	{
		type: 'error',
		name: 'ERC721InvalidOperator',
		inputs: [{ name: 'operator', type: 'address', internalType: 'address' }]
	},
	{
		type: 'error',
		name: 'ERC721InvalidOwner',
		inputs: [{ name: 'owner', type: 'address', internalType: 'address' }]
	},
	{
		type: 'error',
		name: 'ERC721InvalidReceiver',
		inputs: [{ name: 'receiver', type: 'address', internalType: 'address' }]
	},
	{
		type: 'error',
		name: 'ERC721InvalidSender',
		inputs: [{ name: 'sender', type: 'address', internalType: 'address' }]
	},
	{
		type: 'error',
		name: 'ERC721NonexistentToken',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }]
	},
	{ type: 'error', name: 'EmptySource', inputs: [] },
	{ type: 'error', name: 'InvalidCallbackGasLimit', inputs: [] },
	{ type: 'error', name: 'InvalidDonId', inputs: [] },
	{
		type: 'error',
		name: 'InvalidPayload',
		inputs: [{ name: 'payload', type: 'string', internalType: 'string' }]
	},
	{
		type: 'error',
		name: 'InvalidRequestId',
		inputs: [{ name: 'requestId', type: 'bytes32', internalType: 'bytes32' }]
	},
	{ type: 'error', name: 'InvalidSentiment', inputs: [] },
	{ type: 'error', name: 'InvalidSource', inputs: [] },
	{ type: 'error', name: 'InvalidSubscriptionId', inputs: [] },
	{ type: 'error', name: 'InvalidTokenId', inputs: [] },
	{
		type: 'error',
		name: 'InvalidUnlockCallback',
		inputs: [{ name: 'err', type: 'bytes', internalType: 'bytes' }]
	},
	{
		type: 'error',
		name: 'InvalidUnlockRequest',
		inputs: [
			{ name: 'tokenId', type: 'uint256', internalType: 'uint256' },
			{ name: 'requestId', type: 'bytes32', internalType: 'bytes32' }
		]
	},
	{ type: 'error', name: 'NoInlineSecrets', inputs: [] },
	{ type: 'error', name: 'OnlyRouterCanFulfill', inputs: [] },
	{
		type: 'error',
		name: 'TokenAlreadyUnlocked',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }]
	},
	{
		type: 'error',
		name: 'TokenLocked',
		inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }]
	}
];

export default ASIDE0x01_ABI;
