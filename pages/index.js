import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>iTracT</title>
          <meta
            name="description"
            content="Introducing iTracT, the next generation of smart, editable digital contracts."
          />
          <meta property="og:title" content="iTracT" />
          <meta
            property="og:description"
            content="Introducing iTracT, the next generation of smart, editable digital contracts."
          />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link href="/">
              <a className="home-link">
                <img
                  alt="logo"
                  src="/playground_assets/itract-final-longways.svg"
                  className="home-logo"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
            </div>
            <div data-thq="thq-navbar-btn-group" className="home-btn-group">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container01">
                  <Link href="/">
                    <a className="home-link1">
                      <img
                        alt="image"
                        src="/playground_assets/itract-final-longways.svg"
                        className="home-image"
                      />
                    </a>
                  </Link>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="home-text05">About</span>
                  <span className="home-text06">Features</span>
                  <span className="home-text07">Pricing</span>
                  <span className="home-text08">Team</span>
                  <span className="home-text09">Blog</span>
                </nav>
                <div className="home-container02">
                  <button className="home-login1 button">Login</button>
                  <button className="button home-register1">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-container03">
            <h1 className="home-text10">
              <span>Introducing iTracT,</span>
              <br></br>
              <span>
                {' '}
                the next generation of smart, editable digital contracts
              </span>
            </h1>
            <span className="home-text14">
              <span>
                With iTracT, you can easily create, edit, and sign contracts
                online, without the need for paper or in-person signatures.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btn-group1">
              <button className="home-button button">Get Started</button>
              <button className="home-button1 button">Learn More</button>
            </div>
          </div>
        </div>
        <div className="home-container04">
          <div className="home-container05">
            <span className="home-text18">
              <span>
                Introducing iTracT, the next generation of smart, editable
                digital contracts. With iTracT, you can easily create, edit, and
                sign contracts online, without the need for paper or in-person
                signatures.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container06">
            <span className="home-text22">
              iTracT uses cutting-edge technology to make the contract creation
              process simple and efficient. The platform&apos;s intuitive
              interface allows users to quickly and easily create contracts
              using pre-written templates or by starting from scratch. Users can
              also edit and update contracts as needed, ensuring that the
              agreement is always up-to-date and accurate.
            </span>
          </div>
          <div className="home-container07">
            <span className="home-text23">
              One of the key features of iTracT is its ability to allow for
              digital signatures. This means that all parties involved in the
              contract can sign the agreement electronically, without the need
              for in-person signatures or physical documents. This feature not
              only makes the contract process more efficient but also helps to
              reduce the risk of fraud and errors.
            </span>
          </div>
          <div className="home-container08">
            <span className="home-text24">
              <span>
                iTracT also offers advanced security features to ensure that
                your contracts are kept safe and secure. The platform uses
                encryption and other security measures to protect your data, and
                all documents are stored in a secure, cloud-based system.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container09">
            <span className="home-text28">
              Overall, iTracT is the perfect solution for businesses and
              individuals who want to streamline their contract process and move
              away from paper-based agreements. With its user-friendly
              interface, advanced security features, and ability to allow for
              digital signatures, iTracT is the smart choice for anyone looking
              to create and manage digital contracts.
            </span>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<style>
::-webkit-scrollbar{
        height: 10px;
        width: 10px;
        background: #000;
    }
    ::-webkit-scrollbar-thumb:horizontal{
        background: #FFF;
        border-radius: 10px;
        border: 1px solid #000;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #FFF;
    }
</style>


