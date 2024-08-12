import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import UserCard from "../components/UserCard";

const Community = () => {
  const locationHash = useLocation().hash;

  useEffect(() => {
    if (locationHash) {
      setTimeout(function () {
        window.location.hash = "";
        window.location.hash = locationHash;
      }, 300);
    }
  }, [locationHash]);

  return (
    <React.Fragment>
      <div className="page-left-menu">
        <div className="page-title">Community</div>
        <div className="page-nav-content">
          <a href="#about-us">
            <div
              className={
                locationHash.includes("about-us")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              About Us
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#eco-system">
            <div
              className={
                locationHash.includes("eco-system")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Eco-system
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#governance">
            <div
              className={
                locationHash.includes("governance")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Open Governance
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#representatives">
            <div
              className={
                locationHash.includes("representatives")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Representatives
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#resources">
            <div
              className={
                locationHash.includes("resources")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Community Resources
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#download">
            <div
              className={
                locationHash.includes("download")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Download
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases">
            <div
              className={
                locationHash.includes("use-cases")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Use Cases
              <div className="page-nav-circle"></div>
              <div className="page-nav-line usecase-line"></div>
            </div>
          </a>
          <a href="#use-cases-diamonds">
            <div className="page-nav-inside">
              Diamonds and presious stones
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-gaming">
            <div className="page-nav-inside">
              Gaming, Virtual Reality, Metaverse
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-crypto">
            <div className="page-nav-inside">
              Cryptocurrency wallets
              <div className="inside-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="about-us">
          <div className="page-content-inner">
            <div className="page-content-title">About Us</div>
            <div className="page-content-text">
                "The Ledger of Things" is a revolutionary <Link to="https://github.com/3dpass">open source</Link> Layer 1 blockchain platform for the tokenization of objects.
                Current list of the object categories is presented as follows:
              </div>
            <ul className="page-content-text">
              <li>3D objects</li>
              <li>2D drawings</li>
              <li>Music</li>
              <li>Biometrics</li>
              <li>Radio signals</li>
              <li>Movements</li>
              <li>Texts</li>
            </ul>
              <div className="page-content-text">
                <Link to="/proof-of-scan">Proof of Scan</Link> is a decentralized protocol, which is based on recognition technology. Every object, transformed by 3DPass, obtains its own unique and sustainable identity
                called <Link to="/features#3drecognition-hash-id">HASH ID</Link> the object could be recognized by. 
                This will prevent the copying of digital assets and thus open a door for the entire blockchain space to potentially trillions in deals all over the globe.
              </div>
              <div className="page-content-text">
                <Link to="/grid2d">Grid2d</Link> is the first 3D shape recognition algorithm, <Link to="https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">suggested</Link> by Michael Co in 2020, which is
                implemented now as <Link to="/pass3d">pass3d</Link> recognition toolkit. Grid2d is utilized as the hash function for
                the <Link to="/proof-of-scan">Proof of Scan</Link> protocol.
              </div>
              <div className="page-content-text">
                <Link to="/proof-of-scan#3dprc-2">3DPRC-2</Link> (3Dpass Request for Comments) is a standard p2p protocol for the tokenization of the User objects operating within “The Ledger of Things”,
                by which the most useful aspect of the "Proof of Scan" consensus is getting uncovered. 3DPRC-2 provides decentralized <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">PoScan API</Link> available for customers. 
              </div>
              <div className="page-content-text">
                The scope of potential 3Dpass applications goes way beyond 3D object recognition and not limited to.
                Being naturally organized and still cultivating this community driven spirit, 3Dpass is here to encourage developers from all aroud the globe to upgrade the <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> open source toolkit with new fascinating recognition algorithms and make it even more useful for human civilization.
                Learn more about the <Link to="http://localhost:3000/proof-of-scan#object">algorithm requirements</Link>.
              </div>
              <div className="page-content-text">
                <Link to="/coin">3DPass Coin</Link> (P3D) is a native utility token, operating within The Ledger of Things, 
                which serves as an incentive factor for the community members maintaining its infrastructure. 
                Such aspects as: Storage fee, Gas fee, The object authentication fee, Transaction fee, 
                The validator collaterals, Penalties -  are all being counted in P3D.
            </div>
            <video
              src="/images/3DPass_concept_v3.mp4"
              className="page-video"
              controls
            ></video>
          </div>
        </div>
        <div className="page-content-block" id="eco-system">
          <div className="page-content-inner">
            <div className="page-content-title">Eco-system</div>
            <div className="page-content-text">
              The Ledger of Things eco-system provides a revolutionaly toolkit for the tokenization of objects and its 
              transformation into Real World Assets (RWA) presented as either <Link to="#3dprc-2-assets">share-tokens</Link> {" "}
              or <Link to="#3dprc-2-assets">non-fungible</Link> assets. 
              Once transformed, there is a viriety of options available for the asset owner on how to proceed 
              with their plan, including but not limited to: transfers, trading, ICO, dApp creation/integration, smart-contracts,
              cross-chain teleport, etc. 
              </div>
              <ul className="page-content-text">
                <li>
              <Link to="https://github.com/3Dpass/3DP" className="link-title">Node</Link>{" "}
              - The implemetation of The Ledger of Things Node
                </li>
                <li>
                <Link to="/features#3dprc-2" className="link-title">3DPRC-2</Link>{" "}
                - revolutionary tokinization standard proposed by 3Dpass
                </li>
                <li>
                <Link to="https://swap.3dpscan.io" className="link-title">DEX</Link>{" "}
                - embedded DEX module to trade share-tokens
                </li>
                <li>
                 Marketplace - to swap non-fungible backed assets
                </li>
                <li>
                  dApps - <Link to="/features#smart-contracts">smart-contracts</Link> module and runtime development
                </li>
                <li>
                 Cross-chain bridge - to teleport the assets over to the external blockchains
                </li>
                <li>
                 Stablecoins - on-chain or bridged (over the cross-chain bridge)
                </li>
                <li>
                 Launchpads - to welcome start-ups into The Ledger of Things eco-system
                </li>
              </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/lot_eco-system_moon_1.png"
              alt="img"
            />
            <div className="page-content-text">
              Follow our progress on <Link to="/coin#2024">Roadmap</Link> and join the <Link to="/grants">Contribution Grant Program</Link> to speed it up. 
            </div>
          </div>
        </div>
        <div className="page-content-block" id="governance">
          <div className="page-content-inner">
            <Link className="message-text" to="/governance"><div className="page-content-title">Open Governance</div></Link>
            <div className="page-content-text">
              3DPass leverages a sophisticated self governance mechanism, which
              allows for it to evolve gracefully overtime at the ultimate behest of
              its assembled stakeholders. The stated goal is to ensure that the
              majority of the stake can always command the network.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3dpass_society.png"
              alt="img"
            />
            <div className="page-content-text">
              3DPass decentralised governance system is comprised of three main
              components:
            </div>
            <ol className="page-content-text">
              <li>
                <Link to="/governance#council">Council</Link> - An approval-voted, elected executive "government" to
                manage parameters, admin and spending proposals.
              </li>
              <li>
              <Link to="/governance#technical">Technical Committee</Link> - A technocratic committee to manage the
                {" "} <Link to="/forkless-upgrade">forkless online upgrade</Link>{" "}
                timelines.
              </li>
              <li>
              <Link to="/governance#democracy">Referenda</Link> - A general voting system for everything else which
                rewarded long-term stakeholders with increased influence.
              </li>
            </ol>
            <div className="page-content-text">
              The network brings together various novel mechanisms, including an
              amorphous state-transition function stored on-chain and defined in
              a platform-neutral intermediate language (i.e. <Link to="/forkless-upgrade#wasm">WebAssembly</Link>) and
              several on-chain voting mechanisms such as referenda with adaptive
              super-majority thresholds and batch approval voting. All changes
              to the protocol must be agreed upon by stake-weighted referenda.
            </div>
            <div className="page-content-text">
              There is a <Link to="/governance#treasury">Treasury</Link> pot controled by the Council, which adds to
              transparency, especially, when it comes to the budget spendings
              and grants. The funds held in the Treasury can be spent by making
              a spending proposal that, if approved by the Council, will enter a
              waiting period before distribution.
            </div>
            <div className="page-content-text">
              Follow the <Link to="/governance">detailed description</Link> of the Open Governance to learn about full process.  
            </div>
          </div>
        </div>
        <div className="page-content-block" id="representatives">
          <div className="page-content-inner">
            <div className="page-content-title">Representatives</div>
            <div className="page-content-text">
              Representatives are the most akwnowledged community members willing to represent 3Dpass all around the globe. 
              There is no employment practice taking place around 3Dpass, but the contribution only. Explore the {" "} 
              <Link to="/grants">Contribution Grant program</Link> to dive into detail.
            </div>
            <UserCard
              name="PaulS"
              title="Founder"
              description="16+ years experience in the field"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Michael Co"
              title="CORE developer and co-founder"
              description="10+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Mikhail"
              title="Front-end developer and co-founder"
              description="10+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard name="L3odr0id" 
              title="Mobile Developer" 
              description="3+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Andrew Coleman"
              title="Partner relations"
              description="USA"
              image="/images/andrew_coleman.png"
            />
            <UserCard
              name="A Mo"
              title="Community Representative"
              description="Europe, Discord: A_Mo#2060"
              image="/images/anon.jpg"
            />
             <UserCard
              name="breukmeister"
              title="Community Representative"
              description="Europe, Discord: breukmeister"
              image="/images/anon.jpg"
            />
          </div>
        </div>
        <div className="page-content-block" id="resources">
          <div className="page-content-inner full-m-w">
            <div className="page-content-title">Community Resources</div>
            <div className="page-content-text">
              <strong><i>Disclaimer!</i></strong> All the resources below are managed by community 
              members and there might be many others untracked. The resources represent independent 
              groups and channels about 3Dpass by its creators. Due to decentralized nature of the 
              project there is <strong>NO PRIMARY CHANNEL</strong> taking place around 
              the system, and the most reliable source of data is the blockchain data base containing 
              all transaction history including the <Link to="#governance">Open Governance</Link>{" "}
              and <Link to="/governance#democracy">Referendum</Link> vote. Be careful choosing which 
              source to trust and make sure the information is referenced to either the blockchain db 
              or the source codes for proof! 
            </div>
            <div className="url-block">
              <div className="url-block-title">Forums</div>
              <ul className="page-content-text">
                <Link to="https://bitcointalk.org/index.php?topic=5382009.0">
                  <li>Bitcointalk</li>
                </Link>
                <Link to="https://3dpass.medium.com/">
                  <li>Medium</li>
                </Link>
                <Link to="https://www.reddit.com/r/3DPass_live">
                  <li>Reddit</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Network</div>
              <ul className="page-content-text">
                <Link to="https://wallet.3dpass.org/">
                  <li>3Dpass Web3 wallet</li>
                </Link>
                <Link to="/mobile-wallet">
                  <li>Mobile wallet</li>
                </Link>
                <Link to="https://3dpscan.io">
                  <li>Web Block Explorer 1</li>
                </Link>
                <Link to="http://explorer.3dpassmining.info">
                  <li>Web Block Explorer 2</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://telemetry.3dpscan.io">
                  <li>Telemetry server</li>
                </Link>
                <Link to="https://explorer-api.3dpscan.io/graphql/">
                  <li>Block Explorer API graphql</li>
                </Link>
                <Link to="https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.3dpscan.io">
                  <li>Polkadot js wallet</li>
                </Link>
                <Link to="https://novawallet.io">
                  <li>Nova wallet</li>
                </Link>
                <Link to="https://www.3dpassmining.info/">
                  <li>Mining dash board</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Market cap</div>
              <ul className="page-content-text">
                <Link to="https://coinmarketcap.com/currencies/3dpass/">
                  <li>CoinMarketCap</li>
                </Link>
                <Link to="https://www.coingecko.com/en/coins/3dpass">
                  <li>CoinGecko</li>
                </Link>
                <Link to="https://coinpaprika.com/coin/p3d-3dpass-coin/">
                  <li>Coinpaprika</li>
                </Link>
                <Link to="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
                  <li>Livecoinwatch</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://blockspot.io/coin/3dpass-coin/">
                  <li>Blockspot</li>
                </Link>
                <Link to="https://coincodex.com/crypto/3dpass/">
                  <li>Coincodex</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Exchanges</div>
              <ul className="page-content-text">
              <Link to="https://www.mexc.com/exchange/P3D_USDT">
                  <li>MEXC P3D/USDT</li>
                </Link>
                <Link to="https://xeggex.com/market/P3D_USDT">
                  <li>Xeggex P3D/USDT</li>
                </Link>
                <Link to="https://xeggex.com/market/P3D_BTC">
                  <li>Xeggex P3D/BTC</li>
                </Link>
                <Link to="https://www.coinex.com/en/exchange/p3d-usdt">
                  <li>Coinex P3D/USDT</li>
                </Link>
                <Link to="https://swap.3dpscan.io">
                  <li>3DPass swap DEX</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Social Media</div>
              <ul className="page-content-text">
                <Link to="https://twitter.com/3Dpass_genesis">
                  <li>X [Genesis] (major news only)</li>
                </Link>
                <Link to="https://x.com/3dpass_open_gov">
                  <li>X (The Open Gov news)</li>
                </Link>
                <Link to="https://twitter.com/3DPassTR">
                  <li>X (community)</li>
                </Link>
                <Link to="https://twitter.com/3DPassArmy">
                  <li>X (community)</li>
                </Link>
                <Link to="https://www.youtube.com/channel/UCYkrRxTgAQYwzFqRuQPOZ4w">
                  <li>Youtube</li>
                </Link>
                <Link to="https://www.instagram.com/3dpass_org/">
                  <li>Instagram</li>
                </Link>
                <Link to="https://discord.com/invite/u24WkXcwug">
                  <li>Discord</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://t.me./threedpass_updates">
                  <li>Tg channel [updates]</li>
                </Link>
                <Link to="https://t.me/pass3d">
                  <li>Tg group [Genesis]</li>
                </Link>
                <Link to="https://t.me/p3dtrading">
                  <li>Tg group [Price & Trading]</li>
                </Link>
                <Link to="https://t.me/pass3dESP">
                  <li>Tg group [Spanish]</li>
                </Link>
                <Link to="https://t.me/ger3dpass">
                  <li>Tg group [German]</li>
                </Link>
                <Link to="https://t.me/p3dtr">
                  <li>Tg group [Turkish]</li>
                </Link>
                <Link to="https://t.me/p3dpassru">
                  <li>Tg group [Russian]</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Source Codes</div>
              <ul className="page-content-text">
                <Link to="https://github.com/3Dpass/">
                  <li>3Dpass GitHub [Genesis]</li>
                </Link>
                <Link to="https://github.com/easy-3dp">
                  <li>Eeasy-3dp Node</li>
                </Link>
                <Link to="https://github.com/3DP-The-AllFather/unofficial-3dp-miner">
                  <li>3DP-The-AllFather miner</li>
                </Link>
                <Link to="https://github.com/seineken/unofficial-3dp-miner/">
                  <li>Seineken's miner "HiveOS integration"</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://github.com/WlinkNET/Prometheus/tree/main">
                  <li>Prometheus and Graphana by WlinkNet</li>
                </Link>
                <Link to="https://github.com/Caldera-Trade/3dp-registrar/">
                  <li>Idenity Registrar bot by Caldera</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="download">
          <div className="page-content-inner">
            <div className="page-content-title">
              Download: {" "}
            </div>
            <div className="page-content-text">
            <ul className="page-content-text">
              <li><Link to="https://github.com/3Dpass/3DP/releases">The Node latest release</Link></li>
              <li>Latest blockchian db snapshots <i>(by community)</i>: <Link to="https://github.com/xchainw/p3d-db/releases">Repo 1</Link>, {" "}
              <Link to="https://github.com/Snezhnaya-Fatui/p3d-mainnet-db">Repo 2</Link></li> 
              <li><Link to="/mainnet">Mainnet guidelines</Link></li>
            </ul>
            </div>
            <div className="page-table">
              <div className="page-table-header">
                <div className="page-table-left">
                  <div className="page-table-title">OS</div>
                </div>
                <div className="page-table-right">
                  <div className="page-table-title">Description</div>
                </div>
              </div>
              <div className="page-table-left page-table-info">Android</div>
              <div className="page-table-right page-table-content">
                <Link to="https://play.google.com/store/apps/details?id=com.threedpass.wallet">
                  Get the wallet on Google Play
                </Link>
              </div>
              <div className="page-table-left page-table-info">Windows</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
              </div>
              <div className="page-table-left page-table-info">Mac OS</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
              </div>
              <div className="page-table-left page-table-info">Linux</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass/3DP/releases">
                  Prebuilt poscan-consensus binaries{" "}
                </Link>
                |{" "}
                <Link to="https://3dpass.org/mainnet.html#mining_manually_linux">
                  How to build the Node manualy
                </Link>
              </div>
              <div className="page-table-left page-table-info">Source code</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass/">Github</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="use-cases">
          <div className="page-content-inner">
            <div className="page-content-title">Use Cases</div>
            <div className="page-content-subtitle" id="use-cases-diamonds">
              Diamonds and presious stones tokenization
            </div>
            <iframe
              src="https://www.youtube.com/embed/Yxc-nJj7qeQ"
              className="page-video"
              controls
              title="diamonds"
            ></iframe>
            <div className="page-content-subtitle" id="use-cases-gaming">
              Tokenization of items for Gaming, Virtual reality, Metaverse
            </div>
            <iframe
              src="https://www.youtube.com/embed/O6c3ZOB0Glg"
              className="page-video"
              controls
              title="diamonds"
            ></iframe>
            <div className="page-content-subtitle" id="use-cases-crypto">
              Real world objects as cryptocurrency wallets
            </div>
            <iframe
              src="https://www.youtube.com/embed/YAl2R_DefQE"
              className="page-video"
              controls
              title="diamonds"
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Community;
