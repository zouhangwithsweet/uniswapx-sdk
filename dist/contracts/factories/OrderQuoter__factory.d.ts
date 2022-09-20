import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OrderQuoter, OrderQuoterInterface } from "../OrderQuoter";
declare type OrderQuoterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OrderQuoter__factory extends ContractFactory {
    constructor(...args: OrderQuoterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OrderQuoter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OrderQuoter;
    connect(signer: Signer): OrderQuoter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610955806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806389930d271461003b578063b030bac314610050575b600080fd5b61004e610049366004610426565b610079565b005b61006361005e366004610581565b6100bf565b604051610070919061060b565b60405180910390f35b60008260008151811061008e5761008e6106bd565b60200260200101516040516020016100a6919061060b565b6040516020818303038152906040529050805181602001fd5b6100c76101b7565b60408381015181518083018352858152602080820186905283519081018452600081529251638bcaadbd60e01b81526001600160a01b0390921692638bcaadbd9261011792913091600401610719565b600060405180830381600087803b15801561013157600080fd5b505af1925050508015610142575060015b610183573d808015610170576040519150601f19603f3d011682016040523d82523d6000602084013e610175565b606091505b5061017f81610189565b9150505b92915050565b6101916101b7565b60c0825110156101a357815182602001fd5b818060200190518101906101839190610859565b6040805160c0810182526000606082018181526080830182905260a08301829052825282518084019093528083526020838101919091529091908201908152602001606081525090565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561023a5761023a610201565b60405290565b6040516060810167ffffffffffffffff8111828210171561023a5761023a610201565b604051601f8201601f1916810167ffffffffffffffff8111828210171561028c5761028c610201565b604052919050565b600067ffffffffffffffff8211156102ae576102ae610201565b5060051b60200190565b6001600160a01b03811681146102cd57600080fd5b50565b6000604082840312156102e257600080fd5b6102ea610217565b905081356102f7816102b8565b808252506020820135602082015292915050565b600082601f83011261031c57600080fd5b8135602061033161032c83610294565b610263565b8281526060928302850182019282820191908785111561035057600080fd5b8387015b858110156103a95781818a03121561036c5760008081fd5b610374610240565b813561037f816102b8565b81528186013586820152604080830135610398816102b8565b908201528452928401928101610354565b5090979650505050505050565b600082601f8301126103c757600080fd5b813567ffffffffffffffff8111156103e1576103e1610201565b6103f4601f8201601f1916602001610263565b81815284602083860101111561040957600080fd5b816020850160208301376000918101602001919091529392505050565b600080604080848603121561043a57600080fd5b833567ffffffffffffffff8082111561045257600080fd5b818601915086601f83011261046657600080fd5b8135602061047661032c83610294565b82815260059290921b8401810191818101908a84111561049557600080fd5b8286015b84811015610552578035868111156104b057600080fd5b8701808d03601f190160c08112156104c85760008081fd5b6104d0610240565b6060808312156104e05760008081fd5b6104e8610240565b9250878401356104f7816102b8565b8352838c0135888401528301358b8301528181526105188f608085016102d0565b8782015260c08301359150888211156105315760008081fd5b61053f8f888486010161030b565b818c015285525050918301918301610499565b509750508701359350508083111561056957600080fd5b5050610577858286016103b6565b9150509250929050565b600080828403608081121561059557600080fd5b833567ffffffffffffffff8111156105ac57600080fd5b6105b8868287016103b6565b9350506060601f19820112156105cd57600080fd5b506105d6610240565b602084013560ff811681146105ea57600080fd5b81526040848101356020830152606090940135938101939093525092909150565b6020808252825180516001600160a01b039081168484015281830151604080860191909152918201516060808601919091528584015180518316608087015284015160a08601528286015160c080870152805160e0870181905260009594918501938693909290916101008901905b808610156106af578651805186168352888101518984015283015185168383015295870195600195909501949083019061067a565b509998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156106f9576020818501810151868301820152016106dd565b506000602082860101526020601f19601f83011685010191505092915050565b60608152600084516080606084015261073560e08401826106d3565b9050602086015160ff8151166080850152602081015160a0850152604081015160c08501525060018060a01b0385166020840152828103604084015261077b81856106d3565b9695505050505050565b60006040828403121561079757600080fd5b61079f610217565b905081516107ac816102b8565b808252506020820151602082015292915050565b600082601f8301126107d157600080fd5b815160206107e161032c83610294565b8281526060928302850182019282820191908785111561080057600080fd5b8387015b858110156103a95781818a03121561081c5760008081fd5b610824610240565b815161082f816102b8565b81528186015186820152604080830151610848816102b8565b908201528452928401928101610804565b60006020828403121561086b57600080fd5b815167ffffffffffffffff8082111561088357600080fd5b9083019081850360c081121561089857600080fd5b6108a0610240565b60608212156108ae57600080fd5b6108b6610240565b915083516108c3816102b8565b8083525060208401516020830152604084015160408301528181526108eb8760608601610785565b602082015260a084015191508282111561090457600080fd5b610910878386016107c0565b6040820152969550505050505056fea2646970667358221220ff9e542de14d43a693a13064b7d6ddb028a4a1fa585b49b01c69e98897b6627b64736f6c63430008100033";
    static readonly abi: ({
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            components: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: ({
            components: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): OrderQuoterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OrderQuoter;
}
export {};