/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Crowdsale, CrowdsaleInterface } from "../../contracts/Crowdsale";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
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
  "0x60806040523480156200001157600080fd5b50604051620013a3380380620013a3833981810160405281019062000037919062000242565b60016000819055506000831162000085576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007c906200032f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ef9062000351565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200016b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000162906200030d565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620004ff565b6000815190506200020e81620004b1565b92915050565b6000815190506200022581620004cb565b92915050565b6000815190506200023c81620004e5565b92915050565b6000806000606084860312156200025857600080fd5b600062000268868287016200022b565b93505060206200027b86828701620001fd565b92505060406200028e8682870162000214565b9150509250925092565b6000620002a760248362000373565b9150620002b482620003ea565b604082019050919050565b6000620002ce60148362000373565b9150620002db8262000439565b602082019050919050565b6000620002f560258362000373565b9150620003028262000462565b604082019050919050565b60006020820190508181036000830152620003288162000298565b9050919050565b600060208201905081810360008301526200034a81620002bf565b9050919050565b600060208201905081810360008301526200036c81620002e6565b9050919050565b600082825260208201905092915050565b60006200039182620003c0565b9050919050565b6000620003a582620003c0565b9050919050565b6000620003b98262000384565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a20726174652069732030000000000000000000000000600082015250565b7f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b620004bc8162000398565b8114620004c857600080fd5b50565b620004d681620003ac565b8114620004e257600080fd5b50565b620004f081620003e0565b8114620004fc57600080fd5b50565b610e94806200050f6000396000f3fe60806040526004361061004e5760003560e01c80632c4e722e1461006a5780634042b66f14610095578063521eb273146100c0578063ec8ac4d8146100eb578063fc0c546a1461010757610065565b366100655761006361005e610132565b61013a565b005b600080fd5b34801561007657600080fd5b5061007f610259565b60405161008c9190610ab1565b60405180910390f35b3480156100a157600080fd5b506100aa610263565b6040516100b79190610ab1565b60405180910390f35b3480156100cc57600080fd5b506100d561026d565b6040516100e29190610970565b60405180910390f35b6101056004803603810190610100919061078f565b61013a565b005b34801561011357600080fd5b5061011c610297565b60405161012991906109b4565b60405180910390f35b600033905090565b60026000541415610180576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017790610a71565b60405180910390fd5b6002600081905550600034905061019782826102c1565b60006101a282610379565b9050816004546101b29190610b27565b6004819055506101c28382610390565b8273ffffffffffffffffffffffffffffffffffffffff166101e1610132565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b8484604051610228929190610acc565b60405180910390a361023a838361039e565b6102426103a2565b61024c838361040d565b5050600160008190555050565b6000600354905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032890610a11565b60405180910390fd5b6000811415610375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036c90610a91565b60405180910390fd5b5050565b6000600354826103899190610b7d565b9050919050565b61039a8282610411565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561040a573d6000803e3d6000fd5b50565b5050565b61045e8282600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166104629092919063ffffffff16565b5050565b6104e38363a9059cbb60e01b848460405160240161048192919061098b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104e8565b505050565b600061054a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105af9092919063ffffffff16565b90506000815111156105aa578080602001905181019061056a91906107b8565b6105a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a090610a51565b60405180910390fd5b5b505050565b60606105be84846000856105c7565b90509392505050565b60608247101561060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906109f1565b60405180910390fd5b610615856106db565b610654576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064b90610a31565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161067d9190610959565b60006040518083038185875af1925050503d80600081146106ba576040519150601f19603f3d011682016040523d82523d6000602084013e6106bf565b606091505b50915091506106cf8282866106fe565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561070e5782905061075e565b6000835111156107215782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075591906109cf565b60405180910390fd5b9392505050565b60008135905061077481610e30565b92915050565b60008151905061078981610e47565b92915050565b6000602082840312156107a157600080fd5b60006107af84828501610765565b91505092915050565b6000602082840312156107ca57600080fd5b60006107d88482850161077a565b91505092915050565b6107ea81610be9565b82525050565b6107f981610bd7565b82525050565b600061080a82610af5565b6108148185610b0b565b9350610824818560208601610c55565b80840191505092915050565b61083981610c31565b82525050565b600061084a82610b00565b6108548185610b16565b9350610864818560208601610c55565b61086d81610cb7565b840191505092915050565b6000610885602683610b16565b915061089082610cc8565b604082019050919050565b60006108a8602a83610b16565b91506108b382610d17565b604082019050919050565b60006108cb601d83610b16565b91506108d682610d66565b602082019050919050565b60006108ee602a83610b16565b91506108f982610d8f565b604082019050919050565b6000610911601f83610b16565b915061091c82610dde565b602082019050919050565b6000610934601983610b16565b915061093f82610e07565b602082019050919050565b61095381610c27565b82525050565b600061096582846107ff565b915081905092915050565b600060208201905061098560008301846107e1565b92915050565b60006040820190506109a060008301856107f0565b6109ad602083018461094a565b9392505050565b60006020820190506109c96000830184610830565b92915050565b600060208201905081810360008301526109e9818461083f565b905092915050565b60006020820190508181036000830152610a0a81610878565b9050919050565b60006020820190508181036000830152610a2a8161089b565b9050919050565b60006020820190508181036000830152610a4a816108be565b9050919050565b60006020820190508181036000830152610a6a816108e1565b9050919050565b60006020820190508181036000830152610a8a81610904565b9050919050565b60006020820190508181036000830152610aaa81610927565b9050919050565b6000602082019050610ac6600083018461094a565b92915050565b6000604082019050610ae1600083018561094a565b610aee602083018461094a565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610b3282610c27565b9150610b3d83610c27565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b7257610b71610c88565b5b828201905092915050565b6000610b8882610c27565b9150610b9383610c27565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610bcc57610bcb610c88565b5b828202905092915050565b6000610be282610c07565b9050919050565b6000610bf482610c07565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c3c82610c43565b9050919050565b6000610c4e82610c07565b9050919050565b60005b83811015610c73578082015181840152602081019050610c58565b83811115610c82576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a2062656e656669636961727920697320746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f43726f776473616c653a20776569416d6f756e74206973203000000000000000600082015250565b610e3981610bd7565b8114610e4457600080fd5b50565b610e5081610bfb565b8114610e5b57600080fd5b5056fea2646970667358221220273a72a94c54149e4217c1de326d2334daa846aa680e5577f96976c488258af264736f6c63430008040033";

type CrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Crowdsale__factory extends ContractFactory {
  constructor(...args: CrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Crowdsale> {
    return super.deploy(
      rate,
      wallet,
      token,
      overrides || {}
    ) as Promise<Crowdsale>;
  }
  override getDeployTransaction(
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(rate, wallet, token, overrides || {});
  }
  override attach(address: string): Crowdsale {
    return super.attach(address) as Crowdsale;
  }
  override connect(signer: Signer): Crowdsale__factory {
    return super.connect(signer) as Crowdsale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdsaleInterface {
    return new utils.Interface(_abi) as CrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Crowdsale {
    return new Contract(address, _abi, signerOrProvider) as Crowdsale;
  }
}
