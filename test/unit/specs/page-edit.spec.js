import { createTest, destroyVM } from '../util';
import PageEdit from 'packages/page-edit';

describe('PageEdit', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PageEdit, true);
    expect(vm.$el).to.exist;
  });
});

