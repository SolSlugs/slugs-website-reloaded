import React from "react";
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

import { commify, shortenAddress } from './Utilities';
import { HeaderDropdown } from './HeaderDropdown';

import Logo from './img/Logo-Small.png';

import MagicEden from './img/marketplace-icons/MagicEden.png';
import Tensor from './img/marketplace-icons/Tensor.png';

import Burned from './img/statistics-icons/Burned.png';
import Minted from './img/statistics-icons/Minted.png';
import Crown from './img/statistics-icons/Crown.png';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

export interface IHeaderProps {
    slugCount?: number;

    burnCount?: number;

    biggestBurner?: string;
}

export function Header(props: IHeaderProps) {
    const {
        slugCount,
        burnCount,
        biggestBurner,
    } = props;

    const {
        connected,
    } = useWallet();

    const header = React.useMemo(() => {
        return (
            <div className="grid grid-cols-9 mt-20 mb-10 2xl:mb-6">
                <div className="flex justify-end gap-x-6 text-3xl w-full col-start-5 col-span-5 items-end sm:col-start-3 sm:col-span-7 2xl:col-span-4 2xl:col-start-6 2xl:row-start-2 z-10 flex-wrap">
                    <Link to=''>
                        <span className="text-3xl">
                            Home
                        </span>
                    </Link>

                    <HeaderDropdown
                        label={'Rarity'}
                        links={[
                            {
                                name: 'Attribute Rarity',
                                link: '/attribute-rarity',
                            },
                            {
                                name: 'Slug Rarity',
                                link: '/slug-rarity',
                            },
                        ]}
                    />

                    <HeaderDropdown
                        label={'Tools'}
                        links={[
                            {
                                name: 'Designer',
                                link: '/designer',
                            },
                            {
                                name: 'Verify Holder',
                                link: '/verify',
                            },
                            {
                                name: 'Sol Incinerator',
                                link: 'https://www.sol-incinerator.com/#/',
                                external: true,
                            },
                            {
                                name: 'Slime Portfolio',
                                link: 'https://slime.cx',
                                external: true,
                            },
                            {
                                name: 'Marketing Pack',
                                link: '/marketing',
                            },
                        ]}
                    />

                    <Link to='/affiliates'>
                        <span className="text-3xl">
                            Affiliates
                        </span>
                    </Link>

                    <HeaderDropdown
                        label={'Misc'}
                        links={[
                            {
                                name: 'Burn Leaderboard',
                                link: '/burn-leaderboard',
                            },
                            {
                                name: 'Graveyard',
                                link: '/graveyard',
                            },
                            {
                                name: 'Gitbook',
                                link: 'https://solana-slugs.gitbook.io/solana-slugs/',
                                external: true,
                            },
                            {
                                name: 'Play Slug Flip',
                                link: 'https://degencoinflip.com/solslugs',
                                external: true,
                            },
                            {
                                name: 'License',
                                link: '/license',
                            },
                        ]}
                    />
                </div>

                <div className="flex flex-col justify-center items-center border-2 border-slugGreen my-4 p-5 relative w-full col-span-9">
                    <a href="/">
                        <img
                            src={Logo}
                            className="absolute top-0 left-0 -mt-16 -ml-2 w-44 2xl:w-56 2xl:-mt-20 2xl:-ml-3"
                            alt='Slug Logo'
                        />
                    </a>

                    <div className="flex flex-col w-full gap-y-4 2xl:flex-row">
                        <div className="2xl:basis-1/5">
                        </div>

                        <div className="flex flex-col justify-center items-center 2xl:basis-2/5">
                            <span className="text-slugGreen text-center text-5xl w-40 mt-14 sm:mt-0 md:w-64 lg:w-auto 2xl:text-6xl">
                                It's SLUGS on SOLANA!
                            </span>

                            <span className="text-2xl mt-8 md:mt-0 text-center w-3/5 2xl:text-3xl 2xl:w-full">
                                {`Solana Slugs is a deflationary collection of ${slugCount || 5016} slugs on the Solana blockchain`}
                            </span>
                        </div>

                        <div className="flex flex-row flex-wrap justify-around items-center gap-x-4 2xl:basis-3/5">
                            <div className="flex flex-col justify-center items-center 2xl:col-start-7 2xl:col-end-9">
                                <img
                                    className="w-16"
                                    src={Minted}
                                    alt='Minted Count'
                                />

                                <span className="text-2l uppercase text-center">
                                    Initially Minted
                                </span>

                                <span className="text-2l">
                                    10,000
                                </span>
                            </div>

                            <div className="flex flex-col justify-center items-center 2xl:col-start-9 2xl:col-end-11">
                                <img
                                    className="w-16"
                                    src={Burned}
                                    alt='Burned Count'
                                />

                                <span className="text-2l uppercase">
                                    Total Burned
                                </span>

                                <span className="text-2l">
                                    {burnCount ? commify(burnCount) : 'Loading...'}
                                </span>
                            </div>

                            <div className="flex flex-col justify-center items-center 2xl:col-start-11 2xl:col-end-13">
                                <img
                                    className="w-16"
                                    src={Crown}
                                    alt='Top Burner'
                                />

                                <span className="text-2l uppercase">
                                    Top Burner
                                </span>

                                <span className="text-2l">
                                    {biggestBurner ? shortenAddress(biggestBurner) : 'Loading...'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center sm:justify-start 2xl:justify-center col-span-9 row-start-4 md:row-start-3 mt-4 md:mt-0 sm:col-span-2 2xl:col-start-2 2xl:row-start-2 2xl:col-span-2 2xl:items-end z-10">
                    <WalletMultiButton
                        className="!border-solid !border-2 !border-slugGreen !w-52 !h-12 !font-sans !text-2xl !p-1 !font-normal text-center justify-center items-center"
                        startIcon={undefined}
                        endIcon={undefined}
                    >
                        <div className={`rounded-full w-3 h-3 mx-1 ${connected ? 'bg-green-500' : 'bg-red-500'}`}>
                        </div>
                        <span className="mx-1 text-ellipsis whitespace-nowrap">
                            {connected ? 'Wallet Connected' : 'Connect Wallet'}
                        </span>
                    </WalletMultiButton>
                </div>

                <div className="flex flex-col row-start-3 col-start-3 md:row-start-3 justify-center items-center col-span-5 gap-y-3 2xl:col-start-3 2xl:col-span-4 2xl:row-span-2 2xl:row-start-1 2xl:justify-end">
                    <span className="text-2xl text-center md:w-48 lg:w-auto 2xl:text-3xl">
                        Buy Slugs At These Marketplaces!
                    </span>

                    <div className="flex flex-row justify-center items-center col-span-5 gap-x-3">
                        <a href="https://magiceden.io/marketplace/sol_slugs">
                            <img
                                src={MagicEden}
                                className="w-8 2xl:w-9"
                                alt='MagicEden'
                            />
                        </a>

                        <a href="https://www.tensor.trade/trade/sol_slugs">
                            <img
                                src={Tensor}
                                className="w-8 2xl:w-9 rounded-full"
                                alt='Tensor'
                            />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center row-start-5 col-start-3 col-span-5 sm:col-start-8 sm-col-span-2 sm:row-start-4 md:row-start-3 mt-4 md:mt-0 flex-row sm:justify-end items-start gap-x-4 2xl:col-start-9 2xl:row-start-1">
                    <a href="https://twitter.com/SolSlugsNFT">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            size="1x"
                            className="text-4xl"
                        />
                    </a>

                    <a href="https://discord.gg/zqdrguPfUa">
                        <FontAwesomeIcon
                            icon={faDiscord}
                            className="text-4xl"
                        />
                    </a>
                </div>
            </div>
        );
    }, [
        slugCount,
        burnCount,
        connected,
        biggestBurner,
    ]);

    return header;
}
