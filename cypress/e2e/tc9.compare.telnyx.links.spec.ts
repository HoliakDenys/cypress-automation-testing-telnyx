import HomePage from "../pages/home.page";

describe('Compare Telnyx footer links validation', () => {
    const homepage = new HomePage();

    beforeEach(() => {
        homepage.open();
    });

    it('should validate "Telnyx vs. Twilio" footer link', () => {
        homepage.clickFooterLinkByText('Telnyx vs. Twilio');
        homepage.verifyUrlContains('the-better-twilio-alternative');
    });

    it('should validate "Telnyx vs. Bandwidth" footer link', () => {
        homepage.clickFooterLinkByText('Telnyx vs. Bandwidth');
        homepage.verifyUrlContains('the-better-bandwidth-alternative');
    });

    it('should validate "Telnyx vs. Kore Wireless" footer link', () => {
        homepage.clickFooterLinkByText('Telnyx vs. Kore Wireless');
        homepage.verifyUrlContains('the-better-kore-wireless-alternative');
    });

    it('should validate "Telnyx vs. Hologram" footer link', () => {
        homepage.clickFooterLinkByText('Telnyx vs. Hologram');
        homepage.verifyUrlContains('the-better-hologram-alternative');
    });

    it('should validate "Telnyx vs. Vonage" footer link', () => {
        homepage.clickFooterLinkByText('Telnyx vs. Vonage');
        homepage.verifyUrlContains('the-better-vonage-voice-api-alternative');
    });

    it('should validate "Telnyx vs. Amazon S3" footer link', () => {
        homepage.clickFooterLinkByText('Telnyx vs. Amazon S3');
        homepage.verifyUrlContains('the-better-amazon-s3-alternative');
    });
});