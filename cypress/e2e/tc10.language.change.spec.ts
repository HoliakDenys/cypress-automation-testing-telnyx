import IotSimPage from "../pages/iot.sim.page";

it('Validation of language change on "IoT SIM Card"', () => {
    const iotSimPage = new IotSimPage();

    iotSimPage.open();
    iotSimPage.checkJapanese();
    iotSimPage.checkKorean();
    iotSimPage.checkEnglish();
})