`}
          ></DangerousHTML>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxkaWdpdGFsJTIwY29udHJhY3R8ZW58MHx8fHwxNjczOTA1OTUy&amp;ixlib=rb-4.0.3&amp;h=1500"
          className="home-image1"
        />
        <div className="home-container10">
          <span className="home-text29">
            <span>
              iTracT, the next generation of smart, editable digital contracts,
              offers many benefits when it comes to using blockchain technology.
            </span>
            <br></br>
            <br></br>
            <span>
              One of the main benefits of using blockchain with iTracT is the
              increased security and immutability of the contracts. Blockchain
              is a decentralized, distributed ledger that allows for secure and
              transparent record-keeping. This means that once a contract is
              stored on the blockchain, it cannot be altered or tampered with,
              providing an added layer of security for the parties involved.
            </span>
            <br></br>
            <br></br>
            <span>
              Another benefit of using blockchain with iTracT is the ability for
              smart contracts. Smart contracts are self-executing contracts with
              the terms of the agreement written directly into code. This means
              that the contract can automatically execute when certain
              conditions are met, without the need for manual intervention. This
              can help to streamline the contract process and reduce the risk of
              errors or disputes.
            </span>
            <br></br>
            <br></br>
            <span>
              Blockchain also allows for increased transparency and traceability
              in the contract process. All parties involved in the contract can
              view and track the agreement on the blockchain, which can help to
              build trust and transparency in the process.
            </span>
            <br></br>
            <br></br>
            <span>
              Lastly, blockchain technology enables the use of digital assets,
              like cryptocurrency, to be used as a form of payment for the
              contract. This can provide an efficient and secure way to handle
              transactions and payments.
            </span>
            <br></br>
            <br></br>
            <span>
              Overall, the use of blockchain technology with iTracT provides
              added security, immutability, smart contract functionality,
              transparency, and the ability to handle digital assets as a form
              of payment. These benefits make iTracT an attractive option for
              businesses and individuals looking to create and manage digital
              contracts on a blockchain platform.
            </span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            filter: invert(100%);
            height: 4rem;
            text-decoration: none;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text {
            color: var(--dl-color-gray-white);
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text03 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text04 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-link1 {
            display: contents;
          }
          .home-image {
            filter: invert(100%);
            height: 2rem;
            text-decoration: none;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container03 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text10 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text14 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-button1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text18 {
            color: var(--dl-color-gray-white);
            overflow: hidden;
            animation: typing 3s steps(55, end),
              blink-caret 0.5s step-end infinite alternate;
            font-size: 22px;
            white-space: normal;
            -webkit-animation: typing 3s steps(55, end),
              blink-caret 0.5s step-end infinite alternate;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            width: 100%;
            padding: var(--dl-space-space-unit);
            overflow: hidden;
            animation: typing 3s steps(55, end),
              blink-caret 0.5s step-end infinite alternate;
            font-size: 22px;
            -webkit-animation: typing 3s steps(55, end),
              blink-caret 0.5s step-end infinite alternate;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text23 {
            color: var(--dl-color-gray-white);
            width: 100%;
            padding: var(--dl-space-space-unit);
            font-size: 22px;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 22px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text28 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-image1 {
            width: 400px;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            align-items: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .home-text29 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          @media (max-width: 1200px) {
            .home-header {
              height: auto;
            }
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-logo {
              height: 3rem;
            }
            .home-container04 {
              height: auto;
              padding: var(--dl-space-space-twounits);
            }
            .home-container10 {
              height: auto;
              padding: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-image {
              height: 3rem;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-text05 {
              color: var(--dl-color-gray-white);
            }
            .home-text06 {
              color: var(--dl-color-gray-white);
            }
            .home-text07 {
              color: var(--dl-color-gray-white);
            }
            .home-text08 {
              color: var(--dl-color-gray-white);
            }
            .home-text09 {
              color: var(--dl-color-gray-white);
            }
            .home-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon04 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-icon06 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-icon08 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-hero {
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text14 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container04 {
              flex-direction: column;
            }
            .home-container05 {
              top: -177px;
              right: 60px;
              position: static;
            }
            .home-container06 {
              position: static;
            }
            .home-container07 {
              position: static;
            }
            .home-container08 {
              position: static;
            }
            .home-container09 {
              top: -594px;
              left: 108px;
              position: static;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text02 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text04 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text14 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image1 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group1 {
              flex-direction: column;
            }
            .home-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
