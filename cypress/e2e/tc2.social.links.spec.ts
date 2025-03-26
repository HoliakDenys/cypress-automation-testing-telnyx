import HomePage from "../pages/home.page";

it('Validation of LinkedIn social link on the Home page', () => {
    const homepage = new HomePage();

    homepage.open();
    homepage.checkSocialLink('LinkedIn');
})