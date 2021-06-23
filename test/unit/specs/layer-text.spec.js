import { createTest, destroyVM } from '../util';
import LayerText from 'packages/layer-text';

describe('LayerText', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LayerText, true);
    expect(vm.$el).to.exist;
  });
});

