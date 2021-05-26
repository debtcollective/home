import S from '@sanity/desk-tool/structure-builder';

const homePage = S.listItem()
  .id('home')
  .title('Home Page')
  .child(
    S.list()
      .title('Home page sections')
      .items([
        S.listItem()
          .id('homeHero')
          .title('Hero')
          .child(
            S.document()
              .documentId('homeHero')
              .schemaType('homeHero')
              .title('Hero')
          ),
        S.listItem()
          .id('homePageFeatures')
          .title('Features section')
          .child(
            S.document()
              .documentId('homePageFeatures')
              .schemaType('homePageFeatures')
              .title('Features section')
          ),
        S.listItem()
          .id('debtRelief')
          .title('Debt Relief')
          .child(
            S.document()
              .documentId('debtRelief')
              .schemaType('debtRelief')
              .title('Debt Relief')
          )
      ])
  );

const donationPage = S.listItem()
  .id('donation')
  .title('Donation Page')
  .child(
    S.list()
      .title('Donation page sections')
      .items([
        S.listItem()
          .id('donationHero')
          .title('Hero')
          .child(
            S.document()
              .documentId('donationHero')
              .schemaType('donationHero')
              .title('Hero')
          ),
        S.listItem()
          .id('donationPageFeatures')
          .title('How we will use the money?')
          .child(
            S.document()
              .documentId('donationPageFeatures')
              .schemaType('donationPageFeatures')
              .title('How we will use the money?')
          )
      ])
  );

const joinTheUnionPage = S.listItem()
  .id('union')
  .title('Join the union Page')
  .child(
    S.list()
      .title('Join the union page sections')
      .items([
        S.listItem()
          .id('unionHero')
          .title('Hero')
          .child(
            S.document()
              .documentId('unionHero')
              .schemaType('unionHero')
              .title('Hero')
          ),
        S.listItem()
          .id('debtorsUnion')
          .title('What is a Debtor’s Union?')
          .child(
            S.document()
              .documentId('debtorsUnion')
              .schemaType('debtorsUnion')
              .title('What is a Debtor’s Union?')
          ),
        S.listItem()
          .id('membershipBenefits')
          .title('Membership Benefits')
          .child(
            S.document()
              .documentId('membershipBenefits')
              .schemaType('membershipBenefits')
              .title('Membership Benefits')
          )
      ])
  );

const aboutUsPage = S.listItem()
  .id('aboutUs')
  .title('About Us Page')
  .child(
    S.list()
      .title('About Us page sections')
      .items([
        S.listItem()
          .id('aboutUsHero')
          .title('Hero')
          .child(
            S.document()
              .documentId('aboutUsHero')
              .schemaType('aboutUsHero')
              .title('Hero')
          ),
        S.listItem()
          .id('aboutUsContent')
          .title('Content')
          .child(
            S.document()
              .documentId('aboutUsContent')
              .schemaType('aboutUsContent')
              .title('Content')
          )
      ])
  );

const ourTeamPage = S.listItem()
  .id('ourTeam')
  .title('Our Team Page')
  .child(
    S.list()
      .title('Our Team page sections')
      .items([
        S.listItem()
          .id('ourTeamHero')
          .title('Hero')
          .child(
            S.document()
              .documentId('ourTeamHero')
              .schemaType('ourTeamHero')
              .title('Hero')
          ),
        S.listItem()
          .id('teamMembers')
          .title('Team Members')
          .child(
            S.document()
              .documentId('teamMembers')
              .schemaType('teamMembers')
              .title('Team Members')
          )
      ])
  );

const popup = S.listItem()
  .title('Popup')
  .child(S.document().schemaType('popup').documentId('popup'));

export default () =>
  S.list()
    .title('DC Home Studio')
    .items([
      homePage,
      donationPage,
      joinTheUnionPage,
      aboutUsPage,
      ourTeamPage,
      popup
    ]);
