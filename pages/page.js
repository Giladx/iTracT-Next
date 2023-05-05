import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FeatureCard1 from '../components/feature-card1'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - iTracT</title>
          <meta
            name="description"
            content="Introducing iTracT, the next generation of smart, editable digital contracts."
          />
          <meta property="og:title" content="Page - iTracT" />
          <meta
            property="og:description"
            content="Introducing iTracT, the next generation of smart, editable digital contracts."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/410ff757-73b0-464d-9513-b5b6fc794b66/0906c020-6147-4773-a3b6-08399d5c452f?org_if_sml=1"
          />
        </Head>
        <header data-role="Accordion" className="page-header">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="page-image"
          />
          <div className="page-separator"></div>
          <nav className="page-nav">
            <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
          </nav>
          <div data-role="AccordionHeader" className="page-accordion-header">
            <svg viewBox="0 0 1024 1024" className="page-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="AccordionContent" className="page-accordion-content">
            <div className="page-nav1">
              <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
            </div>
          </div>
        </header>
        <div className="page-hero">
          <div className="page-container1">
            <span className="page-text">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
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
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
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
            </span>
            <div className="page-btn-group">
              <button className="page-button button">Get Started</button>
              <button className="page-button1 button">Learn More</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
            className="page-image1"
          />
        </div>
        <div className="page-hero1">
          <div className="page-container2">
            <h1 className="page-text07">Let&apos;s keep things organised</h1>
            <span className="page-text08">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
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
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
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
            </span>
            <button className="page-button2 button">Get Started</button>
          </div>
        </div>
        <div className="page-banner">
          <span className="page-text15">
            <span className="page-text16">Lorem ipsum dolor sit amet</span>
          </span>
          <h1 className="page-text17">Learn to keep it simple</h1>
          <span className="page-text18">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          </span>
          <div className="page-container3">
            <input
              type="text"
              placeholder="Email here..."
              className="page-textinput input"
            />
            <button className="page-button3 button">Subscribe</button>
          </div>
          <div className="page-features">
            <h1 className="page-text25">Discover our unique features</h1>
            <div className="page-container4">
              <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName7"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName6"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName5"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName4"></FeatureCard1>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .page-image {
            height: 2rem;
          }
          .page-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-gray-900);
          }
          .page-accordion-header {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .page-accordion-content {
            display: flex;
            overflow: hidden;
            max-height: 0;
            transition: 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
          }
          .page-nav1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .page-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .page-text {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .page-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .page-button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .page-button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .page-button1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .page-image1 {
            width: 400px;
            object-fit: cover;
          }
          .page-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-color: #d9d9d9;
            background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGxhbXAlMjBtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjE2NDMxOA&ixlib=rb-1.2.1&h=1200');
            background-position: bottom;
          }
          .page-container2 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .page-text07 {
            font-size: 3rem;
            max-width: 25rem;
          }
          .page-text08 {
            font-size: 1.15rem;
            max-width: 60%;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .page-button2 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .page-button2:hover {
            transform: scale(1.02);
          }
          .page-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .page-text15 {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
          }
          .page-text16 {
            text-transform: uppercase;
          }
          .page-text17 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-text18 {
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .page-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
          }
          .page-button3 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .page-button3:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          .page-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .page-text25 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .page-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .page-nav1 {
              padding-top: 16px;
            }
            .page-hero {
              flex-direction: column;
            }
            .page-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .page-text {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .page-text18 {
              width: 100%;
            }
            .page-text25 {
              align-self: center;
            }
            .page-container4 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .page-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .page-nav {
              display: none;
            }
            .page-icon {
              display: flex;
            }
            .page-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .page-image1 {
              width: 80%;
            }
            .page-hero1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-text07 {
              text-align: center;
            }
            .page-text08 {
              max-width: 100%;
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .page-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-text18 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .page-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .page-header {
              padding: var(--dl-space-space-unit);
            }
            .page-separator {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .page-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .page-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .page-btn-group {
              flex-direction: column;
            }
            .page-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .page-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .page-text08 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .page-button2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .page-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .page-container3 {
              align-items: center;
              flex-direction: column;
            }
            .page-button3 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .page-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .page-container4 {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
