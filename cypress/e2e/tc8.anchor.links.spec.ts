import ResourcesPage from "../pages/resources.page";

it('Validation of anchor links functionality in Resources tab articles', () => {
    const resourcePage = new ResourcesPage();

    resourcePage.open();
    resourcePage.selectArticleByText('The future of contact centers: AI adoption guide');
    resourcePage.selectAndVerifyLinkByText('Step-by-step guide to AI implementation with Telnyx');
    resourcePage.selectAndVerifyLinkByText('How AI technologies enhance contact centers');
    resourcePage.selectAndVerifyLinkByText("Market trends: AI's impact on contact centers");
});