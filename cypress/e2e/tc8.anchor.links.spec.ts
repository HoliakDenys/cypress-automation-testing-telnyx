import ResourcesPage from "../pages/resources.page";

it('Validation of anchor links functionality in Resources tab articles', () => {
    const resourcePage = new ResourcesPage();

    resourcePage.open();
    resourcePage.selectArticleByText('The future of contact centers: AI adoption guide');

    resourcePage.selectLinkByText("Market trends: AI's impact on contact centers");
    resourcePage.verifyElementInViewByText("Market trends: AI's impact on contact centers");

    resourcePage.selectLinkByText('How AI technologies enhance contact centers');
    resourcePage.verifyElementInViewByText('How AI technologies enhance contact centers');

    resourcePage.selectLinkByText('How AI technologies enhance contact centers');
    resourcePage.verifyElementInViewByText('How AI technologies enhance contact centers');

})