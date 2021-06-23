import { createTest, destroyVM } from '../util';
import LayerPhoto from 'packages/layer-photo';

describe('LayerPhoto', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LayerPhoto, true);
    expect(vm.$el).to.exist;
  });
});

