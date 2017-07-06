import { Angular2CodecraftPage } from './app.po';

describe('angular2-codecraft App', () => {
  let page: Angular2CodecraftPage;

  beforeEach(() => {
    page = new Angular2CodecraftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
