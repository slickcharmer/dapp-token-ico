/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ITManTokenCrowdsale,
  ITManTokenCrowdsaleInterface,
} from "../ITManTokenCrowdsale";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenWallet",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200181638038062001816833981810160405281019062000037919062000316565b8084848460016000819055506000831162000089576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000809062000462565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f39062000484565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200016f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001669062000440565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000265906200041e565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050506200069b565b600081519050620002cb8162000633565b92915050565b600081519050620002e2816200064d565b92915050565b600081519050620002f98162000667565b92915050565b600081519050620003108162000681565b92915050565b600080600080608085870312156200032d57600080fd5b60006200033d87828801620002ff565b94505060206200035087828801620002d1565b93505060406200036387828801620002e8565b92505060606200037687828801620002ba565b91505092959194509250565b600062000391603483620004a6565b91506200039e826200051d565b604082019050919050565b6000620003b8602483620004a6565b9150620003c5826200056c565b604082019050919050565b6000620003df601483620004a6565b9150620003ec82620005bb565b602082019050919050565b600062000406602583620004a6565b91506200041382620005e4565b604082019050919050565b60006020820190508181036000830152620004398162000382565b9050919050565b600060208201905081810360008301526200045b81620003a9565b9050919050565b600060208201905081810360008301526200047d81620003d0565b9050919050565b600060208201905081810360008301526200049f81620003f7565b9050919050565b600082825260208201905092915050565b6000620004c482620004f3565b9050919050565b6000620004d882620004f3565b9050919050565b6000620004ec82620004b7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f416c6c6f77616e636543726f776473616c653a20746f6b656e2077616c6c657460008201527f20697320746865207a65726f2061646472657373000000000000000000000000602082015250565b7f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a20726174652069732030000000000000000000000000600082015250565b7f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6200063e81620004b7565b81146200064a57600080fd5b50565b6200065881620004cb565b81146200066457600080fd5b50565b6200067281620004df565b81146200067e57600080fd5b50565b6200068c8162000513565b81146200069857600080fd5b50565b61116b80620006ab6000396000f3fe6080604052600436106100745760003560e01c8063bf5839031161004e578063bf58390314610111578063bff99c6c1461013c578063ec8ac4d814610167578063fc0c546a146101835761008b565b80632c4e722e146100905780634042b66f146100bb578063521eb273146100e65761008b565b3661008b576100896100846101ae565b6101b6565b005b600080fd5b34801561009c57600080fd5b506100a56102d5565b6040516100b29190610d71565b60405180910390f35b3480156100c757600080fd5b506100d06102df565b6040516100dd9190610d71565b60405180910390f35b3480156100f257600080fd5b506100fb6102e9565b6040516101089190610bf9565b60405180910390f35b34801561011d57600080fd5b50610126610313565b6040516101339190610d71565b60405180910390f35b34801561014857600080fd5b50610151610488565b60405161015e9190610bde565b60405180910390f35b610181600480360381019061017c91906109d4565b6101b6565b005b34801561018f57600080fd5b506101986104b2565b6040516101a59190610c74565b60405180910390f35b600033905090565b600260005414156101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f390610d31565b60405180910390fd5b6002600081905550600034905061021382826104dc565b600061021e82610594565b90508160045461022e9190610de7565b60048190555061023e83826105ab565b8273ffffffffffffffffffffffffffffffffffffffff1661025d6101ae565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b84846040516102a4929190610d8c565b60405180910390a36102b683836105b9565b6102be6105bd565b6102c88383610628565b5050600160008190555050565b6000600354905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006104836103206104b2565b73ffffffffffffffffffffffffffffffffffffffff166370a08231600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161037a9190610bde565b60206040518083038186803b15801561039257600080fd5b505afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca9190610a26565b6103d26104b2565b73ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b815260040161042e929190610c14565b60206040518083038186803b15801561044657600080fd5b505afa15801561045a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047e9190610a26565b61062c565b905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561054c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054390610cd1565b60405180910390fd5b6000811415610590576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058790610d51565b60405180910390fd5b5050565b6000600354826105a49190610e3d565b9050919050565b6105b58282610645565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610625573d6000803e3d6000fd5b50565b5050565b600081831061063b578161063d565b825b905092915050565b61069b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683836106756104b2565b73ffffffffffffffffffffffffffffffffffffffff1661069f909392919063ffffffff16565b5050565b610722846323b872dd60e01b8585856040516024016106c093929190610c3d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610728565b50505050565b600061078a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107ef9092919063ffffffff16565b90506000815111156107ea57808060200190518101906107aa91906109fd565b6107e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e090610d11565b60405180910390fd5b5b505050565b60606107fe8484600085610807565b90509392505050565b60608247101561084c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084390610cb1565b60405180910390fd5b6108558561091b565b610894576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088b90610cf1565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108bd9190610bc7565b60006040518083038185875af1925050503d80600081146108fa576040519150601f19603f3d011682016040523d82523d6000602084013e6108ff565b606091505b509150915061090f82828661092e565b92505050949350505050565b600080823b905060008111915050919050565b6060831561093e5782905061098e565b6000835111156109515782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109859190610c8f565b60405180910390fd5b9392505050565b6000813590506109a4816110f0565b92915050565b6000815190506109b981611107565b92915050565b6000815190506109ce8161111e565b92915050565b6000602082840312156109e657600080fd5b60006109f484828501610995565b91505092915050565b600060208284031215610a0f57600080fd5b6000610a1d848285016109aa565b91505092915050565b600060208284031215610a3857600080fd5b6000610a46848285016109bf565b91505092915050565b610a5881610ea9565b82525050565b610a6781610e97565b82525050565b6000610a7882610db5565b610a828185610dcb565b9350610a92818560208601610f15565b80840191505092915050565b610aa781610ef1565b82525050565b6000610ab882610dc0565b610ac28185610dd6565b9350610ad2818560208601610f15565b610adb81610f77565b840191505092915050565b6000610af3602683610dd6565b9150610afe82610f88565b604082019050919050565b6000610b16602a83610dd6565b9150610b2182610fd7565b604082019050919050565b6000610b39601d83610dd6565b9150610b4482611026565b602082019050919050565b6000610b5c602a83610dd6565b9150610b678261104f565b604082019050919050565b6000610b7f601f83610dd6565b9150610b8a8261109e565b602082019050919050565b6000610ba2601983610dd6565b9150610bad826110c7565b602082019050919050565b610bc181610ee7565b82525050565b6000610bd38284610a6d565b915081905092915050565b6000602082019050610bf36000830184610a5e565b92915050565b6000602082019050610c0e6000830184610a4f565b92915050565b6000604082019050610c296000830185610a5e565b610c366020830184610a5e565b9392505050565b6000606082019050610c526000830186610a5e565b610c5f6020830185610a5e565b610c6c6040830184610bb8565b949350505050565b6000602082019050610c896000830184610a9e565b92915050565b60006020820190508181036000830152610ca98184610aad565b905092915050565b60006020820190508181036000830152610cca81610ae6565b9050919050565b60006020820190508181036000830152610cea81610b09565b9050919050565b60006020820190508181036000830152610d0a81610b2c565b9050919050565b60006020820190508181036000830152610d2a81610b4f565b9050919050565b60006020820190508181036000830152610d4a81610b72565b9050919050565b60006020820190508181036000830152610d6a81610b95565b9050919050565b6000602082019050610d866000830184610bb8565b92915050565b6000604082019050610da16000830185610bb8565b610dae6020830184610bb8565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610df282610ee7565b9150610dfd83610ee7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e3257610e31610f48565b5b828201905092915050565b6000610e4882610ee7565b9150610e5383610ee7565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e8c57610e8b610f48565b5b828202905092915050565b6000610ea282610ec7565b9050919050565b6000610eb482610ec7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610efc82610f03565b9050919050565b6000610f0e82610ec7565b9050919050565b60005b83811015610f33578082015181840152602081019050610f18565b83811115610f42576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a2062656e656669636961727920697320746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f43726f776473616c653a20776569416d6f756e74206973203000000000000000600082015250565b6110f981610e97565b811461110457600080fd5b50565b61111081610ebb565b811461111b57600080fd5b50565b61112781610ee7565b811461113257600080fd5b5056fea264697066735822122097c2997a3d309a64090e5c837af7c765c1539cc04bc616948e54b18f709c8af664736f6c63430008040033";

export class ITManTokenCrowdsale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rate: BigNumberish,
    _wallet: string,
    _token: string,
    _tokenWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ITManTokenCrowdsale> {
    return super.deploy(
      _rate,
      _wallet,
      _token,
      _tokenWallet,
      overrides || {}
    ) as Promise<ITManTokenCrowdsale>;
  }
  getDeployTransaction(
    _rate: BigNumberish,
    _wallet: string,
    _token: string,
    _tokenWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rate,
      _wallet,
      _token,
      _tokenWallet,
      overrides || {}
    );
  }
  attach(address: string): ITManTokenCrowdsale {
    return super.attach(address) as ITManTokenCrowdsale;
  }
  connect(signer: Signer): ITManTokenCrowdsale__factory {
    return super.connect(signer) as ITManTokenCrowdsale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ITManTokenCrowdsaleInterface {
    return new utils.Interface(_abi) as ITManTokenCrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITManTokenCrowdsale {
    return new Contract(address, _abi, signerOrProvider) as ITManTokenCrowdsale;
  }
}