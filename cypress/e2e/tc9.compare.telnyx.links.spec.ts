import HomePage from "../pages/home.page";

it('Compare Telnyx footer links validation', () => {
    const homepage = new HomePage();
    
    homepage.open();
    homepage.clickFooterLinkByText('Telnyx vs. Twilio');
    homepage.verifyUrlContains('the-better-twilio-alternative');

    homepage.clickFooterLinkByText('Telnyx vs. Bandwidth');
    homepage.verifyUrlContains('the-better-bandwidth-alternative');

    homepage.clickFooterLinkByText('Telnyx vs. Kore Wireless');
    homepage.verifyUrlContains('the-better-kore-wireless-alternative');

    homepage.clickFooterLinkByText('Telnyx vs. Hologram');
    homepage.verifyUrlContains('the-better-hologram-alternative');

    homepage.clickFooterLinkByText('Telnyx vs. Vonage');
    homepage.verifyUrlContains('the-better-vonage-voice-api-alternative');

    homepage.clickFooterLinkByText('Telnyx vs. Amazon S3');
    homepage.verifyUrlContains('the-better-amazon-s3-alternative');
})