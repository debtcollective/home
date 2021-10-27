import React from 'react';
import './style.css';
import Masonry from 'masonry-layout';

const DebtAbolitionContent = () => {
  const purchaseAgreements = document.querySelector(
    '.purchase-agreements'
  ) as HTMLElement;

  console.log('purchase-agreements', purchaseAgreements);

  const msnry = new Masonry(purchaseAgreements, {
    itemSelector: '.purchase-agreement',
    gutter: 22
  });

  return (
    <div className="page-debt-abolition">
      <h1 className="entry-title">Debt Abolition</h1>
      <p className="lede">
        We are building a movement to abolish debts and win a world where no one
        has to take on debt to survive.
      </p>
      <h2>Our tactics for debt abolition include:</h2>
      <ul className="is-style-inline-bullet-list">
        <li>
          <span>
            Pressuring the state to cancel debts and change policy through{' '}
            <a
              href="https://actionnetwork.org/petitions/bidenjubilee100"
              data-type="page"
              data-id="242"
            >
              strategic organizing campaigns
            </a>
            .
          </span>
        </li>
        <li>
          <span>
            Providing our members with a{' '}
            <a
              href="http://tools.debtcollective.org"
              data-type="URL"
              data-id="abolition-tools.debtcollective.org"
            >
              suite of debt dispute tools
            </a>{' '}
            that keep money in their pockets.
          </span>
        </li>
        <li>
          <span>
            Purchasing debts in order to erase them in collaboration with the
            Rolling Jubilee Fund.
          </span>
        </li>
      </ul>
      <div className="impactful-callout wp-block-site-functionality-impactful-callout">
        <h3 className="impactful-callout__subtitle">
          Through Our Debt Abolition Debt Buying Process
          <br />
          We’ve Abolished
        </h3>
        <h2 className="impactful-callout__title">$31,982,455.76</h2>
        <h3 className="impactful-callout__subtitle">In Assorted Medical</h3>
      </div>
      <h2>FAQs</h2>
      <div className="faq-list wp-block-site-functionality-faqs">
        <article
          id="faq-61706b120afe8"
          className="faq wp-block-site-functionality-faq active"
        >
          <div className="faq__question question">
            <h3>What is the Rolling Jubilee Fund?</h3>
            <a href="#" className="chevron">
              <svg
                width="27"
                height="42"
                viewBox="0 0 27 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="faq__answer answer">
            <div className="answer-wrapper">
              <p>
                The Rolling Jubilee Fund is a 501c4 entity that launched in
                2012. The Fund is distinct from the Debt Collective and
                dedicated to debt cancellation and public education. The Rolling
                Jubilee Fund is collaborating with the Debt Collective and other
                partners on strategic initiatives to build debtor power and
                drive system change. You can read about the Rolling Jubilee in
                the Our History and Victories section.
              </p>
            </div>
          </div>
        </article>
        <article
          id="faq-61706b120b048"
          className="wp-block-site-functionality-faq"
        >
          <div className="faq__question question">
            <h3>How does it work?</h3>
            <a href="#" className="chevron">
              <svg
                width="27"
                height="42"
                viewBox="0 0 27 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="faq__answer answer">
            <div className="answer-wrapper">
              <p>
                Our debts are someone else’s assets. Investors buy and sell debt
                to each other for pennies on the dollar on secondary debt
                markets, and then hire debt collectors to try to collect the
                full amount from people struggling with their bills. The Rolling
                Jubilee Fund acts as a debt purchaser, but instead of collecting
                on the debts it purchases, it erases them.
              </p>{' '}
            </div>
          </div>
        </article>

        <article
          id="faq-61706b120b123"
          className="wp-block-site-functionality-faq"
        >
          <div className="faq__question question">
            <h3>
              Does the Debt Collective think that cancelling debt is how we can
              win?{' '}
            </h3>
            <a href="#" className="chevron">
              <svg
                width="27"
                height="42"
                viewBox="0 0 27 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="faq__answer answer">
            <div className="answer-wrapper">
              <p>
                No, the Rolling Jubilee Fund is a public education initiative
                that is separate from the Debt Collective. Collaborating with
                the Rolling Jubilee Fund is one way the Debt Collective can
                provide relief while continuing to campaign and organize to
                build debtor power. The Rolling Jubilee reminds people that
                debts can disappear, and hopefully inspires people to join the
                Debt Collective to demand deeper change.
              </p>{' '}
            </div>
          </div>
        </article>

        <article
          id="faq-61706b120b194"
          className="wp-block-site-functionality-faq"
        >
          <div className="faq__question question">
            <h3>
              Can you abolish my debt or the debt of a specific community or
              place?{' '}
            </h3>
            <a href="#" className="chevron">
              <svg
                width="27"
                height="42"
                viewBox="0 0 27 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="faq__answer answer">
            <div className="answer-wrapper">
              <p>
                No. When buying debt on the secondary debt market there is no
                way to seek out a specific place or person in order to buy that
                place or person’s defaulted debt. Anonymous accounts are bundled
                together and sold as part of a larger, anonymized portfolio.
                These peculiarities are part of the scandal that we are trying
                to highlight.
              </p>{' '}
            </div>
          </div>
        </article>

        <article
          id="faq-61706b120b283"
          className="wp-block-site-functionality-faq"
        >
          <div className="faq__question question">
            <h3>Does this create a tax burden for debtors? </h3>
            <a href="#" className="chevron">
              <svg
                width="27"
                height="42"
                viewBox="0 0 27 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="faq__answer answer">
            <div className="answer-wrapper">
              <p>
                The Rolling Jubilee was created in consultation with a team of
                attorneys. They have thoroughly researched the tax implications
                and do not believe that beneficiaries are obligated to pay taxes
                on debts the Rolling Jubilee abolishes in this manner. It is the
                Rolling Jubilee’s position that it is making a tax-free gift to
                the people whose debt it is abolishing. See
                strikedebt.org/taxanalyst for an interview about Rolling Jubilee
                with the {"USA's"} top-ranked tax lawyer.
              </p>
              <p>There could be more text</p>{' '}
            </div>
          </div>
        </article>
      </div>

      <h2>What has the Rolling Jubilee done to date?</h2>

      <div className="purchase-agreements wp-block-site-functionality-purchase-agreements">
        <article className="purchase-agreement-container purchase-agreement post-1076 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-att-wireless-debts purchase_agreement_type-judgement-debts">
          <div className="purchase-agreement__date entry-meta">
            July 16, 2018{' '}
          </div>

          <h3 className="purchase-agreement__title entry-title">
            Mayfield Settlement
          </h3>

          <div className="purchase-agreement__summary entry-content">
            <p>As a part of a className action settlement a debt buyer</p>
          </div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">42,451,689</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Judgement debts/AT&amp;T Wireless Debts{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">59,300</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">716</span>{' '}
              </dd>
            </dl>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1078 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-judgement-debts">
          <div className="purchase-agreement__date entry-meta">
            July 22, 2016{' '}
          </div>

          <h3 className="purchase-agreement__title entry-title">
            Sykes Settlement
          </h3>

          <div className="purchase-agreement__summary entry-content">
            <p>
              As a part of a className action settlement a debt buyer agreed
              transfer these accounts to the Rolling Jubilee for the purpose of
              purpose of canceling the debts.
            </p>
          </div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">661,670,697</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Judgement Debts{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">168,693</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">3,922</span>{' '}
              </dd>
            </dl>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1079 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-payday-loans">
          <div className="purchase-agreement__date entry-meta">
            February 5, 2015{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">3,945,016</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Payday Loans{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">8,629</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">457</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">31,560.13</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Payday_Loans_2-5-2015.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1081 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-student-debt">
          <div className="purchase-agreement__date entry-meta">
            November 26, 2014{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">13,384,642</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Student Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">9,438</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">1,418</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">1.00</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Student_11-26-2014.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1080 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-private-probation-debt">
          <div className="purchase-agreement__date entry-meta">
            August 27, 2014{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">497,899</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Private Probation Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">4,349</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">114</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">14,600.00</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Private_Probation_8-27-2014.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1082 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-student-debt">
          <div className="purchase-agreement__date entry-meta">
            May 20, 2014{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">3,856,866</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Student Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">2,761</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">1,399</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">206,709</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Student_5-20-2014.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1083 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-medical-debt">
          <div className="purchase-agreement__date entry-meta">
            May 13, 2013{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">12,291,379</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Medical Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">1,919</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">6,405</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">236,001.71</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Medical_5-13-2013.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1084 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-medical-debt">
          <div className="purchase-agreement__date entry-meta">
            March 24, 2013{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">1,223,836</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Medical Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">774</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">1,540</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">27,500.00</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Medical_3-24-2013.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1085 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-medical-debt">
          <div className="purchase-agreement__date entry-meta">
            January 23, 2013{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">1,119,209</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Medical Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">1,064</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:{' '}
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">903</span>{' '}
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:{' '}
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">9,500.00</span>{' '}
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Medical_1-23-2013.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>

        <article className="purchase-agreement-container purchase-agreement post-1086 purchase_agreement type-purchase_agreement status-publish hentry purchase_agreement_type-medical-debt">
          <div className="purchase-agreement__date entry-meta">
            November 9, 2012{' '}
          </div>

          <div className="purchase-agreement__summary entry-content"></div>

          <div className="purchase-agreement__details">
            <dl>
              <dt className="purchase-agreement__amount entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">100,146</span>{' '}
              </dt>
              <dd className="purchase-agreement__amount entry-label">
                abolished{' '}
              </dd>
              <dt className="purchase-agreement__type entry-label">Type: </dt>
              <dd className="purchase-agreement__type entry-value">
                Medical Debt{' '}
              </dd>
              <dt className="purchase-agreement__number entry-label">
                Number of Debtors:{' '}
              </dt>
              <dd className="purchase-agreement__number entry-value">
                <span className="value">44</span>{' '}
              </dd>
              <dt className="purchase-agreement__average entry-label">
                Average Debt/Debtor:
              </dt>
              <dd className="purchase-agreement__average entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">2,276</span>
              </dd>
              <dt className="purchase-agreement__purchase-price entry-label">
                Purchase Price:
              </dt>
              <dd className="purchase-agreement__purchase-price entry-value">
                <span className="currency-symbol">$</span>
                <span className="value">5,000.00</span>
              </dd>
            </dl>
            <a
              href="../../../static/purchase-agreements/Medical_11-9-2012.pdf"
              aria-label="Download Purchase Agreement as PDF"
              target="_blank"
              download
            >
              Download Purchase Agreement
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DebtAbolitionContent;
