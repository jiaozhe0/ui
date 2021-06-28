import { createTest, destroyVM } from '../util';
import LayerImage from 'packages/layerImage';

describe('LayerImage', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LayerImage, true);
    expect(vm.$el).to.exist;
  });
});

