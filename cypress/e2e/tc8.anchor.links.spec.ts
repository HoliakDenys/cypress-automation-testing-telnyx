import ResourcesPage from "../pages/resources.page";

describe('Validation of anchor links functionality in Resources tab articles', () => {
    const resourcePage = new ResourcesPage();

    beforeEach(() => {
        resourcePage.open();
        resourcePage.selectArticleByText('The future of contact centers: AI adoption guide');
    });

    it('Validates link: Step-by-step guide to AI implementation with Telnyx', () => {
        resourcePage.selectAndVerifyLinkByText('Step-by-step guide to AI implementation with Telnyx');
    });

    it('Validates link: How AI technologies enhance contact centers', () => {
        resourcePage.selectAndVerifyLinkByText('How AI technologies enhance contact centers');
    });

    it("Validates link: Market trends: AI's impact on contact centers", () => {
        resourcePage.selectAndVerifyLinkByText("Market trends: AI's impact on contact centers");
    });
});