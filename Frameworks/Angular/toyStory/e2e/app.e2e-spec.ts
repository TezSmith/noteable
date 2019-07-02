import { ToyStoryPage } from './app.po';

describe('toy-story App', function() {
  let page: ToyStoryPage;

  beforeEach(() => {
    page = new ToyStoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
