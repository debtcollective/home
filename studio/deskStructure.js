import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('DC Home Studio')
    .items([
      S.listItem()
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
        ),
      S.listItem()
        .title('About Us')
        .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
      S.listItem()
        .title('Our Team')
        .child(S.document().schemaType('ourTeam').documentId('ourTeam')),
      S.listItem()
        .title('Popup')
        .child(S.document().schemaType('popup').documentId('popup'))
    ]);
